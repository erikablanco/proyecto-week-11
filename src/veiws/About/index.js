import './about.css'
import foto2 from "../../assets/images/erika.jpeg";


const About = () => (
    <div className="about">
       
        <div className="card-1">
            <img src={foto2} alt="FotoProfile" />
            <div className="card-info">
                <h2>Erika Blanco</h2>
                <p>Bióloga,  atraída  por el desarrollo web frontend, me encanta crear aplicaciones ya que puede ayudar a resolver  problemas  actuales de  la sociedad, a superar sus desafíos a través de la tecnología.  Estoy buscando    proyectos en los que pueda utilizar mi creatividad y mi capacidad de trabajo en equipo.</p>        
            </div>
        </div>
        
    </div>
);

export default About;