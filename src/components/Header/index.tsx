import './style.css';
import homeImg from '../../asserts/home.svg'
import MyNavLink from '../MyNavLink';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header className='dsc-header'>
            <div className='dsc-header-container dsc-container'>
                <nav className='dsc-nav-header'>
                    <MyNavLink name='Início' routeName='home' />
                    <MyNavLink name='Produtos' routeName='products' />
                    <MyNavLink name='Sobre nós' routeName='about' />
                </nav>

                <div className='dsc-img-header'>
                    <Link to="/">
                        <img src={homeImg} alt="home page" />
                    </Link>
                </div>
            </div>
        </header>
    );
}