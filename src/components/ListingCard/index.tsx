import './styles.css';

export default function ListingCard() {
    return (
        <section className="dsc-listing-card-container">
            <div className='dsc-listing-card-content-container'>
                <span className='dsc-listing-card-content-label'>
                    PC Gamer Pro
                </span>
                <span className='dsc-listing-card-content-value'>
                    R$ 1200.00
                </span>
            </div>
        </section>
    );
}