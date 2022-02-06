import './App.css';
import Carte from './compt/cart';
import Contact from './compt/Contact';
import Footer from './compt/Footer';
import NavPro from './compt/Nav';
import Profile from './compt/profile';


function App() {
  var name = 'John Doe'
  const cart = ['project1','projrct2','project3','project4']
  const img = [<img src='/res/proj0.jpg'/>,<img src='/res/proj1.jpg'/>,<img src='/res/proj2.jpg'/>,<img src='/res/proj3.jpg'/>,<img src='/res/proj4.jpg'/>]
  return (
      <body>
        <NavPro name = {name}/>
        <Profile name = {name}/>
        <section id='projects'>
          <h2 className='text-important'>Projects</h2>
          <Carte cart={cart} img={img}/>
        </section>
        <Contact/>
        <Footer/>
        
        
      </body>
  );
}

export default App;
