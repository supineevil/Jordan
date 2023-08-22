import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";
import ShopPage from "./components/ShopPage";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
const App=()=>(
  
  <Router>
    <Routes>
    <Route path="/" element={<main classname="relative mb-8 ">
      <section classname="padding">
        <Nav />
      </section>
      <section classname="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x p-10">
        <Footer/>
      </section>
    </main>}/>
    <Route path="/ShopPage" element={
        <main>
          <div className="max-w-7xl mx-auto p-8">
            <ShopPage/>
          </div>
          <section className="bg-black mt-8 padding-x p-10">
            <Footer/>
          </section>
        </main> 
    }></Route>
    </Routes>
  </Router>
  

);
export default App;