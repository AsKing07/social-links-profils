import logo from "./logo.svg";
import "./App.css";
import Head from "./components/header";
import Social from "./components/social";
import reseauxSociaux from "./socialmedia.json";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
 
  return (
    <div className="container">
      <div className="card">
        <Head />
        <div className="socialList">
        {reseauxSociaux.map((reseau) => (
          <div key={reseau.nom}>
            <Social nom={reseau.nom} lien={reseau.lien} logo={reseau.logo}/>
          </div>
        ))}
      </div>
      </div>
      {/* {reseauxSociaux.map((reseau, index)=>(
        <li key={index}>
          <a href={reseau.lien} target="_blank" rel="noopener noreferrer">{reseau.nom}</a>
        </li>
      ))} */}

      <footer>
      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://charbelsnndev.vercel.app/">Charbel SONON</a>.
  </div>
      </footer>
      
    </div>
  );
}

export default App;

library.add(fab, fas, far)