import React from 'react';
import { useState, useRef } from 'react';
import logo from './logo.svg';
import close from './assets/close_white.png';

import './App.css';
import './styles.css'
import './styles-jeremy.css'
import { Gradient } from 'whatamesh'
import {useEffect} from 'react'
// import generic from './projects/TemplatePage'
// import pot from './projects/pot/pubsOnTap'
import fluentree from './projects/fluentree/Fluentree'
import fantasy from './projects/fantasy/Fantasy'
import vibracelet from './projects/vibracelet/vibracelet'
import linkedin from './assets/linkedin_w.png';
import email_w from './assets/email_w.png';
import github from './assets/github_w.png';
import whatsapp from './assets/whatsapp_w.png';



function App() {
  const [projects, setProjects] = useState([fluentree, fantasy])
  const [projectsHidden, setProjectsHidden] = useState(projects.map(p => {return {project: p, isHidden: true}}))
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [message, setMessage] = useState("this is the default message");
  const [email, setEmail] = useState("jeremycolfer03@gmail.com");
  const [name, setName] = useState("default name");
  const emailInputRef = useRef(null);
  const [activeLanguage, setActiveLanguage] = useState("english");

  const enableMessageSend = true;

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
          // "for": "liam",
          "for": "jeremy",
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

// document.addEventListener("resize", () => {
//   documentElement.height = window.innerHeight;
// })

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');


  }, [])

  let touchStartX = 0;
  let touchEndX = 0;
  
  // const closeFunction = props.closeFunction;

  // Function to check if the swipe is a valid right swipe
  const checkForSwipe = () => {
      if (touchEndX > touchStartX + 50) {
          // Right swipe detected, trigger the close function
          console.log(projectsHidden)
          projectsHidden.forEach(p => {
            p.isHidden = true;
          })
          setIsProjectOpen(false);

          // window.alert("close")
      }
  };

  // // Handle touch start event
  // const handleTouchStart = (e) => {
  //     touchStartX = e.changedTouches[0].screenX;
  // };

  // // Handle touch end event
  // const handleTouchEnd = (e) => {
  //     touchEndX = e.changedTouches[0].screenX;
  //     checkForSwipe(); // Check if swipe was valid
  // };

  // // Add and remove global event listeners for touch events
  // useEffect(() => {
  //     // Add event listeners to the document element
  //     document.addEventListener('touchstart', handleTouchStart);
  //     document.addEventListener('touchend', handleTouchEnd);

  //     // Cleanup event listeners when component unmounts
  //     return () => {
  //         document.removeEventListener('touchstart', handleTouchStart);
  //         document.removeEventListener('touchend', handleTouchEnd);
  //     };
  // }, []);
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

  const textModes = ["english", "linkedin", "french"];

  const switchTextMode = function(newMode){

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
      <h1 id="name-heading" >
        <span className="liam first-name">JEREMY</span>
        <span className="jones last-name">COLFER</span>
        {/* <svg className="svg-name-container">
        <text  y="80" className="svg-text">JEREMY</text>
        <text  y="150" className="svg-text">COLFER</text>
        </svg> */}
      </h1>
    </div>



    <div className="bio">
      <p>Hi, I'm Jeremy. <br></br>I'm studying Computer Science and Innovation (MEng) at Bristol and I love working on creative technology projects. Please check out examples of my work below and let me know what you think!</p>
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


    <div className="about-content">
      <div className="about-image-container">
        <img className="about-image" alt='a picture of me'></img>
      </div>

      <div className="about-text-content">
    <h2 className="about-title">ABOUT ME</h2>

        <div className="about-me-mode-container">
          <ul className="mode-list">
            <li className={"mode " + (activeLanguage === "english" ? "active" : "")}><button onClick={() => setActiveLanguage("english")}>Plain English</button></li>
            <li className={"mode " + (activeLanguage === "linkedin" ? "active" : "")}><button onClick={() => setActiveLanguage("linkedin")}>Linkedin-glish</button></li>
            <li className={"mode " + (activeLanguage === "french" ? "active" : "")}><button onClick={() => setActiveLanguage("french")}>French</button></li>
            {/* <li className="mode"></li> */}
          </ul>
        </div>


        <div className="about-text">

          {activeLanguage === "english" && (
          <div className="plain-english-text">
            <p>I'm Jeremy, or Jeremiah :)</p>
            <p>I'm enjoy working random coding or creative projects. I also love playing football or pretty much any ball sport that isn't rugby. </p>
            <br></br>
            <p>I've worked for a couple smaller companies creating social media videos and designing + building websites</p>

            <p>I currently work part-time for Bristol Uni, delivering seminars and lab support to students in the years below.</p>
            <br></br>
            <p>The Computer Science part of my degree has introduced me to the fundamentals of Machine Learning, Human-Computer Interaction and Cyber Security.</p>
            <br></br>
            <p>The Innovation part of my degree has helped me develop my entreprenuerial side, with modules on new venture creation, business analytics and marketing. Through this I've engaged in loads of cross-disciplinary teamwork, business idea prototyping and presentations</p>



          </div>
          )}

          {activeLanguage === "linkedin" && (
          <div className="linkedin-ese-text">
            {/* <p>The day I was born was actually the exact same day I exited the womb of my mother, and here's what it taught me about early start-up strategy.</p> */}
            {/* <p>Starting up is much like being born. You are nothing. You are massively reliant on the mother's milk that is seed funding and plenty of sleep deprived nights.</p> */}
            {/* <br></br> */}
            <p>My name has been Jeremy since birth but I implore you to call me Jeremiah, if you prefer.</p>
            <br></br>
            <p>I have a wealth of interests. I often partake in programming escapades where I may whip up some software in spontaneous fashion. I snatch at any opportunity to synthesise such technical activity with creative ideas and media.</p>
            <br></br>
            <p>I have offered my esteemed services to numerous modestly-sized enterprises including, but not limited to, my capabilities in website experience design and development, and my craftmanship in the motion picture arts.</p>
            <br></br>
            <p>Community is a cornerstone for me, which is why I volunteer my finite time to get paid by the University of Bristol for helping them educate my junior Computer Science peers through my delivery of bespoke seminars and lab support.</p>
            <br></br>
            <p>Through consistent engagement with the Computer Science wing of my Joint-honours degree, I have come to appreciate the domains of Machine Learning, Human-Computer Interaction, and Cyber Security.</p>
            <br></br>
            <p><cite>"A one-winged avian may never fly."</cite> <br></br>Jeremy Colfer</p>
            <br></br>
            <br></br>
            <p>Crucially the other wing of my degree serves my entrepreneurial spirit by granting me the opportunity to expand my theoretical understanding of business modelling, start-up creation, and the dark arts of modern marketing. Wasted would be such a rich understanding without the frequent opportunity to distill the very essense of it into hands-on practice. In this way, I have engaged in numerous team projects which unite the sensibilities of multiple academic disciplines. Further to this I have prototyped and presented countless business ideas to peers, academics and external clientel who undoubtedly benefit from my deep insights.</p>
          </div>
          )}

          {activeLanguage === "french" && (
          <div className="French-text">
            <p>Bah, c'est Francais</p>
          </div>
          )}
                    
        </div>



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
        <h2 className='contact-header'>CONTACT ME</h2>
        <button className='contact-close-button'
        onClick={() => document.getElementById("contact-form").classList.add("hidden")}
        >
          <img className="close-button" src={close} alt="close window icon" />
        </button>
      </div>

      <div className="socials">

      <a href="https://www.linkedin.com/in/jeremycolfer27" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Open my Linkedin Profile" />
      </a>

      <a href="mailto:jeremy.colfer@bristol.ac.uk" target="_blank" rel="noopener noreferrer">
        <img src={email_w} alt="Send me an Email" />
      </a>

      <a href="https://github.com/jeremycolfer27" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Take a look at my Github" />
      </a>

      {/* <a href="https://wa.me/7519075696" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="Message me on Whatsapp" />
      </a> */}

      

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
                  {p.subtitle ? <h4 className='project-thumbnail-subtitle'>{p.subtitle}</h4> : <></>}
                                   
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
