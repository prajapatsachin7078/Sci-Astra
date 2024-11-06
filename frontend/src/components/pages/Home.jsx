import React from "react";
import { Navbar } from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 space-y-10 md:space-y-0 bg-gray-100 min-h-screen">
        {/* Left Side Text */}
        <div className="flex flex-col space-y-4 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            <span className="animate-pulse text-red-500">Sci</span>-<span className="text-blue-500">Astra</span> -
            Building the Scientists of Tomorrow
          </h1>
          <p className="text-lg text-gray-600">
            Empowering young minds with knowledge and skills for a brighter
            scientific future. Join our community of innovators and explorers.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 mt-4 w-max">
            Learn More
          </Button>
        </div>

        {/* Right Side Call Back Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Request a Callback
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your details, and we’ll reach out to you soon.
          </p>
          <form className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium"
              >
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="yourname@example.com"
                className="w-full mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="block text-gray-600 text-sm font-medium"
              >
                Phone
              </Label>
              <Input
                type="tel"
                id="phone"
                placeholder="+123 456 7890"
                className="w-full mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white mt-4"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
