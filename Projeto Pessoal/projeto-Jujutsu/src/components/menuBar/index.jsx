import S from './styles.module.css'

export function MenuBar () {

    return(
        <div className={S.header}>
            <ul className={S.menu}>
            <li>Logo</li>
            <li>Home</li>
            <li>Sobre</li>
            </ul>
        </div>
        
      
    )
}