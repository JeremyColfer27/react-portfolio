import React from 'react';
import { useState } from 'react';

import styles from './pubsOnTap.module.css';
// import img from '../images/dronecloud-image.png'
import img from './assets_pot/pot_header.jpg'
import header_img from './assets_pot/pot_header.jpg'
import back from '../../assets/back.png';
const title = "Pubs on Tap"
const imgAltText = "Pubs on Tap"
const tags = ["Entrepreneurship", "Leadership", "UX"]
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
        <div className={modualiseClassNames(["expandedProject"])+(props.hidden ? modualiseClassNames(["hidden-project"]) : "")+(props.containerClasses == null ? "" : modualiseClassNames(props.containerClasses))}>
            {/* <div className="top expanded-project-top"> */}
            <div className={modualiseClassNames(["top", "expanded-project-top"])}>
                <button className={modualiseClassNames(['projects-close-button',"expanded-project-close-button"])}
                  onClick={e => {e.stopPropagation();closeFunction()}}
                  >
                    <img className="close-button" src={back} alt="close window icon" />
                </button>
            </div>

            <div className={styles["expanded-project-body"]}>
                <div className={styles["debug-item"]}>Item 1</div>
                <div className={styles["debug-item"]}>Item 2</div>
                <div className={styles["debug-item"]}>Item 3</div>
                <div className={styles["debug-item"]}>Item 4</div>

                

            </div>
        </div>
    )


}

export default {title, tags, img, imgAltText, TemplatePage, hiddenClassName};