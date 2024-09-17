import ResponseClass from "./Response";
import axios from "axios";
import Start from "./Start";
import ResStatus from "../Config/ResStatus";
import EMails from "../Interface/Email";
import { createTransport } from "nodemailer";
import EMailType from "../Config/EmailType";
import SysEmailParamsMessage from "../Config/response/SysEmailParams";


/**
 * Email class
 * @class EmailClass
 * @classdesc Used to send emails
 */
class EmailSender extends Start {

  /**
   * Send email Through SendGrid
   * @param {EMails} from
   * @param {EMails[]} To 
   * @param {string} subject
   * @param {string} body
   * @param {string} API_KEY
   * @param {EMails[]} BCC - Optional
   * @param {EMails[]} CC - Optional
   * @returns {Promise<ResponseClass>}
   */
  async sendEmailSendGrid(
    from: EMails,
    To: EMails[],
    subject: string,
    body: string,
    API_KEY: string,
    BCC?: EMails[],
    CC?: EMails[],
  ): Promise<void> {
    const data = {
      personalizations: [
        {
          to: To.map((email) => {
            return {
              email: email.mailTo
            }
          }),
          bcc: BCC ? BCC.map((email) => {
            return {
              email: email.mailTo,
            }
          }) : undefined,
          cc: CC ? CC.map((email) => {
            return {
              email: email.mailTo,
            }
          }) : undefined,
        },
      ],
      from: from,
      subject: subject,
      content: [
        {
          type: "text/html",
          value: body,
        },
      ],
    };
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      data,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  /**
   * Send email Through Brevo
   * @param {EMails} from
   * @param {EMails[]} To
   * @param {string} subject
   * @param {string} body
   * @param {string} API_KEY
   * @param {EMails[]} BCC - Optional
   * @param {EMails[]} CC - Optional
   * @returns {Promise<ResponseClass>}
   */
  async sendEmailBrevo(
    from: EMails,
    To: EMails[],
    subject: string,
    body: string,
    API_KEY: string,
    BCC?: EMails[],
    CC?: EMails[],
  ): Promise<void> {
    const data = {
      sender: {
        email: from.mailTo,
        name: from.name,
      },
      to: To.map((email) => {
        return {
          email: email.mailTo,
          name: email.name
        }
      }),
      cc: CC ? CC.map((email) => {
        return {
          email: email.mailTo,
          name: email.name
        }
      }) : undefined,
      bcc: BCC ? BCC.map((email) => {
        return {
          email: email.mailTo,
          name: email.name
        }
      }) : undefined,
      subject: subject,
      htmlContent: body,
    }

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
      }
    );
  }

  /**
   * Send email Through SMTP
   * @param {EMails} from
   * @param {EMails[]} To
   * @param {string} subject
   * @param {string} body
   * @param {string} SMTP_HOST
   * @param {string} SMTP_PORT
   * @param {string} SMTP_USER
   * @param {string} SMTP_PASS
   * @param {EMails[]} BCC - Optional
   * @param {EMails[]} CC - Optional
   * @returns {Promise<ResponseClass>}
   */
  async sendEmailSMTP(
    from: EMails,
    To: EMails[],
    subject: string,
    body: string,
    SMTP_HOST: string,
    SMTP_PORT: string,
    SMTP_USER: string,
    SMTP_PASS: string,
    BCC?: EMails[],
    CC?: EMails[],
  ): Promise<void> {
    const transporter = createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as any);

    await transporter.sendMail({
      from: from.mailTo,
      to: To.map((email) => email.mailTo),
      cc: CC ? CC.map((email) => email.mailTo) : undefined,
      bcc: BCC ? BCC.map((email) => email.mailTo) : undefined,
      subject: subject,
      html: body,
    });
  }

  /**
   * Send email Through GMail Service
   * @param {EMails} from
   * @param {EMails[]} To
   * @param {string} subject
   * @param {string} body
   * @param {string} senderEmail
   * @param {string} senderPassword
   * @param {EMails[]} BCC - Optional
   * @param {EMails[]} CC - Optional
   * @returns {Promise<void>}
   */
  async sendEmailGMail(
    from: EMails,
    To: EMails[],
    subject: string,
    body: string,
    senderEmail: string,
    senderPassword: string,
    BCC?: EMails[],
    CC?: EMails[],
  ): Promise<void> {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    await transporter.sendMail({
      from: from.mailTo,
      to: To.map((email) => email.mailTo),
      cc: CC ? CC.map((email) => email.mailTo) : undefined,
      bcc: BCC ? BCC.map((email) => email.mailTo) : undefined,
      subject: subject,
      html: body,
    });
  }


  /**
   * Generate Body For New User
   * @description Generate Designed Html Content For New User Joining which contains the email and password
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  generateBodyForNewUser(name: string, email: string, password: string): string {
    return `
    <div style="background-color: #f4f4f4; padding: 20px;">
      <div style="background-color: white; padding: 20px; border-radius: 10px;">
        <h1>Hello ${name}</h1>
        <p>Your account has been created successfully</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>  
        <p>Click <a href="https://adinsight-sandbox.sddoc.in/">here</a> to login</p>
      </div>
    </div>
    `;
  }

  /**
   * Generate Body For Forget Password
   * @description Generate Designed Html Content For Forget Password which contains the email and password
   * @param {string} Name
   * @param {number} OTP
   * @param {string} Id
   * @param {string} Email
   */
  generateBodyForForgetPassword(Name: string, OTP: number, Id: string, Email: string) {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  color: #333333;
              }
              p {
                  color: #666666;
                  line-height: 1.6;
              }
              .footer {
                  text-align: center;
                  padding: 10px;
                  background-color: #333333;
                  color: #ffffff;
                  border-radius: 0 0 8px 8px;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Hello, ${Name}!</h1>
              <p>We received a request to reset your password. Enter the following OTP to reset your password:</p>
              <h2 style="text-align: center; font-size: 36px; color: #333333;">${OTP}</h2>
              <p>This OTP is valid for 1 minute only.</p>
              <p> Click <a href="https://facebook.sddoc.in/password/reset/${Email}/${Id}">here</a> to reset your password.</p>
              <p>If you didn't request a password reset, you can ignore this email.</p>
              <p>Best Regards,<br>The Team</p>
          </div>
          <div class="footer">
              &copy; 2024 Your Company. All rights reserved.
          </div>
      </body>
      </html>
    `
  }


  /**
   * Send Email
   * @description Send Email to the users
   * @param {EMails[]} To
   * @param {string} subject
   * @param {string} body
   * @param {EMails[]} BCC - Optional
   * @param {EMails[]} CC - Optional
   */
  async sendEmail(
    To: EMails[],
    subject: string,
    body: string,
    BCC?: EMails[],
    CC?: EMails[],
  ): Promise<void> {

    // let emailParams = await new SysEmailParams().getPrimary();
    let emailParams = {
      Type: EMailType.GMail,
      FromEmail: "deepakpythonwork@gmail.com",
      FromName: "Adinsight",
      SMTPDomain: "",
      SMTPPortNumber: 0,
      SMTPUserName: "deepakpythonwork@gmail.com",
      SMTPPassword: "uzed ghqu tkxz mjxf",
    }
    let from: EMails = {
      mailTo: emailParams.FromEmail,
      name: emailParams.FromName
    }

    switch (emailParams.Type) {
      // case EMailType.SendGrid:
      //   await this.sendEmailSendGrid(from, To, subject, body, emailParams.SendGridAPIKey, BCC, CC);
      //   break;
      // case EMailType.Brevo:
      //   await this.sendEmailBrevo(from, To, subject, body, emailParams.BrevoAPIKey, BCC, CC);
      //   break;
      // case EMailType.SMTP:
      //   await this.sendEmailSMTP(from, To, subject, body, emailParams.SMTPDomain, emailParams.SMTPPortNumber.toString(), emailParams.SMTPUserName, emailParams.SMTPPassword, BCC, CC);
      //   break;
        case EMailType.GMail:
          await this.sendEmailGMail(from, To, subject, body, emailParams.SMTPUserName, emailParams.SMTPPassword, BCC, CC);
        break;
      default:
        throw new ResponseClass(ResStatus.BadRequest, SysEmailParamsMessage.SysEmailParamsNotFound);
    }
  }






}

export default EmailSender;
