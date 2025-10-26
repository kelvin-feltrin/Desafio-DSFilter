import './styles.css';
import ListingCard from "../../../components/ListingCard";
import type { ProductDTO } from '../../../models/product';

type Props = {
    products: ProductDTO[];
}

export default function Listing({ products } : Props) {
    return (
        <section className="dsc-card dsc-listing-container dsc-mb20">
            {
                products.map(
                    product => 
                        <ListingCard key={product.id} product={product} />
                )
            }
        </section>
    );
}