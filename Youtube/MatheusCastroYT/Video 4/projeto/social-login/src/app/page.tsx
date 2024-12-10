import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <CardHeader>
          <CardTitle>Login Social</CardTitle>
          <CardDescription>Faca seu login com sua conta Google</CardDescription>

          <CardContent>
            <form>
              <Button>Login com Google</Button>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
