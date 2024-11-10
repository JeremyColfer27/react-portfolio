import React from 'react';
import { useState } from 'react';



import styles from './Fantasy.module.css';
// import img from './assets/1000px-compressed/fluentree_hero.jpg';
// import img from './assets/mockup-fantasy-portrait.png';
import img from './assets/thumbnail.jpg'
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';
import fluentree_logo_blue from './assets/fluentreeLogoBlue.png';
import header_img from './assets/mockup-fantasy-left.png';
import header_img_desktop from './assets/1000px-compressed/mockup-fantasy-dekstop-front.png';
import leaderboard from './assets/1000px-compressed/leaderboard.png'
import login from './assets/1000px-compressed/login.png'
import lesson_img from './assets/video_comprehension_final.png';
import logoSVG from './assets/logo.svg';
const title = "Intramural Fantasy"
const subtitle = "Web App for amateur football teams"
const imgAltText = "Pubs on Tap"
const tags = ["Full-Stack", "Node JS", "React JS"]
const hiddenClassName = styles["expanded-project-hidden"]
console.log("Styles", styles)





function TemplatePage(props){
    const [hidden, toggleHidden] = useState(props.hidden);
    //turns a list of class name strings into the correct module naming scheme and returns it as a string of the correct classes
    const modualiseClassNames = function(classNames){
        console.log("PROPS CLASSES: ", classNames);
        let str = ""
        for(let i = 0; i<classNames.length; i++){
            str += styles[classNames[i]];
            str += " "
        }
        console.log("class STRING", str)
        return str;
    }

    console.log("These class names were handed to me: ", props.containerClasses)
    console.log("project hidden?: ", hidden)
    const closeFunction = props.closeFunction
    return(
        <div className={modualiseClassNames(["expanded-project"]) + (props.hidden ? modualiseClassNames(["hidden-project"]) : "") + (props.containerClasses == null ? "" : modualiseClassNames(props.containerClasses))}>
            <div className={modualiseClassNames(["top", "expanded-project-top"])}>
                <button className={styles["back_button"]}
                    onClick={e => { e.stopPropagation(); closeFunction() }}
                >
                    <img className="close-button" src={back_white} alt="close window icon" />
                </button>

                <div className={styles["tags"]}>
                    {tags.map((tag, index) => (
                        <p key={index} className={styles["tag"]}>{tag}</p>
                    ))}
                </div>

                <button className={styles["close_button"]}
                onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}                >
                    <img className="close-button" src={close} alt="close window icon" />
                </button>
            </div>

            <div className={styles["expanded-project-body"]}>


                <div className={styles["header_logo"]}>
                    {/* <img src={fluentree_logo_blue}></img> */}
                    <p>Intramural Fantasy Football</p>
                    <div className={styles["header_image"]}>
                        <img src={header_img}></img>
                    </div>

                    <div className={styles["header_image_desktop"]}>
                        <img className={styles["desktop-mockup"]} src={header_img_desktop}></img>
                        {/* <img className={styles["phone-mockup"]} src={header_img}></img> */}
                    </div>
                </div>

            

            <div className={styles["slogan"]}>
                <p>The match prediction app that brings extra motivation and laughs to your football team.</p>
            </div>


            <div className={styles["block-fluen"]  + " " + styles["why-create"]}>
                    <h3>Why did I create it?</h3>
                    <p>
                        I play for the Computer Science football team at Bristol Uni every Wednesday.

                        <br></br>

                        <br></br>

                        We love playing but it's no shock that many of us aren't very good at scoring goals, winning games, and for some players, turning up for them to begin with.

                        <br></br>
                        <br></br>
                        I built this web app to address all of these issues by motivating our players to show up, play well, and make light of the situation win or lose.
                    </p>
            </div>


            <div className={styles["image-block"]}>
                    <img src={login} alt="" />
            </div>

            <div className={styles["image-block"]  +" " + styles["leaderboard-image"]}>
                    <img src={leaderboard} alt="" />
            </div>

            <div className={styles["block-fluen"]  + " " + styles["how-it-works"]}>
                    <h3>How does it work?</h3>
                    <p>
                        Every week users login to select their own mini teams of 5 computer science players, earning points based on their real-life performances. 

                        <br></br>
                        <br></br>
                        After each game our admin uploads player performances to the site which automatically updates the weekly and season leaderboards to reflect the best user predictions.

                        <br></br>
                        <br></br>
                        Points are awarded to specific players for goals, assists, and strong performances.
                        Deductions are also applied for players who turn up late, miss open goals, or find other ways to embarass the team...
                    </p>
            </div>




            <div className={styles["block-fluen"]  + " " + styles["how-built"]}>
                <div className="">

                    <h3>How did I build it?</h3>
                    <p>This was my first ever full-stack project so I learned a lot about how webpages interact with servers and databases to produce end-to-end online experiences. I was already familliar with using vanilla javascript for static websites so I decided to develop the entire stack with Javascript tools: React, Node, and Mongo (JSON) database which provided some basic familiarity whilst I explored unfamilliar and intimidating web concepts.
                    </p>
                   
                </div>
                    <div className={styles["sub-block"]}>
                        <h4>Backend</h4>
                        <p>I used Node JS to build an API that bridged the gap between users clicking buttons on their browser and the modification of data behind the scenes needed to provide the weekly game experience.</p>    
                    </div>

                    <div className={styles["sub-block"]}>
                        <h4>Frontend</h4>
                        <p>I learned how to use React for this project which was useful for creating templates for different UI elements that could be rendered dynamically based on the match and player data fetched from the server.</p>
                    </div>

                    <div className={styles["sub-block"]}>
                        <h4>Security</h4>
                        <p>I learned new concepts for ensuring that user's accounts are well protected (authentication) and that data is only ever modified by users with the right permissions (authorisation).
                            <br></br><br></br>
                            I quickly learned that you have to handle all security logic on the backend because it's very easy to spoof information from the browser over the internet. 
                            <br></br><br></br>
                            Similarly, you can use design to help nudge users away from making errors when logging in and sending data but you cannot guarantee it's going to be sensible to process without sanity checks on the backend.</p>   
                    </div>
</div>

<div className={styles["final-image-mobile"]}>
                        <img className={styles["desktop-mockup-bottom"]} src={header_img_desktop}></img>
</div>

<div className={styles["final-image-desktop"]}>
                        <img className={styles["mobile-mockup-bottom"]} src={header_img}></img>
</div>

            {/* <div className={styles["intro"]}>
                    <p>Fluentree is a language-learning platform designed to address the shortcomings of existing language learning apps. It aims to improve learner engagement and fluency rates by offering personalised learning paths, diverse resources, and round-the-clock AI and expert-powered support. Additionally, Fluentree caters to educators by providing a teacher portal with curriculum-aligned resources and tools for tracking student progress.</p>
            </div>
            

                <div className={styles["lesson-pic"]}>
                    <img className="lesson_img" src={lesson_img} alt="Screenshot of a lesson" />
                </div>

            
             */}

            <div className={styles["extraInfo"]}>
                <p>Check out my web app at</p><a target="_blank" href="https://www.intramuralfantasy.com">intramuralfantasy.com</a>
                
            </div>



            <div className={modualiseClassNames(["top", "expanded-project-top"])}>
                <button className={styles["back_button"]}
                    onClick={e => { e.stopPropagation(); closeFunction() }}
                >
                    <img className="close-button" src={back_white} alt="close window icon" />
                    {/* <p className="bottom-back-button">Back to projects</p> */}
                </button>


{/* 
                <button className={styles["close_button"]}
                onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}                >
                    <img className="close-button" src={close} alt="close window icon" />
                </button> */}
            </div>

            </div>
        </div>
    )


}

export default {title, subtitle, tags, img, imgAltText, TemplatePage, hiddenClassName};