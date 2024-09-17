import { Button } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../components/input/FormInput'
import { AppContext } from '../context/Context'
import forgetPass from '../functions/user/forgetPass'
import { Link } from 'react-router-dom'

export default function ForgetPass() {

    const [email, setEmail] = React.useState<string>("")
    const { setLoading, raiseToast } = React.useContext(AppContext);

    function handlePassChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    async function sendEmail() {
        try {
            setLoading(true)
            const data = await forgetPass(email)
            if (data.status === 200) {
                raiseToast(data.message, "success")
            } else {
                raiseToast(data.message, "error")
            }
        } catch (error) {
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
                        <h1 className="text-3xl font-bold text-slate-600">Forget Password</h1>
                        <p className="mt-2">You can get the link to reset password here</p>
                    </div>

                    <form>
                        <FormInput
                            label="Email"
                            name="email"
                            isRequired={true}
                            type="email"
                            placeholder='Enter your email'
                            handleChange={handlePassChange}
                        />
                        <Link
                            to="/sign-in"
                            className="text-blue-500 text-md cursor-pointer block w-fit mr-0 my-1 ml-auto"
                        >
                            Sign In
                        </Link>

                        <Button
                            onClick={sendEmail}
                            className="w-full !bg-[#002F53] mt-3 !text-white py-2 rounded-md hover:!bg-[#14212b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Send Verification Email
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
