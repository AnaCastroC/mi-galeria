import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import dataImages from './data/CardData';

function App() {
  return (
    <div>
      <Header  title='Galería de imágenes con React'/>
      {dataImages.map((image) => {
        return (
          <Card 
          key = {image.id}
          url = {image.url}
          title = {image.title}
          description = {image.description}
          />
        );
      })
      }

      <Footer />
    </div>
  );
}

export default App;
