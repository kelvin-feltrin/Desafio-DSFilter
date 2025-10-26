import './styles.css';
import ListingCard from "../../../components/ListingCard";

export default function Listing() {
    return (
        <section className="dsc-card dsc-listing-container dsc-mb20">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </section>
    );
}