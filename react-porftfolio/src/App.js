import React from 'react';

import logo from './logo.svg';
import close from './assets/close.png';

import './App.css';
import './styles.css'
import { Gradient } from 'whatamesh'
import {useEffect} from 'react'
import generic from './projects/TemplatePage'
import pot from './projects/pubsOnTap'



function App() {
  const projects = [pot, generic, generic, generic, generic, generic, generic, generic]

  window.addEventListener("resize", () => {
    document.documentElement.setAttribute("style", `--viewport-height: ${(window.innerHeight).toString()}px`);
  })

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, [])

  useEffect(() => {
    console.log(window.innerHeight);
    document.documentElement.setAttribute("style", `--viewport-height: ${(window.innerHeight).toString()}px`);
    // document.documentElement.setAttribute("style", `--viewport-height: ${"300"}px`);

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
        <span className="liam">LIAM</span>
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
  </div>

      

  <div className="projects-page hidden" id="projects-page">
      <div className="projects-backdrop">

        
      </div>
      <div className="top">
        <h2 className='projects-header'>PROJECTS</h2>
        <button className='projects-close-button'
        onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}
        >
          <img className="close-button" src={close} alt="close window icon" />
        </button>
      </div>


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
                <div className="project-info">
                  <h3 className="project-thumbnail-title">{p.title}</h3>
                  <div className="tags">
                    {p.tags.map( (t) => 
                      <p className='tag'>{t}</p>
                    )}
                  </div>
                </div>


                <div className="overlay"></div>
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
  );
}

export default App;
