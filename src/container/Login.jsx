import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { apiClient } from "@/lib/api-client";
// import { useAppStore } from "@/store";
// import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// // import { LoginForm } from "@/components/login-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

const Login = () => {
  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmpassword) {
      toast.error("Password and confirm password should be same.");
      return false;
    }
    return true;
  };
  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return true;
    }
    return true;
  };

  // const handleLogin = async () => {
  //   if (validateLogin()) {
  //     const res = await apiClient.post(
  //       LOGIN_ROUTE,
  //       { email, password },
  //       { withCredentials: true }
  //     );
  //     if (res.data.user.id) {
  //       setUserInfo(res.data.user);
  //       if (res.data.user.profileSetup) navigate("/chat");
  //       else navigate("/profile");
  //     }
  //   }
  // };
  // const handleSignup = async () => {
  //   if (validateSignup()) {
  //     const res = await apiClient.post(
  //       SIGNUP_ROUTE,
  //       { email, password },
  //       { withCredentials: true }
  //     );
  //     if (res.status === 201 && res.data.user.id) {
  //       setUserInfo(res.data.user);

  //       navigate("/profile");
  //     }
  //   }
  // };
  return (
    <div></div>
    {/* <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center  bg-gradient-to-r from-gray-900 to-gray-950 gap-10 px-4 md:px-0">
      <div className="h-[50vh] bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl w-full md:w-full max-w-md lg:w-[25vw]">
        <div className="flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950 h-full w-full rounded-md bg-blend-overlay">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center w-full">
              <Tabs className="w-full sm:w-3/4 " defaultValue="login">
                <TabsList className="bg-transparent rounded-none w-full ">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-transparent text-gray-300 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-transparent text-gray-300 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Signup
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex flex-col gap-5 mt-10"
                  value="login"
                >
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 bg-gray-800 text-white border-gray-700"
                    //value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 bg-gray-800 text-white border-gray-700"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className="rounded-full p-6 bg-purple-600 hover:bg-purple-700 text-white"
                    // onClick={handleLogin}
                  >
                    Login
                  </Button>
                </TabsContent>
                <TabsContent className="flex flex-col gap-5" value="signup">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 bg-gray-800 text-white border-gray-700"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 bg-gray-800 text-white border-gray-700"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6 bg-gray-800 text-white border-gray-700"
                    // value={confirmpassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button
                    className="rounded-full p-6 bg-purple-600 hover:bg-purple-700 text-white"
                    // onClick={handleSignup}
                  >
                    Signup
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">Or</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="rounded-full p-6 flex gap-2 items-center justify-center bg-gray-800 hover:bg-gray-700 border-gray-600 text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>/*}}
    //     <div className="m-auto p-10">
    //       <Tabs defaultValue="login" className="w-[400px]">
    //         <TabsList className="grid w-full grid-cols-2">
    //         <TabsTrigger
    //                     value="login"
    //                     className="data-[state=active]:bg-transparent text-gray-300 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
    //                   >
    //                     Login
    //                   </TabsTrigger>
    //                   <TabsTrigger
    //                     value="register"
    //                     className="data-[state=active]:bg-transparent text-gray-300 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
    //                   >
    //                     Register
    //                   </TabsTrigger>
    //           {/* <TabsTrigger value="register">Register</TabsTrigger>
    //           <TabsTrigger value="login">Login</TabsTrigger> */}
    //         </TabsList>
    //         <TabsContent value="login">
    //           <Card>
    //             <CardHeader>
    //               <CardTitle>Login</CardTitle>
    //               <CardDescription>
    //                 Login into your account
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent className="space-y-2">
    //               <div className="space-y-1">
    //                 <Label htmlFor="email">E-Mail ID</Label>
    //                 <Input id="email" type="email" />
    //               </div>
    //               <div className="space-y-1">
    //                 <Label htmlFor="password">Password</Label>
    //                 <Input id="password" type="password" />
    //               </div>
    //             </CardContent>
    //             <CardFooter>
    //               <Button>Login</Button>
    //             </CardFooter>
    //           </Card>
    //         </TabsContent>
    //         <TabsContent value="register">
    //           <Card>
    //             <CardHeader>
    //               <CardTitle>Register</CardTitle>
    //               <CardDescription>
    //                 Register Yourself
    //               </CardDescription>
    //             </CardHeader>
    //             <CardContent className="space-y-2">
    //               <div className="space-y-1">
    //                 <Label htmlFor="firstname">First Name</Label>
    //                 <Input id="firstname" type="text" />
    //               </div>
    //               <div className="space-y-1">
    //                 <Label htmlFor="lastname">Last Name</Label>
    //                 <Input id="lastname" type="text" />
    //               </div>
    //               <div className="space-y-1">
    //                 <Label htmlFor="emailid">E-Mail ID</Label>
    //                 <Input id="emailid" type="email" />
    //               </div>
    //               <div className="space-y-1">
    //                 <Label htmlFor="contact">Contact Number</Label>
    //                 <Input id="contact" type="text" />
    //               </div>
    //               <div className="space-y-1">
    //                 <Label htmlFor="password">Password</Label>
    //                 <Input id="password" type="password" />
    //               </div>
    //             </CardContent>
    //             <CardFooter>
    //               <Button>Register</Button>
    //             </CardFooter>
    //           </Card>
    //         </TabsContent>
    //       </Tabs>
    //     </div>

    //   );
    //   // <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    //   //   <div className="w-full max-w-sm">
    //   //     <LoginForm />
    //   //   </div>
    //   // </div>
  );
};
export default Login;
