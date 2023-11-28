import logo from './logo.svg';
import './App.css';
import './styles.css'
import { Gradient } from 'whatamesh'
import {useEffect} from 'react'
import generic from './projects/TemplatePage'


function App() {
  const projects = [generic, generic, generic, generic, generic, generic]

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, [])
  

  return (
    <div onClick={() => {}}>

    <div className="gradient-container">
        <canvas id="gradient-canvas" data-transition-in/>
       
    </div>


   <div className="noise"></div>

  <div className="grid-container">

    <div className="name">
      <h1>
        <span className="liam">LIAM K</span>
        <span className="jones"> JONES</span>
      </h1>
    </div>

    <div className="bio">
      <p>I am currently in my third year pursuing a Computer Science with Innovation degree (MEng), where I've gained valuable experience integrating core computer science skills in diverse, multi-disciplinary Agile projects.</p>
    </div>

    <div className="buttons">
      <button type="button">About</button>
      <button type="button"
        onClick = {() => document.getElementById("projects-page").classList.toggle("hidden")}
      >Projects</button>
      <button type="button">Contact</button>
    </div>

    <div className="projects-page hidden" id="projects-page">
      <button className='projects-close-button'
       onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}
      >
        X
      </button>
      <h2>Projects</h2>

      <div className="projects-container">
        {/* <div className="project hidden-project"
             onClick={e => e.target.classList.toggle("hidden-project")}> */}
          {
            projects.map((p, i) =>
              <div className="project hidden-project" 
                   key={p.title + i} 
                   id={"project-" + i.toString()}
                   onClick = {e => {document.getElementById("project-" + i.toString()).classList.toggle("hidden-project")}}
                   >

                <p className="project-thumbnail-title">{p.title}</p>

                <img className="project-thumbnail-image" 
                     src={p.img} 
                     alt={p.imgAltText} />
                <p.TemplatePage closeFunction={{id: `project-${i.toString()}`, classToToggle:"hidden-project"}}/>
                


              </div>
            )
          }
      </div>

  </div>
  </div>
  </div>
  );
}

export default App;
