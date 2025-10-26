import './styles.css';

import { useState } from 'react';

type Props = {
    onFilter: (minValue?: number, maxValue?: number) => void;
}

export default function Filter({ onFilter } : Props) {

    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");

    function handleMinValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMinValue(event.target.value);
    }

    function handleMaxValueChange (event: React.ChangeEvent<HTMLInputElement>) {
        setMaxValue(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const min = minValue ? Number(minValue) : 0;
        const max = maxValue ? Number(maxValue) : Number.MAX_VALUE;
        onFilter(min, max);
    }

    return (
        <section className="dsc-card">
            <form className='dsc-form-container' onSubmit={handleSubmit}>
                <input 
                    value={minValue}
                    type="text" 
                    placeholder='Preço mínimo' 
                    onChange={handleMinValueChange}
                />
                <input 
                    value={maxValue}
                    type="text" 
                    placeholder='Preço máximo' 
                    onChange={handleMaxValueChange}
                />
                <button>Filtrar</button>
            </form>
        </section>
    );
}