import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth, signInWithGoogle } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth()
  
  if(session) {
    return redirect("/dashboard")
  }
  async function signInActionn() {
    "use server";
    await signInWithGoogle();

  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login Social</CardTitle>
          <CardDescription>Faca seu login com sua conta Google</CardDescription>

          <CardContent className="space-y-4">
            <form action={signInActionn}>
              <Button className="w-full">Login com Google</Button>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
