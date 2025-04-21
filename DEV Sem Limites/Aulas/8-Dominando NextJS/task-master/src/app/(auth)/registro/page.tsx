import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { SignupCard } from "@/modules/auth/components/signup-card";



export default async function RegisterPage () {
      const session = await auth();

      if(session) {
        redirect("/");
      }
    


    return (
        <SignupCard />
    )
}