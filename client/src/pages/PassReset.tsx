import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormInput from '../components/input/FormInput'
import { Button } from '@chakra-ui/react'
import { AppContext } from '../context/Context'
import InputPassword from '../components/input/InputPassword'
import validateOTP from '../functions/user/validateOTP'
import resetPass from '../functions/user/resetPass'

export default function PassReset() {

    const { email, uid } = useParams<{ email: string, uid: string }>()
    const navigate = useNavigate()
    const { raiseToast, setLoading } = React.useContext(AppContext);

    const [otp, setOtp] = React.useState<number>(0)
    const [newPass, setNewPass] = React.useState<string>("")
    const [confirmPass, setConfirmPass] = React.useState<string>("")
    const [otpValid, setOtpValid] = React.useState<boolean>(false)

    function handleOtp(e: React.ChangeEvent<HTMLInputElement>) {
        setOtp(parseInt(e.target.value))
    }

    function handleNewPass(e: React.ChangeEvent<HTMLInputElement>) {
        setNewPass(e.target.value)
    }

    function handleConfirmPass(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPass(e.target.value)
    }

    async function validate() {
        try {
            setLoading(true)
            const data = await validateOTP(email || "", otp)
            if (data.status === 200) {
                setOtpValid(true)
            } else {
                raiseToast(data.message, "error")
            }
        } catch (error) {
        }
        finally {
            setLoading(false)
        }
    }

    async function resetPassword() {

        if (newPass !== confirmPass) {
            raiseToast("Passwords do not match", "error")
            return;
        }

        try {
            setLoading(true)
            const data = await resetPass(email || "", uid || "", newPass)

            if (data.status === 200) {
                raiseToast(data.message, "success")
                navigate("/sign-in")
            }
            else {
                raiseToast(data.message, "error")
            }
        }
        catch (error) {
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <>
            <div className="flex justify-center items-center min-h-screen font-inter">
                <div className="absolute top-8 w-full">
                    <div className="flex justify-center items-center mb-5">
                        <span className="text-xl font-bold text-green-900">Adinsight</span>
                    </div>
                    <hr className="border-t border-gray-200 mt-2" />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-600">Reset Password</h1>
                    </div>

                    <form>
                        <FormInput
                            label="Email"
                            name="email"
                            isRequired={true}
                            defaultValue={email}
                            isDisabled={true}
                        />
                        {
                            otpValid ?
                                <>
                                    <InputPassword
                                        label="New Password"
                                        handleChange={handleNewPass}
                                        name="newPass"
                                        isRequired={true}
                                        placeholder="Enter new password"
                                        type='password'
                                    />

                                    <InputPassword
                                        label="Confirm Password"
                                        handleChange={handleConfirmPass}
                                        name="confirmPass"
                                        isRequired={true}
                                        placeholder="Confirm password"
                                        type='password'
                                    />
                                    <Button
                                        onClick={resetPassword}
                                        className="w-full mt-4 !bg-[#004d3d] !text-white"
                                    >
                                        Reset Password
                                    </Button>
                                </>
                                :
                                <>
                                    <FormInput
                                        label="OTP"
                                        handleChange={handleOtp}
                                        name="otp"
                                        isRequired={true}
                                        placeholder="Enter OTP"
                                        type='number'
                                    />
                                    <Button
                                        onClick={validate}
                                        className="w-full mt-4 !bg-[#004d3d] !text-white"
                                    >
                                        Validate OTP
                                    </Button>
                                </>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
