import React from 'react';


import './generic-project.css'
import img from './images/dronecloud-image.png'
const title = "Generic Title"
const imgAltText = "Generic project image"
const tags = ["Client", "UX", "Team", "Figma"]

function TemplatePage(props){
    const closeFunction = props.closeFunction
    return(
        <div className='expanded-project'>
            <div className="top expanded-project-top">
                <button className='projects-close-button expanded-project-close-button'
                  onClick={e => {e.stopPropagation();closeFunction()}}
                  >
                    {"X"}
                </button>
            </div>

            <div className="expanded-project-body">

                <div className="project-headline">
                    <h1 className="project.title">Project title</h1>
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