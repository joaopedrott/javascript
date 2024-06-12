import S from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'



export function Content () {

    const data = [
        {id: '1', image: 'https://i.pinimg.com/736x/8d/ed/36/8ded36c1b713c1b600eceabcc001ad57.jpg', bio: 'Yuji Itadori é o protagonista do mangá e anime “Jujutsu Kaisen”. Ele é um estudante do ensino médio com habilidades físicas excepcionais. Após encontrar um objeto amaldiçoado, ele se envolve no mundo dos feiticeiros e luta contra maldições para proteger os outros. Yuji é corajoso, determinado e tem um grande senso de justiça.'},

        {id: '2', image: 'https://i.pinimg.com/564x/ac/82/3a/ac823a652522d108b4fef25b76b1954d.jpg', bio: 'Satoru Gojo é um dos principais personagens de Jujutsu Kaisen. Ele é um feiticeiro jujutsu de Grau Especial, conhecido por ser o mais poderoso dos tempos modernos. Carismático e habilidoso em combate, Gojo usa a técnica “Limitless” com maestria. Sua personalidade cativante e visual marcante o tornam um dos personagens mais populares da série.'},

        {id: '3', image: 'https://i.pinimg.com/564x/18/a7/16/18a7167e35ea0b4d34c4d525d7ee8524.jpg', bio: 'Yuta Okkotsu é um personagem central na trama de Jujutsu Kaisen. Sua história é marcada por crescimento pessoal, batalhas sobrenaturais e a busca por redenção e paz interior. Yuta era um menino tímido e solitário que sofreu muito bullying enquanto crescia. Devido ao espírito amaldiçoado de Rika, ele perdeu a confiança em si mesmo e se isolou das pessoas. No entanto, Yuta possui habilidades excepcionais como feiticeiro de grau especial. Seu poder vem da relação com Michizane Sugawara e da energia amaldiçoada ilimitada de Rika. Mesmo após o evento, Yuta retém uma quantidade imensa de energia amaldiçoada, rivalizando com o lendário Gojo Satoru. '},

        {id: '4', image: 'https://i.pinimg.com/564x/5f/ef/89/5fef89a3131b13249358b4fd2c4a68b0.jpg', bio: 'Maki Zenin é uma personagem importante em Jujutsu Kaisen. Ela nasceu no Clã Zenin, uma das Três Grandes Famílias de Feiticeiros, mas enfrentou discriminação por não possuir energia amaldiçoada. Determinada a superar sua família, Maki se tornou uma feiticeira e, após os eventos em Shibuya, sofreu queimaduras graves. Agora, com cicatrizes e cabelo curto, ela é uma das mais fortes do mangá.'},
    ]

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
                <div className={S.history}>
                <div className={S.text}>
                    
                    <p>"Jujutsu Kaisen" é uma jornada épica que começa com **Yuji Itadori**, um estudante colegial comum que tem sua vida transformada após um encontro fatídico com o sobrenatural. Quando Yuji acidentalmente liberta uma terrível maldição contida em um artefato amaldiçoado, ele se vê imerso em um mundo de trevas e perigo. Determinado a proteger aqueles que ama, Yuji acaba ingerindo um artefato amaldiçoado que era parte do corpo de **Sukuna**, a mais forte maldição que já existiu, o que acaba lhe transformando num usuário de **jujutsu**, uma forma de combate espiritual que usa energia amaldiçoada para enfrentar maldições e entidades malignas. Com a orientação do enigmático professor **Satoru Gojo**, Yuji se junta a outros usuários de jujutsu, incluindo **Megumi Fushiguro** e **Nobara Kugisaki**, em uma missão para salvar a humanidade do caos iminente. Ao longo de sua jornada, Yuji e seus companheiros enfrentam desafios terríveis, encontram aliados improváveis e descobrem segredos obscuros sobre o mundo oculto ao seu redor. Enquanto lutam para proteger o mundo dos vivos, também devem enfrentar seus próprios demônios internos e dilemas morais complexos.</p>
                </div>
                <img src="https://jujutsukaisen.jp/images/chara_category1/chara_detail7.png" alt="" />
                </div>
                
            </div>
            <div className={S.titulocarrossel}>
               <h1>Character</h1> 
                {/* <img src="https://uploaddeimagens.com.br/images/004/797/064/original/Personagens-11-06-2024.png?1718149320" alt="" /> */}
                
                <div className={S.carrossel}>
                
                {/* <h1>Character</h1> */}
                    {/* Aqui ficara o carrossel de imagens dos personagens */}
                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation
                        className={S.slide}
                    >
                        {data.map((item)=>(
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className={S.slideItem}
                                /> {/* imagem */}
                                <p className={S.bioSlide}>{item.bio}</p>{/* texto */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div>
                
            </div>
            
            <div className={S.games}>
                <img src="https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/new-asset/JJKCC-logo-white.png?twic=v1/resize=500/step=10/quality=80" alt="" />

                {/* <img src="https://uploaddeimagens.com.br/images/004/797/063/original/Jogos-11-06-2024.png?1718149190" alt="" />  */}
                <div className={S.jogo}>
                    Fotos e texto
                </div>
            </div>

            <div className={S.rodape}>
                Aqui ficara o rodape
            </div>

            
        </>
        
    )
}