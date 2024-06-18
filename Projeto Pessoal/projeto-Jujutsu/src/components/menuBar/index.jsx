import { Link } from 'react-scroll';
import S from './styles.module.css';
import { useState } from 'react';

export function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={S.header}>
            <div className={S.toggleBtn} onClick={() => setIsOpen(!isOpen)}>☰</div>
            <div className={`${S.sideMenu} ${isOpen ? S.open : ''}`}>
                <button className={S.closeBtn} onClick={() => setIsOpen(false)}>×</button>

                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="intro" smooth={true} offset={-100} duration={500}>Historia</Link></li>
                    <li><Link to="character" smooth={true} offset={-50} duration={500}>Personagens</Link></li>
                    <li><Link to="game" smooth={true} offset={-50} duration={500}>Jogos</Link></li>
                </ul>

            </div>
            
            <ul className={S.menu}>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="intro" smooth={true} offset={-100} duration={500}>Historia</Link></li>
                <li><Link to="character" smooth={true} offset={-50} duration={500}>Personagens</Link></li>
                <li><Link to="game" smooth={true} offset={-50} duration={500}>Jogos</Link></li>
            </ul>
        </nav>
    );
}
