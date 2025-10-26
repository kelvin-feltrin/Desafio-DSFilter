import type { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function ListingCard({ product } : Props) {
    return (
        <section className="dsc-listing-card-container">
            <div className='dsc-listing-card-content-container'>
                <span className='dsc-listing-card-content-label'>
                    {product.name}
                </span>
                <span className='dsc-listing-card-content-value'>
                    {product.price.toFixed(2)}
                </span>
            </div>
        </section>
    );
}