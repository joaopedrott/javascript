import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Produto() {

    const route = useRouter()

/*     const { data: session } = useSession();

    if(!session.user){
      route.back('/')
    } */

    const { id } = route.query
    return (
      <div>
        <h1>Produto {id}</h1>
      </div>
    );
  }
  