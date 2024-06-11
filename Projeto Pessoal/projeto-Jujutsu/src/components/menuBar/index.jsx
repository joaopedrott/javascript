import S from './styles.module.css'

export function MenuBar () {

    return(
        <div className={S.header}>
            <ul className={S.menu}>
            <li>Home</li>
            <li>Historia</li>
            <li>Personagens</li>
            <li>Jogos</li>
            </ul>
        </div>
        
      
    )
}