import S from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'/* slide */
import { Button } from '../button'/* botoes */
import playLogo from '../../assets/play.svg'
import xboxLogo from '../../assets/xbox.svg'
import nintendoLogo from '../../assets/nintendo.svg'
import steamLogo from '../../assets/steam.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe os estilos do AOS
import { useEffect } from 'react';

export function Content () {

    useEffect(() => {
        AOS.init(); // Inicialize o AOS
      }, []);

    const data = [
        {id: '1', image: 'https://i.pinimg.com/736x/8d/ed/36/8ded36c1b713c1b600eceabcc001ad57.jpg', bio: 'Yuji Itadori é o protagonista do mangá e anime “Jujutsu Kaisen”. Ele é um estudante do ensino médio com habilidades físicas excepcionais. Após encontrar um objeto amaldiçoado, ele se envolve no mundo dos feiticeiros e luta contra maldições para proteger os outros. Yuji é corajoso, determinado e tem um grande senso de justiça.'},

        {id: '2', image: 'https://i.pinimg.com/564x/ac/82/3a/ac823a652522d108b4fef25b76b1954d.jpg', bio: 'Satoru Gojo é um dos principais personagens de Jujutsu Kaisen. Ele é um feiticeiro jujutsu de Grau Especial, conhecido por ser o mais poderoso dos tempos modernos. Carismático e habilidoso em combate, Gojo usa a técnica “Limitless” com maestria. Sua personalidade cativante e visual marcante o tornam um dos personagens mais populares da série.'},

        {id: '3', image: 'https://i.pinimg.com/564x/18/a7/16/18a7167e35ea0b4d34c4d525d7ee8524.jpg', bio: 'Yuta Okkotsu é um personagem central na trama de Jujutsu Kaisen. Sua história é marcada por crescimento pessoal, batalhas sobrenaturais e a busca por redenção e paz interior. Yuta era um menino tímido e solitário que sofreu muito bullying enquanto crescia. Devido ao espírito amaldiçoado de Rika, ele perdeu a confiança em si mesmo e se isolou das pessoas. No entanto, Yuta possui habilidades excepcionais como feiticeiro de grau especial. Seu poder vem da relação com Michizane Sugawara e da energia amaldiçoada ilimitada de Rika. Mesmo após o evento, Yuta retém uma quantidade imensa de energia amaldiçoada, rivalizando com o lendário Gojo Satoru.'},

        {id: '4', image: 'https://i.pinimg.com/564x/5f/ef/89/5fef89a3131b13249358b4fd2c4a68b0.jpg', bio: 'Maki Zenin é uma personagem importante em Jujutsu Kaisen. Ela nasceu no Clã Zenin, uma das Três Grandes Famílias de Feiticeiros, mas enfrentou discriminação por não possuir energia amaldiçoada. Determinada a superar sua família, Maki se tornou uma feiticeira e, após os eventos em Shibuya, sofreu queimaduras graves. Agora, com cicatrizes e cabelo curto, ela é uma das mais fortes do mangá.'},
        {id: '5', image: 'https://i.pinimg.com/564x/62/1d/93/621d9395088e88b9e6d7de6d7e57278d.jpg', bio: 'Megumi Fushiguro é o deuteragonista da série Jujutsu Kaisen. Ele é um feiticeiro de jujutsu de nível 2 e estudante do primeiro ano na Tokyo Jujutsu High, junto com Yuji Itadori e Nobara Kugisaki. Megumi é filho de Toji Fushiguro e também um descendente do Clã Zenin. Satoru Gojo o encontrou e o matriculou na escola de feiticeiros. Ele é conhecido por sua aparência séria e habilidades como invocador de espíritos demoníacos para auxiliá-lo em batalhas.'},
        {id: '6', image: 'https://i.pinimg.com/564x/fd/92/f1/fd92f1a435c90b307bb442d4c77d9b0e.jpg', bio: 'Nobara Kugisaki é a tritagonista da série Jujutsu Kaisen. Ela é uma estudante do primeiro ano e uma feiticeira de nível 3 na Tokyo Jujutsu High, estudando sob a orientação de Satoru Gojo, ao lado de Yuji e Megumi. Nobara é confiante, determinada e orgulha-se de ser tanto uma garota bonita quanto uma lutadora forte. Embora inicialmente pareça arrogante, ela é, na verdade, cuidadosa e leal aos seus aliados. Sua aparência inclui cabelos castanhos e olhos alaranjados, e ela veste o uniforme da escola de feiticeiros com um cinto marrom que carrega suas ferramentas de jujutsu. Nobara é uma personagem cativante e essencial para a trama da série.'},
        {id: '7', image: 'https://i.pinimg.com/564x/54/b2/53/54b2534036f6d4b488411bb974133abc.jpg', bio: 'Sukuna, também conhecido como Ryomen Sukuna, é o feiticeiro jujutsu mais forte de mais de mil anos atrás. Ele é considerado o Rei Incontestável das Maldições e um dos principais antagonistas da série Jujutsu Kaisen. Sukuna era originalmente um humano, mas se tornou um demônio imaginário durante a Era Heian. Após sua morte, ele dividiu seu poder em vinte dedos indestrutíveis, que foram espalhados como objetos amaldiçoados. Quando Yuji Itadori consumiu um desses dedos, Sukuna foi reencarnado em seu corpo. Sua aparência monstruosa inclui quatro braços, quatro olhos e uma boca em seu estômago. Ele é sadista e só se preocupa consigo mesmo, causando dor e sofrimento aos outros.'},
    ]

    return (
        <>
            <div className={S.header}>
            
                <div className={S.banner}>
                    <img  src="https://pbs.twimg.com/media/Ei7nh5_X0AAvuav?format=jpg&name=large" alt="" />
                </div>
                <div data-aos="fade-down" className={S.logoConteudo} > 
                    <img src="https://image.tmdb.org/t/p/original/tEmqJ1k4MdjuaKaetn8wGyZGcyC.png" alt="" />
                </div>
            </div>


            <div className={S.content}>
                <div className={S.history}>
                <div  className={S.text}>
                    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
                    <p>"Jujutsu Kaisen" é uma jornada épica que começa com **Yuji Itadori**, um estudante colegial comum que tem sua vida transformada após um encontro fatídico com o sobrenatural. Quando Yuji acidentalmente liberta uma terrível maldição contida em um artefato amaldiçoado, ele se vê imerso em um mundo de trevas e perigo. Determinado a proteger aqueles que ama, Yuji acaba ingerindo um artefato amaldiçoado que era parte do corpo de **Sukuna**, a mais forte maldição que já existiu, o que acaba lhe transformando num usuário de **jujutsu**, uma forma de combate espiritual que usa energia amaldiçoada para enfrentar maldições e entidades malignas. Com a orientação do enigmático professor **Satoru Gojo**, Yuji se junta a outros usuários de jujutsu, incluindo **Megumi Fushiguro** e **Nobara Kugisaki**, em uma missão para salvar a humanidade do caos iminente. Ao longo de sua jornada, Yuji e seus companheiros enfrentam desafios terríveis, encontram aliados improváveis e descobrem segredos obscuros sobre o mundo oculto ao seu redor. Enquanto lutam para proteger o mundo dos vivos, também devem enfrentar seus próprios demônios internos e dilemas morais complexos.</p>
                    </div>
                    
                </div>
                <img data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" src="https://jujutsukaisen.jp/images/chara_category1/chara_detail7.png" alt="" />
                </div>
                
            </div>
            <div className={S.titulocarrossel} >
               <h1 >Character</h1> 
                {/* <img src="https://uploaddeimagens.com.br/images/004/797/064/original/Personagens-11-06-2024.png?1718149320" alt="" /> */}
                
                <div data-aos="flip-left" data-aos-offset="400" className={S.carrossel}>
                
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
                        <div className={S.opcoes}>
                        
                            <p>Jujutsu Kaisen: Cursed Clash é um jogo de ação em 3D baseado no anime Jujutsu Kaisen. Nele, os jogadores formam equipes de feiticeiros e maldições, usando técnicas amaldiçoadas para lutar contra inimigos em combates 2x2. O jogo inclui sistemas de energia amaldiçoada, movimentos finais, ataques conjuntos e modos online. Foi lançado em 2 de fevereiro de 2024 para várias plataformas</p>
                            
                            
                            <h1>Plataformas</h1>
                            <Button src={steamLogo} name={"Steam"} link={"https://store.steampowered.com/app/1877020/Jujutsu_Kaisen_Cursed_Clash/"}/>
                            <Button src={playLogo}  name={"Playstation"} link={"https://www.playstation.com/pt-br/games/jujutsu-kaisen-cursed-clash/"}/>
                            <Button src={nintendoLogo}  name={"Nintendo"} link={"https://www.nintendo.com/pt-br/store/products/jujutsu-kaisen-cursed-clash-switch/"}/>
                            <Button  src={xboxLogo} name={"Xbox Series"} link={"https://www.xbox.com/pt-BR/games/store/jujutsu-kaisen-cursed-clash/9N1T03Q2J6NH/0010"}/>

                        </div>
                    <img src="https://media.graphassets.com/a2dNrEouRpOOPqsVQs8m" alt="Capa do Jogo" />
                </div>
            </div>

            <div className={S.rodape}>
                <h1>Projeto Desenvolvido Por Joao Pedro Guedes Torres</h1>
                <p>© Gege Akutami/Shueisha, JUJUTSU KAISEN Project</p>
                <p>© Gege Akutami/Shueisha</p>
                <p>©Bandai Namco Entertainment Inc.</p>
            </div>

            
        </>
        
    )
}