import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import close from './assets/close_white.png';

import './App.css';
import './styles.css'
import { Gradient } from 'whatamesh'
import {useEffect} from 'react'
import generic from './projects/TemplatePage'
import pot from './projects/pot/pubsOnTap'
import fluentree from './projects/Fluentree'



function App() {
  const [projects, setProjects] = useState([pot, fluentree, generic, generic, generic, generic, generic, generic])
  const [projectsHidden, setProjectsHidden] = useState(projects.map(p => {return {project: p, isHidden: true}}))
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [message, setMessage] = useState("this is the default message");
  const [email, setEmail] = useState("jeremycolfer03@gmail.com");
  const [name, setName] = useState("default name");
  
  const enableMessageSend = true;

  const API_BASE = "https://cssfantasyapi.onrender.com";
  // const API_BASE = "http://localhost:3001";

  //API call for sening a message
  const sendMessage = async() => {
    const messageContent = document.getElementById("message-content").value;
    const messageName = document.getElementById("message-name").value;
    const messageReturnEmail = document.getElementById("message-return-email").value;

    if(enableMessageSend){
      const response  = await fetch(API_BASE+"/admin/email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "for": "liamjones73@outlook.com",
          // "for": "Jeremycolfer03@gmail.com",
          "message": messageContent,
          "email": messageReturnEmail,
          "name": messageName
        })
    }).then(res => res.json()).then(res => {
        console.log(res.message);
        if(!res.error){
          handleSuccessfulMessage();
        }
        else{
          handleUnsuccessfulMessage();
        }
    }).catch(e => console.log(e));
  }
  else{
    window.alert("messaging currently unavailable. Apologies.")
  }
}

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, [])

  //adds a class to projects page to indicate whether any project is open
  useEffect(() => {
    if(isProjectOpen) document.getElementById("projects-page").classList.add("project-open");
    else document.getElementById("projects-page").classList.remove("project-open");
  }, [isProjectOpen])

  useEffect(() => {
    console.log(window.innerHeight);
    document.documentElement.setAttribute("style", `--viewport-height: ${(window.innerHeight).toString()}px`);
    // document.documentElement.setAttribute("style", `--viewport-height: ${"300"}px`);

  }, [])

  //runs after receiving confirmation that email has been sent
  const handleSuccessfulMessage = () => {
    window.alert("Your message has been received, thank you!")
  }

    //runs when email sending has caused an error
    const handleUnsuccessfulMessage = () => {
      window.alert("Your message couldn't be received please try again")
    }

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
      <button type="button" onClick={() => document.getElementById("contact-form").classList.remove("hidden")}>Contact</button>

    </div>
  </div>

  

  <div id="contact-form"className="contact-form hidden">
        <div className="form-container name-container">
          <label htmlFor="message-name">Your name</label>
          <input id="message-name" type="text" />
        </div>

        <div className="form-container content-container">
          <label htmlFor="message-content">Message</label>
          <textarea id="message-content" type="text"/>
        </div>

        <div className="form-container return-email-container">
          <label htmlFor="message-return-email">Your email</label>
          <input id="message-return-email" type="text" />
        </div>

        <button onClick={async () => await sendMessage()}>Send Message</button>
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
            projects.filter((q,i) => true).map((p, i) =>
              <div className="project hidden-project"         
                   key={p.title + i} 
                   id={"project-" + i.toString()}

                   >
                <div className="project-info">
                  <h3 className="project-thumbnail-title">{p.title}</h3>
                  <div className="tags">
                    {p.tags.map( (t) => 
                      <p className='tag'>{t}</p>
                    )}
                  </div>
                </div>


                <div className="overlay"
                
                onClick = {e => {; 
                console.log("project toggled");
                setProjectsHidden(projectsHidden.map((p,index) => {
                  setIsProjectOpen(true);
                  if (index == i){
                    const newP = p;
                    newP.isHidden = !p.isHidden;
                    return newP
                  }
                  else return p;  
                  }))
              }}
                ></div>
                <img className="project-thumbnail-image" 
                     src={p.img} 
                     alt={p.imgAltText} />
                <p.TemplatePage 
                hidden={projectsHidden[i].isHidden}
                containerClasses={["expanded-project"]}
                // closeFunction={{id: `project-${i.toString()}`, classToToggle:"hidden-project"}}
                closeFunction = {e => setProjectsHidden(projectsHidden.map((p, index) => {
                  setIsProjectOpen(false);
                  if (index == i){
                    const newP = projects[i];
                    newP.isHidden = !projects[i].isHidden;
                    return newP;
                  }
                  else return p;  
                  }))}/>
                  
                


              </div>
            )
          }
      </div>
  </div>

  </div>
  );
}

export default App;
