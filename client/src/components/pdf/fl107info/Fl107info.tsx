import React from 'react'
import SUPFl107info from "./SU107info";
export default function () {
    const [details, setDetails] = React.useState<SUPFl107info>(
        {} as SUPFl107info
      );
    
      function handleChange(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      }


      function handleSUPERIORCOURTOFCALIFORNIA(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      } 



    return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-107info </h3>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid black', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <h1 style={{ backgroundColor: 'black', color: 'white', padding: '10px', margin: '0' }}>FL-107-INFO Legal Steps for a Divorce or Legal 
            Separation</h1>
      </div>

      <div style={{ borderBottom: '2px solid black', padding: '10px' }}>
        <h2 style={{ margin: '10px 0' }}>STEP 1. Start Your Case</h2>
        <p>The <strong>petitioner</strong> (the person who files the first divorce or legal separation forms with the court) 
        fills out and files with the court clerk at least a <em>Petition—Marriage/Domestic Partnership</em> (form FL-100) 
        and a <em>Summons</em> (form FL-110) and, if there are children of the relationship, a <em>Declaration Under Uniform 
            Child Custody Jurisdiction and Enforcement Act</em> (form FL-105).</p>
        <ul style={{ marginLeft: '20px' }}>
          <li>The forms needed to start your case and information about filing fees and fee waivers are 
            available at <a style={{color:'blue'}} href="http://courts.ca.gov/filing" target="_blank" rel="noopener noreferrer">
            “Filing Your Case,” at courts.ca.gov/filing</a>.</li>
          <li>The court clerk will stamp and return copies of the filed forms to the <strong>petitioner</strong>.</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <span style={{ fontSize: '24px', transform: 'rotate(90deg)', display: 'inline-block' }}>⇩</span>
      </div>

      <div style={{ borderBottom: '2px solid black', padding: '10px' }}>
        <h2 style={{ margin: '10px 0' }}>STEP 2. Serve the Forms</h2>
        <p>Someone 18 or older—not the <strong>petitioner</strong>—serves the spouse or domestic 
        partner (called the <strong>respondent</strong>) with all the forms from Step 1 plus a blank 
        <em>Response—Marriage/Domestic Partnership</em> (form FL-120) and files with the court a 
        proof-of-service form, such as <em>Proof of Service of Summons</em> (form FL-115), telling 
        when and how the <strong>respondent</strong> was served. (To <em>serve</em> means “to give 
        in the proper legal way.”) For more information, see “Serving Your First Set of Court Forms” 
        at <a style={{color:'blue'}} href="http://courts.ca.gov/filing" target="_blank" rel="noopener noreferrer">
        courts.ca.gov/filing</a>.</p>
        <p>The <strong>respondent</strong> has 30 days to file and serve a <em>Response</em>. 
        So, the <strong>petitioner</strong> must wait 30 days before starting Step 4.</p>
      </div>

      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <span style={{ fontSize: '24px', transform: 'rotate(90deg)', display: 'inline-block' }}>⇩</span>
      </div>

      <div style={{ borderBottom: '2px solid black', padding: '10px' }}>
        <h2 style={{ margin: '10px 0' }}>STEP 3. Disclose Financial Information</h2>
        <p>At the same time as Step 1 or within 60 days of filing the <em>Petition</em>, the <strong>petitioner</strong> 
        must fill out and have these documents served on the <strong>respondent</strong>: <em>Declaration of Disclosure</em> 
        (form FL-140), <em>Income and Expense Declaration</em> (form FL-150), <em>Schedule of Assets and Debts</em> (form FL-142) 
        or <em>Property Declaration</em> (form FL-160), and all tax returns filed by the party in the two years before serving 
        the disclosure documents. These disclosure documents are not filed with the court.</p>
        <ul style={{ marginLeft: '20px' }}>
          <li>If the <strong>respondent</strong> files a <em>Response</em>, he or she must also complete and serve the same disclosure 
          documents on the <strong>petitioner</strong> within 60 days of filing the <em>Response</em>.</li>
          <li>The 60-day time frame for serving the disclosures may be changed by written agreement between the parties or by court order.</li>
          <li>The <strong>petitioner</strong> and <strong>respondent</strong> each file a <em>Declaration Regarding Service</em> (form FL-141) 
          with the court saying disclosures were served. If the <strong>respondent</strong> does not serve disclosures, the <strong>petitioner</strong> 
          can still finish the case without them. For more information, see “Fill Out and Serve Your Financial Declaration of Disclosure Forms” at 
          <a style={{color:'blue'}} href="http://courts.ca.gov/filing" target="_blank" rel="noopener noreferrer">courts.ca.gov/filing</a> 
          (click on Step 4).</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <span style={{ fontSize: '24px', transform: 'rotate(90deg)', display: 'inline-block' }}>⇩</span>
      </div>

      <div style={{ borderBottom: '2px solid black', padding: '10px' }}>
        <h2 style={{ margin: '10px 0' }}>STEP 4. Finish the Divorce or Legal Separation Case in One of Four Ways</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <p style={{ fontWeight: 'bold' }}>Respondent does not file a <em>Response</em> (called “default”)</p>
            <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
              <h4 style={{ margin: '10px 0' }}>No Response and NO written agreement:</h4>
              <p>Petitioner waits 30 days after Step 2 is complete and prepares a proposed <em>Judgment</em> 
              (form FL-180), together with all other needed forms. See “True Default Case” at 
              <a style={{color:'blue'}} href="http://courts.ca.gov/truedefault" target="_blank" rel="noopener noreferrer">courts.ca.gov/truedefault</a>.</p>
            </div>
            <div style={{ border: '1px solid black', padding: '10px' }}>
              <h4 style={{ margin: '10px 0' }}>No Response BUT written agreement:</h4>
              <p>Petitioner attaches the signed and notarized agreement to the proposed 
                <em>Judgment</em> (form FL-180), together with all other needed forms. See “Default Case with Written 
                Agreement” at <a style={{color:'blue'}} href="http://courts.ca.gov/defaultagree" target="_blank" rel="noopener noreferrer">courts.ca.gov/defaultagree</a>.</p>
            </div>
          </div>
          <div style={{ width: '45%' }}>
            <p style={{ fontWeight: 'bold' }}>Respondent files a <em>Response</em></p>
            <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
              <h4 style={{ margin: '10px 0' }}>Response AND written agreement:</h4>
              <p>Either party files <em>Appearance, Stipulations, and Waivers</em> (form FL-130) and the proposed <em>Judgment</em> 
              with written agreement attached and other needed forms. See “Uncontested Case” at 
              <a style={{color:'blue'}} href="http://courts.ca.gov/uncontested" target="_blank" rel="noopener noreferrer">courts.ca.gov/uncontested</a>.</p>
            </div>
            <div style={{ border: '1px solid black', padding: '10px' }}>
              <h4 style={{ margin: '10px 0' }}>Response and NO agreement:</h4>
              <p>Parties must go to trial to have a judge resolve the issues. See “Contested Case” at 
                <a style={{color:'blue'}} href="http://courts.ca.gov/contested" target="_blank" rel="noopener noreferrer">courts.ca.gov/contested</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <b><h2 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>IMPORTANT NOTICES</h2></b>
      <ul>
        <li>
          The earliest you can be divorced is six months and one day from one of
          these three dates (whichever occurs first): (1) the date Respondent
          was served with the <em>Summons</em> (form FL-110) and <em>Petition</em> (form FL-100), (2) the date the <em>Response</em> (form FL-120) was filed, or (3) the date <em>Appearance, Stipulations, and Waivers</em> (form FL-130) was filed. Legal separation has no waiting period. You are NOT divorced or legally separated until the court enters a <em>Judgment</em> in your case.
        </li>
        <li>
          If you need court orders for child support, custody, parenting time
          (visitation), spousal or partner support, restraining orders, or other
          issues, file a <em>Request for Order</em> (form FL-300) asking for temporary orders. See "Request for Order Information" at <a style={{color:'blue'}} href="http://courts.ca.gov/divorcerequests">courts.ca.gov/divorcerequests</a> for more information.
        </li>
        <li>
          Annulments: See <a style={{color:'blue'}} href="http://courts.ca.gov/annulment">courts.ca.gov/annulment</a> for information about annulments.
        </li>
        <li>
          You must keep the court and the other party informed of any change in
          your mailing address or other contact information. File and serve a
          <em>Notice of Change of Address or Other Contact Information</em> (form MC-040) on the other party or his or her attorney to let them know about the change in your contact information.
        </li>
      </ul>
    </div>
    </div><br /><br />
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-107-INFO [Rev. January 1, 2015]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        Legal steps for a Divorce Legal Separation
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Optional Form Cal. Rules of Court, rule 5.83</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div><br />
                <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ fontWeight: 'bold', backgroundColor: 'black', color: 'white', padding: '5px 10px' }}>
                        FL-107-INFO
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '10px' }}>
                        Legal Steps for a Divorce or Legal Separation
                    </div>
                </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <p style={{ fontWeight: 'bold' }}>Do you have a registered domestic partnership?</p>
                <p>
                    The process for a divorce or legal separation of a domestic partnership is the same as on page 1.
                    For information about ending your domestic partnership in the superior court, see
                    <a href="http://courts.ca.gov/filing" style={{ color: 'blue' }}> courts.ca.gov/filing</a>.
                    To find out if you are eligible to end your domestic partnership through the Secretary of State, see
                    <a href="http://courts.ca.gov/summdissodp" style={{ color: 'blue' }}> courts.ca.gov/summdissodp</a>.
                    Note: There may be differences in federal taxes and other issues for domestic partnerships. Seek
                    advice from an attorney experienced in domestic partner law.
                </p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <p style={{ fontWeight: 'bold' }}>What if you want a legal separation?</p>
                <p>
                    The process on page 1 is the same, except you will
                    <span style={{ fontWeight: 'bold' }}> NOT </span>
                    get a 
                    <span style={{ fontStyle: 'italic' }}> Judgment </span>
                    for legal separation unless both parties agree to a legal separation
                    <span style={{ fontWeight: 'bold' }}> OR </span>
                    if 
                    <span style={{ fontWeight: 'bold' }}> respondent </span>
                    has not filed a 
                    <span style={{ fontStyle: 'italic' }}> Response </span>.
                    If both parties agree to be legally separated but do not agree on other issues, the parties must go to trial to have a judge resolve those issues.
                    You are 
                    <span style={{ fontWeight: 'bold' }}> NOT </span>
                    legally separated until you receive a 
                    <span style={{ fontStyle: 'italic' }}> Judgment </span>
                    signed by the court. For more information, see
                    “Legal Separation” at
                    <a href="http://courts.ca.gov/legalseparation" style={{ color: 'blue' }}> courts.ca.gov/legalseparation</a>.
                    AFTER the court enters a judgment for legal separation, if you decide you want a divorce, you must start a new case to request a divorce and pay another filing fee.
                </p>
            </div>
        </div>
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px' }}></div>
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
            <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>
                Getting help to resolve divorce or legal separation cases
            </div>
            <p style={{ textAlign: 'center', marginBottom: '30px' }}>
                You may prefer to resolve some or all of the issues in your divorce or legal separation case without having the court decide for you.
                You and your spouse or domestic partner can put your agreement in writing and file it in your case. But your agreement must follow all legal requirements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Court Services</h3>
                    <ul>
                        <li>
                            <strong>Family Law Facilitators and Self-Help Centers</strong> help with court forms and instructions. They can provide samples of agreements and other information and, in some cases, help with mediation.
                        </li>
                        <li>
                            <strong>Family Court Services.</strong> If you and the other parent already have a family law case and have filed a <i>Request for Order</i> (form FL-300) seeking orders about child custody and visitation (parenting time), the court will refer you to Family Court Services. They provide child custody mediation or child custody recommending counseling to try to help you both make a parenting plan that is in the best interest of your child. Note: They cannot help with financial issues.
                        </li>
                        <li>
                            <strong>Settlement Conferences.</strong> An informal process in which a judge or an experienced lawyer meets with the parties and their lawyers to discuss the case and their positions and suggests a resolution. The parties can either agree to the suggestions or use the suggestions to help in further settlement discussions.
                        </li>
                    </ul>
                    <h3 style={{ fontWeight: 'bold' }}>Private services (which you can hire to help you resolve your case):</h3>
                    <ul>
                        <li>
                            <strong>Lawyers.</strong> Also called attorneys, lawyers can help work out agreements between the parties and represent you at court hearings and trials.
                        </li>
                        <li>
                            <strong>Collaborative Lawyers.</strong> Lawyers who represent each party but do not go to court. They try to reach an agreement. If court is necessary, the parties must hire new lawyers.
                        </li>
                        <li>
                            <strong>Mediators.</strong> A lawyer or counselor who helps the parties communicate to explore options and reach a mutually acceptable resolution.
                        </li>
                    </ul>
                </div>
                <div style={{ width: '48%' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Where can I get help?</h3>
                    <p>
                        This information sheet gives you only basic information on the divorce or legal separation and is not legal advice. If you want legal advice, ask a lawyer for help. You may also:
                    </p>
                    <ul>
                        <li>
                            Contact the family law facilitator or self-help center in your court for information, court forms, and referrals to local legal resources. For more information, see <a href="http://courts.ca.gov/courtresources" style={{ color: 'blue' }}>courts.ca.gov/courtresources</a>.
                        </li>
                        <li>
                            Find a lawyer through a certified lawyer referral service on the State Bar of California's website: <a href="http://calbar.ca.gov/LRS" style={{ color: 'blue' }}>calbar.ca.gov/LRS</a> or by calling 866-442-2529 (toll-free).
                        </li>
                        <li>
                            Hire a private mediator. For more information about court and private services, see <a href="http://courts.ca.gov/selfhelp-adr.htm" style={{ color: 'blue' }}>courts.ca.gov/selfhelp-adr.htm</a>.
                        </li>
                        <li>
                            Find information on the California Courts Online Self-Help Center website: <a href="http://courts.ca.gov/selfhelp" style={{ color: 'blue' }}>courts.ca.gov/selfhelp</a>.
                        </li>
                        <li>
                            Find free and low-cost legal help (if you qualify) at <a href="http://lawhelpcalifornia.org" style={{ color: 'blue' }}>lawhelpcalifornia.org</a>.
                        </li>
                        <li>
                            Find information at your local law library or public library.
                        </li>
                    </ul>
                    <h3 style={{ fontWeight: 'bold' }}>What if there is domestic violence?</h3>
                    <p>
                        If there is domestic violence or a protective or restraining order, talk to a lawyer, counselor, or mediator before making agreements.
                    </p>
                    <p>
                        For domestic violence help, call the National Domestic Violence Hotline: 800-799-7233; TDD: 800-787-3224; or 211 (if available in your area).
                    </p>
                </div>
            </div>
        </div>
<br />
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-107-INFO [Rev. January 1, 2015]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        Legal steps for a Divorce Legal Separation
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Optional Form Cal. Rules of Court, rule 5.83</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div><br />
                </div>
                    
                

        
    )
};
