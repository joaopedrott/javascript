import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log({session});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Button>Fui feito com shadcn</Button>
    </main>
  );
}
