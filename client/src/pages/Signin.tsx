import React from "react";
import { AppContext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "../components/input/InputPassword";
import UserErrorInterface from "../interface/Error";
import FormInput from "../components/input/FormInput";
import { Button } from "@chakra-ui/react";
import login from "../functions/user/login";

export default function Signin() {

  const { setData: setLoggedInUser, raiseToast, setLoading } = React.useContext(AppContext);
  const navigate = useNavigate();

  const [error, setError] = React.useState<UserErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };


  async function handleSignIn() {
    try {
      setLoading(true)
      const response: any = await login(user.email, user.password);
      if (response.status === 200) {
        if (response.data.Enabled === 0) {
          raiseToast(
            "Error",
            "error",
            "Your account has been disabled. Please contact the administrator."
          );
          return setLoading(false);
        }
        setLoggedInUser(response.data);
        raiseToast("Login successful!", "success");
        navigate("/mi/default");
      } else {
        raiseToast("Error", "error", response.message);
      }
    } catch (error: any) {
      console.log(error);
      raiseToast(
        "Error",
        "error",
        error.response?.message || "Server error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-inter">
      <div className="absolute top-8 w-full">
        <div className="flex justify-center items-center mb-5">
          <span className="text-xl font-bold text-green-900">By The Law</span>
        </div>
        <hr className="border-t border-gray-200 mt-2" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-600">Login</h1>
          <p className="mt-2">Hi, Welcome back 👋</p>
        </div>

        <form>
          <FormInput
            label="Email"
            handleChange={handleChange}
            name="email"
            isRequired={true}
            isInvalid={error.input === "email"}
            error={error.message}
            placeholder="Enter email"
            focus="password"
          />

          <InputPassword
            label="Password"
            handleChange={handleChange}
            name="password"
            isRequired={true}
            isInvalid={error.input === "password"}
            error={error.message}
            placeholder="Enter password"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSignIn();
            }}
          />
          <Link
            to="/password/forget"
            className="text-blue-500 text-md cursor-pointer block w-fit mr-0 my-1 ml-auto"
          >
            Forgot password?
          </Link>
          <Button
            onClick={handleSignIn}
            className="w-full !bg-[#002F53] !text-white py-2 rounded-md hover:!bg-[#14212b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}