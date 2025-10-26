import { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import * as productService from '../../services/product-service.ts';
import type { ProductDTO } from "../../models/product.ts";
import { ContextProductsCount } from "../../utils/context-products.ts";

type FilterParams = {
    minValue?: number;
    maxValue?: number;
}

export default function ListingBody() {

    const [filterParams, setFilterParams] = useState<FilterParams>({
        minValue: 0,
        maxValue: Number.MAX_VALUE
    });

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const {setContextProductsCount} = useContext(ContextProductsCount);

    function handleFilter(minValueText?: number, maxValueText?: number) {
        setFilterParams({...filterParams, 
            minValue: minValueText, 
            maxValue: maxValueText
        });
    }

    useEffect(() => {
        const productsList = productService.findByPrice(
           filterParams?.minValue ?? 0, 
           filterParams?.maxValue ?? Number.MAX_VALUE
        );

        setProducts(productsList);
        setContextProductsCount(productsList.length);
    }, [filterParams]);

    return (
        <main className="dsc-container">
            <Filter onFilter={handleFilter} />
            <Listing products={products}/>
        </main>
    );
}