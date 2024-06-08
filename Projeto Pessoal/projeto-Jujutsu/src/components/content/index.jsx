import S from './styles.module.css'

export function Content () {

    return (
        <>
            <div className={S.header}>
            
                <div className={S.banner}>
                    <img  src="https://pbs.twimg.com/media/Ei7nh5_X0AAvuav?format=jpg&name=large" alt="" />
                </div>
                    


                <div className={S.logoConteudo}> 
                    <img src="https://image.tmdb.org/t/p/original/tEmqJ1k4MdjuaKaetn8wGyZGcyC.png" alt="" />
                </div>
            </div>


            <div className={S.content}>
                
                <div className={S.text}>
                    <h1>A historia</h1>
                    <p>"Jujutsu Kaisen" é uma jornada épica que começa com **Yuji Itadori**, um estudante colegial comum que tem sua vida transformada após um encontro fatídico com o sobrenatural. Quando Yuji acidentalmente liberta uma terrível maldição contida em um artefato amaldiçoado, ele se vê imerso em um mundo de trevas e perigo. Determinado a proteger aqueles que ama, Yuji acaba ingerindo um artefato amaldiçoado que era parte do corpo de **Sukuna**, a mais forte maldição que já existiu, o que acaba lhe transformando num usuário de **jujutsu**, uma forma de combate espiritual que usa energia amaldiçoada para enfrentar maldições e entidades malignas. Com a orientação do enigmático professor **Satoru Gojo**, Yuji se junta a outros usuários de jujutsu, incluindo **Megumi Fushiguro** e **Nobara Kugisaki**, em uma missão para salvar a humanidade do caos iminente. Ao longo de sua jornada, Yuji e seus companheiros enfrentam desafios terríveis, encontram aliados improváveis e descobrem segredos obscuros sobre o mundo oculto ao seu redor. Enquanto lutam para proteger o mundo dos vivos, também devem enfrentar seus próprios demônios internos e dilemas morais complexos.</p>
                </div>
                <img src="https://jujutsukaisen.jp/images/chara_category1/chara_detail7.png" alt="" />
            </div>
            <div className={S.carrossel}>
                Aqui ficara o carrossel de imagens dos personagens
            </div>

            <div className={S.rodape}>
                Aqui ficara o rodape
            </div>

            
        </>
        
    )
}