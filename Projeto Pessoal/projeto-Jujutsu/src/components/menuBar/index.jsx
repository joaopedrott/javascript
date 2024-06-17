import { Link } from 'react-scroll';
import S from './styles.module.css';

export function MenuBar() {
    return (
        <div className={S.header}>
            <ul className={S.menu}>
                <li><Link to="home" smooth={true}duration={500}>Home</Link></li>
                <li><Link to="intro" smooth={true} offset={-100} duration={500}>Historia</Link></li>
                <li><Link to="character" smooth={true} offset={-50} duration={500}>Personagens</Link></li>
                <li><Link to="game" smooth={true} offset={-50} duration={500}>Jogos</Link></li>
            </ul>
        </div>
    );
}
