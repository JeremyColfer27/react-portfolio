import React from 'react';
import { useState } from 'react';



import styles from './Fluentree.module.css';
import img from './assets/fluentree_hero.jpg';
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';
import fluentree_logo_blue from './assets/fluentreeLogoBlue.png';
import header_img from './assets/fluentree_hero.jpg';
import lesson_img from './assets/video_comprehension_final.png';
import logoSVG from './assets/logo.svg';
const title = "Fluentree"
const imgAltText = "Pubs on Tap"
const tags = ["Venture Creation", "Ideation", "Sprint"]
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
                        <span key={index} className={styles["tag"]}>{tag}</span>
                    ))}
                </div>

                <button className={styles["close_button"]}
                onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}                >
                    <img className="close-button" src={close} alt="close window icon" />
                </button>
            </div>

            <div className={styles["expanded-project-body"]}>


                <div className={styles["header_logo"]}>
                    <img src={fluentree_logo_blue}></img>
                    <p>fluentree</p>
                
                </div>
                <div className={styles["header_image"]}>
                    <img src={header_img}></img>
                </div>
            

            <div className={styles["slogan"]}>
                <p>Harvesting language skills for life long learning</p>
            </div>


            <div className={styles["intro"]}>
                    <p>Fluentree is a language-learning platform designed to address the shortcomings of existing language learning apps. It aims to improve learner engagement and fluency rates by offering personalised learning paths, diverse resources, and round-the-clock AI and expert-powered support. Additionally, Fluentree caters to educators by providing a teacher portal with curriculum-aligned resources and tools for tracking student progress.</p>
            </div>
            
                <div className={styles["block-fluen"]}>
                    <h3>Context</h3>
                    <p>Fluentree emerged from the collaboration of two university modules: Ideation for Innovation and New Creative Ventures. In the Ideation for Innovation module, we explored creative ways to tackle complex challenges using playful ideation strategies. Building on these ideas, the New Creative Ventures module focused on transforming them into viable business ventures. Working in interdisciplinary groups, we developed robust business models and pitched our ideas effectively.</p>
                </div>
                <div className={styles["block-fluen"]}>
                    <h3>Problem Statement</h3>
                    <p>Despite the proliferation of language learning apps, 95% of learners fail to achieve fluency. This high attrition rate is often attributed to the lack of engagement and personalisation in existing apps. Additionally, teachers find it challenging to integrate these apps into their curriculum due to misalignment with educational standards. Fluentree addresses these issues by offering a personalised and engaging platform designed for both individual learners and educational institutions.</p>
                </div>
                <div className={styles["lesson-pic"]}>
                    <img className="lesson_img" src={lesson_img} alt="Screenshot of a lesson" />
                </div>
                <div className={styles["block-fluen"]}>
                    <h3>Skills</h3>
                    <p>My unique contribution to Fluentree was bridging the gap between user needs and technical implementation. Through thorough user research, I identified pain points and preferences that informed the design of personalised learning paths and engaging content. My expertise in UX/UI design ensured an intuitive and user-friendly interface, while my project management skills facilitated seamless collaboration among language experts, developers, and stakeholders.</p>
                </div>
            
            

            <div className={styles["extraInfo"]}>
                <a>Download the full venture plan here LINK FULL REPORT</a>
                
            </div>



               

            </div>
        </div>
    )


}

export default {title, tags, img, imgAltText, TemplatePage, hiddenClassName};