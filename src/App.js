import Header from "./components/Header";
import Products from "./components/Products";
import PromoBanner from "./components/Banner";
import AboutUsSection from "./components/About";
import Bestsellers from "./components/Bestsellers";

function App() {
  const slides = [
    {
      image: './guy.jpg',
      text: 'Celebrate Moments, Savor Traditions – Discover Your Perfect Blend'
    },
    {
      image: './cigars.jpg',
      text: 'Ignite your passion for cigars with our exquisite collection'
    },
    {
      image: './tobacco.jpg',
      text: 'Experience the rich heritage of tobacco with our carefully cultivated leaves'
    }
  ];
  return (
    <div className="App">
      <Header />
      <PromoBanner slides={slides} />
      <AboutUsSection />
      <Products />
      <Bestsellers />
    </div>
  );
}

export default App;
