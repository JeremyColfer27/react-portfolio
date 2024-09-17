import React from 'react';
import { useState, useRef } from 'react';
import logo from './logo.svg';
import close from './assets/close_white.png';

import './App.css';
import './styles.css'
import { Gradient } from 'whatamesh'
import {useEffect} from 'react'
import generic from './projects/TemplatePage'
import pot from './projects/pot/pubsOnTap'
import fluentree from './projects/fluentree/Fluentree'
import fantasy from './projects/fantasy/Fantasy'
import vibracelet from './projects/vibracelet/vibracelet'
import linkedin from './assets/linkedin_w.png';
import email_w from './assets/email_w.png';
import github from './assets/github_w.png';
import whatsapp from './assets/whatsapp_w.png';



function App() {
  const [projects, setProjects] = useState([pot, fluentree, vibracelet, fantasy])
  const [projectsHidden, setProjectsHidden] = useState(projects.map(p => {return {project: p, isHidden: true}}))
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [message, setMessage] = useState("this is the default message");
  const [email, setEmail] = useState("jeremycolfer03@gmail.com");
  const [name, setName] = useState("default name");
  const emailInputRef = useRef(null);

  const enableMessageSend = false;

  const API_BASE = "https://cssfantasyapi.onrender.com";
  // const API_BASE = "http://localhost:3001";

  //API call for sening a message
  const sendMessage = async() => {
    const messageContent = document.getElementById("message-content").value;
    const messageName = document.getElementById("message-name").value;
    const messageReturnEmail = emailInputRef.current.value;

    console.log(emailInputRef.current.classList);


    const isValidEmailAddress = 
      matchesEmailRegex(messageReturnEmail) && messageReturnEmail.length >= 3;

    console.log(isValidEmailAddress);

    if(!isValidEmailAddress || messageName.length <= 0 || messageContent.length <= 0){
      window.alert("make sure you fill out each section before sending me a message");
      emailInputRef.current.classList.add("validityChecked");
      document.getElementById("message-name").classList.add("validityChecked");
      document.getElementById("message-content").classList.add("validityChecked")
    }


    if(enableMessageSend){
      const response  = await fetch(API_BASE+"/admin/email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "for": "liam",
          // "for": "jeremy",
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

  const matchesEmailRegex = (emailStr) => {
    return  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    .test(emailStr)
  }

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
      <button type="button" onClick={() => {document.getElementById("about-page").classList.remove("hidden")}}>About</button>
      <button type="button"
        onClick = {() => document.getElementById("projects-page").classList.toggle("hidden")}
      >Projects</button>
      <button type="button" onClick={() => document.getElementById("contact-form").classList.remove("hidden")}>Contact</button>

    </div>
  </div>

  <div id="about-page" className="about-page hidden">
    <div className="about-container">

        <button className='about-close-button'
        onClick={() => document.getElementById("about-page").classList.add("hidden")}
        >
          <img className="close-button" src={close} alt="close window icon" />
        </button>


    <h2 className="about-title">ABOUT ME</h2>
    <div className="about-content">
      <div className="about-image-container">
        <img className="about-image" alt='a picture of me'></img>
      </div>

      <div className="about-text-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, adipisci enim. Cumque aut odit quasi. Repellendus dolore ex soluta quam, sit temporibus placeat mollitia. Eligendi veritatis culpa, laudantium dolorum hic amet iusto voluptas repellendus sequi eos, veniam, nostrum cumque repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum distinctio, accusantium, labore iste nemo mollitia totam optio sequi molestias eius blanditiis. Dolores ipsa quia molestias ad officia non eius tempore, suscipit fugit? Rerum, temporibus?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptas molestias ex perferendis accusamus inventore.</p>
        <div className="about-buttons-container">
        <button id="btn-gra" class="btn-gra" onClick={() => {
            document.getElementById("about-page").classList.add("hidden")
            document.getElementById("projects-page").classList.toggle("hidden"); 
                                                           }}>Projects</button>
          <button id="btn-gra" class="btn-gra" onClick={() => document.getElementById("contact-form").classList.remove("hidden")}>Contact</button>
        </div>
      </div>
    </div>



    </div>



  </div>

  

  <div id="contact-form"className="contact-form hidden">

      <div className="top">
        <h2 className='contact-header'>CONTACT</h2>
        <button className='contact-close-button'
        onClick={() => document.getElementById("contact-form").classList.add("hidden")}
        >
          <img className="close-button" src={close} alt="close window icon" />
        </button>
      </div>

      <div className="socials">

      <a href="https://www.linkedin.com/in/liam--jones" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Open my Linkedin Profile" />
      </a>

      <a href="mailto:liam@liamjones.io" target="_blank" rel="noopener noreferrer">
        <img src={email_w} alt="Send me an Email" />
      </a>

      <a href="https://github.com/liam-jones-2002" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Take a look at my Github" />
      </a>

      <a href="https://wa.me/7519075696" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="Message me on Whatsapp" />
      </a>

      

      </div>

        <div className="form-container name-container">
          <label htmlFor="message-name">Your name</label>
          <input id="message-name" type="text" onChange={(e) => {
            if(e.target.value.length > 0) e.target.classList.add("valid");
            else(e.target.classList.remove("valid"))
          }}/>
        </div>

        <div className="form-container content-container">
          <label htmlFor="message-content">Your message</label>
          <textarea id="message-content" className="message-content" type="text" onChange={(e) => {
            if(e.target.value.length > 0) e.target.classList.add("valid");
            else(e.target.classList.remove("valid"))
          }}/>
        </div>

        <div className="form-container return-email-container">
          <label htmlFor="message-return-email">Your email address</label>
          <input ref={emailInputRef} id="message-return-email" type="email" onChange={(e) => {
            if(e.target.value.length > 0 && matchesEmailRegex(e.target.value)) e.target.classList.add("valid");
            else(e.target.classList.remove("valid"))
          }} />
        </div>


      {/* <button className='send-button-new'>New Send Button</button> */}

      {/* <a href="#" id="btn-gra" class="btn-gra">hover me</a> */}

       <button id="btn-gra" class="btn-gra" onClick={async () => await sendMessage()}>Send Message</button>
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

                <div className="project-button">




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
                >




                </div>
                <img className="project-thumbnail-image" 
                     src={p.img} 
                     alt={p.imgAltText} />

                </div>

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
