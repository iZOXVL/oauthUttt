"use client";


import { Button } from "@nextui-org/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


const SocialButtons = () => {

    const Login = (provider: "google" | "github") => {
        signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    }


    return (
        <div className="items-center">
            <Button onClick={() => Login("github")} color="default" size="lg" variant="bordered" startContent={<FaGithub />}>
                Github
            </Button >

            <br />
            <br />

            <Button onClick={() => Login("google")} color="default" size="lg" variant="bordered" startContent={<FaGoogle />}>
                Google
            </Button>
        </div >
    );
}

export default SocialButtons;