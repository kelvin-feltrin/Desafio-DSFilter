import './styles.css';

export default function Filter() {
    return (
        <section className="dsc-card">
            <form className='dsc-form-container'>
                <input type="text" placeholder='Preço mínimo' />
                <input type="text" placeholder='Preço máximo' />
                <button>Filtrar</button>
            </form>
        </section>
    );
}