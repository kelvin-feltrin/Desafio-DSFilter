import Filter from "./Filter";
import Listing from "./Listing";

export default function ListingBody() {
    return (
        <main className="dsc-container">
            <Filter />
            <Listing />
        </main>
    );
}