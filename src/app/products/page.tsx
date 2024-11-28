
import ProductCard from "@/components/shared/ProductCard";
import Wrapper from "@/components/shared/Wrapper";
import {fetchProductsData} from "@/lib/fetchProductsData"
import { IProduct } from "@/types/types";

import React from "react";

const ProductsPage = async () => {
 const {products} = await fetchProductsData()
  return (
    <Wrapper>
      <div className="py-20">
        <div className="my-16">
          
              <h1 className="text-6xl font-bold text-center my-20 text-emerald-300">
                Our Products
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.length > 0 &&
                  products.map((product: IProduct) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      brand={product.brand}
                      category={product.category}
                      thumbnail={product.thumbnail}
                    />
                  ))}
              </div>
         
      
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;
