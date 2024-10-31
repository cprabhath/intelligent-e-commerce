import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ForYou = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get_products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-8 pe-5 px-5">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Just For You</h2>

        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        <ProductCard
          id="1"
          img="./mobile-1.png"
          category="Electronics"
          title="Samsung Galaxy Fold"
          price={999}
          
        />
        <ProductCard
          id="2"
          img="./mobile-2.png"
          category="Electronics"
          title="Apple iPhone 12 Pro"
          price={999}
        />
        <ProductCard
          id="3"
          img="./cpu-1.png"
          category="Electronics"
          title="NZXT Cooler"
          price={999}
        />
        <ProductCard
          id="3"
          img="./cpu-2.png"
          category="Electronics"
          title="NZXT Cooler"
          price={999}
        />
        <ProductCard
          id="3"
          img="./ipad-1.png"
          category="Electronics"
          title="Apple I Pad"
          price={999}
        />

        {/* {products.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            category={item.category}
            title={item.name}
            price={item.price}
          />
        ))} */}
      </div>
    </div>
  );
};

export default ForYou;
