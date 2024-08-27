import { useSearchParams } from "react-router-dom";
import { MainLayout } from "../../Layouts/MainLayout";
import { useBooksQuery } from "../../hooks/useBooksQuery";

export function Books () {
    const params = useSearchParams()
    const [searchParams] = params
    const q = searchParams.get('q') as string

    const {data, isLoading} = useBooksQuery({
        search: q,
        maxResults:20
    })

    return (
        <MainLayout>
            <h1>Resultado da busca</h1>

            {data && !isLoading && (
                data.items.map(item=> (
                    <span key={item.id}>{item.volumeInfo.title}</span>
                ))
            )}
        </MainLayout>
    )
}