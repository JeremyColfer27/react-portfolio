import React from 'react';
import { useState } from 'react';
import styles from './social.module.css';
import img from './assets/social-media-site-thumbnail.png'
import close from '../../assets/close_white.png';

const title = "Interactive Social Media Map"
const imgAltText = "Map showing videos dotted around the UK"
const tags = ["UX", "Work-In-Progress", "Web Dev"]
const hiddenClassName = styles["expanded-project-hidden"]

function TemplatePage(props) {
    const [hidden, toggleHidden] = useState(props.hidden);

    const modualiseClassNames = function(classNames) {
        console.log("PROPS CLASSES: ", classNames);
        let str = "";
        for (let i = 0; i < classNames.length; i++) {
            str += styles[classNames[i]];
            str += " ";
        }
        console.log("class STRING", str);
        return str;
    }

    console.log("These class names were handed to me: ", props.containerClasses);
    console.log("project hidden?: ", hidden);
    const closeFunction = props.closeFunction;
    
    return (
        <div className={modualiseClassNames(["expanded-project"]) + (props.hidden ? modualiseClassNames(["hidden-project"]) : "") + (props.containerClasses == null ? "" : modualiseClassNames(props.containerClasses))}>
            <div className={modualiseClassNames(["top", "expanded-project-top"])}>
                <button className={styles["back_button"]}
                    onClick={e => { e.stopPropagation(); closeFunction() }}
                >
                    <p>X</p>
                    {/* <img className="close-button" src={back_white} alt="close window icon" /> */}
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
                <img src={img} alt="a screencap from the interavtive social media map showing various vidoes dotted around the UK with a video in Henley spotlighted" />
                <div className="">
                <p>My client, @robcolfer, has made hundreds of social media videos by now. They're great but it's really hard to search through them all to rewatch gems or discover new places he's interviewed.</p>
                <p>In pursuit of a more intuitive way to navigate the voices and personalities Rob spotlights, I'm working on an interactive map. All his videos. All in one place.</p>
                <a href="https://jeremycolfer27.github.io/rob-website/" target="_blank">You can check out the prototype map here</a>
                </div>
            </div>
        </div>
    );
}

export default { title, tags, img, imgAltText, TemplatePage, hiddenClassName };