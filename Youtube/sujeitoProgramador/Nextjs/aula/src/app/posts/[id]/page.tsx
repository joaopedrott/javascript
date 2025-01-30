import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./components/post";

export default async function DetailPost({params}: {params: Promise<{id: string}>}) {

    const { id } = await params;



    return (
        <div>
            <h1 className=" text-4x1 font-bold text-center">Detalhes do post: {id}</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
}