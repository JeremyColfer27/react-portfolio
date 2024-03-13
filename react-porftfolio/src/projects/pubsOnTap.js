import React from 'react';


import styles from './pubsOnTap.module.css';
import img from './images/dronecloud-image.png'
import back from '../assets/back.png';
const title = "Pubs on Tap"
const imgAltText = "Pubs on Tap"
const tags = ["Entrepreneurship", "Leadership", "UX"]

function TemplatePage(props){
    const closeFunction = props.closeFunction
    return(
        <div className={styles.expandedProject}>
            <div className="top expanded-project-top">
                <button className='projects-close-button expanded-project-close-button'
                  onClick={e => {e.stopPropagation();document.getElementById(closeFunction.id)
                                         .classList.toggle(closeFunction.classToToggle)}}
                  >
                    <img className="close-button" src={back} alt="close window icon" />
                </button>
            </div>

            <div className="expanded-project-body">

                <div className="project-headline">
                    <h1 className="project.title">Pubs on Tap</h1>
                    {/* <img src="./logo192.png" alt="project image" />   */}
                    <img src={img} height="9px" width="16px" alt="" />
                </div>

                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit repellat voluptatibus. Corporis accusantium perferendis id, laudantium illo cupiditate cum esse aperiam, dolore non molestias accusamus veritatis. Voluptate soluta alias cumque veniam quo natus, in eum deserunt eius enim minus quibusdam recusandae neque, adipisci harum impedit illum distinctio commodi dolore! Commodi iste ex dolorum porro libero, nesciunt quo cumque ut!</p>

                <div className="project-main-content">
                <div className="project-section">
                    <h2>Project section 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil aut eos quaerat sed deserunt molestiae alias tenetur obcaecati temporibus voluptates officiis id, ipsa eveniet sint odit enim earum molestias, eaque porro, saepe reprehenderit quibusdam quae. Doloremque asperiores repellendus corrupti.</p>
                </div>
                <div className="project-section">
                    <h2>Project section 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil aut eos quaerat sed deserunt molestiae alias tenetur obcaecati temporibus voluptates officiis id, ipsa eveniet sint odit enim earum molestias, eaque porro, saepe reprehenderit quibusdam quae. Doloremque asperiores repellendus corrupti.</p>
                </div>
                <div className="project-section">
                    <h2>Project section 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil aut eos quaerat sed deserunt molestiae alias tenetur obcaecati temporibus voluptates officiis id, ipsa eveniet sint odit enim earum molestias, eaque porro, saepe reprehenderit quibusdam quae. Doloremque asperiores repellendus corrupti.</p>
                </div>
                </div>

            </div>
        </div>
    )


}

export default {title, tags, img, imgAltText, TemplatePage};