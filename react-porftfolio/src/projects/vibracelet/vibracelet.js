import React from 'react';
import { useState } from 'react';
import styles from './vibracelet.module.css';
import img from './assets/finalphoto.jpg';
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';

const title = "Vibracelet";
const imgAltText = "Vibracelet";
const tags = ["Venture Creation", "Ideation", "Sprint"];
const hiddenClassName = styles["expanded-project-hidden"];

function TemplatePage(props) {
    const [hidden, toggleHidden] = useState(props.hidden);

    const modualiseClassNames = function (classNames) {
        let str = "";
        for (let i = 0; i < classNames.length; i++) {
            str += styles[classNames[i]];
            str += " ";
        }
        return str;
    };

    const closeFunction = props.closeFunction;

    return (
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
                    onClick={() => document.getElementById("projects-page").classList.toggle("hidden")}
                >
                    <img className="close-button" src={close} alt="close window icon" />
                </button>
            </div>

            <div className={styles["expanded-project-body"]}>
                
            <div class="slider">
            <section>
                <h1>Section One</h1>
            </section>
            <section>
                <h1>Section Two</h1>
            </section>
            <section>
                <h1>Section Three</h1>
            </section>
            <section>
                <h1>Section Four</h1>
            </section>
            <section>
                <h1>Section Five</h1>
            </section>
        </div>


            </div>
        </div>
    );
}

export default { title, tags, img, imgAltText, TemplatePage, hiddenClassName };
