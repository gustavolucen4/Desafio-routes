import { Outlet } from 'react-router-dom';
import MyNavLink from '../../../components/MyNavLink';
import './style.css';

export default function Products() {

    return(
        <main>
            <section className='dsc-container'>
                <div className='dsc-products-nav-container'>
                    <nav className='dsc-products-nav' >
                        <MyNavLink name='Computadores' routeName='computers'/>
                        <MyNavLink name='Eletrônicos' routeName='electronics'/>
                        <MyNavLink name='Livros' routeName='books'/>
                    </nav>
                </div>

                <Outlet />
            </section>
        </main>
    );
}