import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import ForYou from "@/components/front-end/ForYou";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import { useState } from "react";


const MainPage = () => {
    const [showCart, setShowCart] = useState(false);

  return (
    <>
    <Navbar setShowCart={setShowCart} />
    {showCart && <Cart setShowCart={setShowCart} />}
    <Hero />
    <Feature/>
    <ForYou/>
    <TrendingProducts />
    <Banner />
    <Footer />
    </>
  )
}

export default MainPage