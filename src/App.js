import Header from "./components/Header";
import Products from "./components/Products";
import PromoBanner from "./components/Banner";

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
      <Products />
    </div>
  );
}

export default App;
