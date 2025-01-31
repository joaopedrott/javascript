
export const revalidate= 60;

export default function Home() {


  const randomNumber = Math.random() * 10;


  return (
    <div>
      <h1>Pagina HOME</h1>
      <h2>Numero gerado: {randomNumber}</h2>
    </div>
  )
}