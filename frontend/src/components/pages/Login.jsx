import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { BACKEND_URI } from "@/utils/constant";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const [isToggled, setIsToggled] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setInputType("password");
    setIsToggled("false");
    e.preventDefault(); // prevent the default behaviour of the form

    setLoading(true); // Set loading to true when submission starts

    const data = {
      email: input.email,
      password: input.password
    };

    axios
      .post(`${BACKEND_URI}/api/v1/user/login`, data, {
        withCredentials: true
      })
      .then((response) => {
        // Handle success
        toast({
          variant: "success",
          description: response.data.message
        });
        const user = response.data.user;

        // Store user info in local storage
        localStorage.setItem("userInfo", JSON.stringify(user));

        // Redirect to home
        navigate("/home");
      })
      .catch((error) => {
        console.log("Axios Error: ", error);
        if (error.response) {
          toast({
            variant: "destructive",
            description: error.response.data.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false when request is finished
      });
  };

  // Password Hide/Show handler
  const handleTypeChange = () => {
    setIsToggled(!isToggled);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput, // Spread the previous input state
      [name]: value // Update only the changed field
    }));
  };

  return (
    <div className="flex justify-center align-middle items-center h-[100vh]">
      <Card>
        <CardHeader className="items-center font-semibold text-2xl">
          Log In
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
            value={input.email}
            onChange={handleInputChange}
            autoComplete="email" // Autocomplete attribute for email
          />
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={inputType}
              id="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <span className="hover:cursor-pointer" onClick={handleTypeChange}>
              {isToggled ? (
                <EyeIcon className="absolute top-2 end-2" />
              ) : (
                <EyeOffIcon className="absolute top-2 end-2" />
              )}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging in..." : "Submit"} {/* Change button text */}
          </Button>

          <div>
            <p>
              If not registered?{" "}
              <Link
                className="text-blue-600 border-b border-blue-600"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
