import { useContext } from 'react';
import './styles.css';
import { ContextProductsCount } from '../../utils/context-products';

export default function Header() {

    const {contextProductsCount} = useContext(ContextProductsCount);

    return (
        <header className="dsc-header">
            <nav className='dsc-container dsc-header-container'>
                <h1>DSFilter</h1>

                <p>
                    {contextProductsCount} produto(s)
                </p>
            </nav>
        </header>
    );
}