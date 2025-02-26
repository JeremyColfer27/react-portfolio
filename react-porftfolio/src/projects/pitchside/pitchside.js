import React from 'react';
import { useState, useEffect } from 'react';
import styles from './pitchside.module.css';
import img from './assets/football-activity.jpg';
import veo from './assets/veo.jpg';
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';
import humanTest from './assets/human-test.png'
import prototype from './assets/pitchside-prototyping.png'
import onePager from './assets/one-pager.png'
import pitching from './assets/pitching.png'



const title = "Pitchside";
const imgAltText = "Pitchside";
const tags = ["Start-Up", "User-Centred Design"];
const subtitle = "My first startup..."

const hiddenClassName = styles["expanded-project-hidden"];

function TemplatePage(props) {
    const [hidden, toggleHidden] = useState(props.hidden);
    const [currentSection, setCurrentSection] = useState(1);
    const [isVibrating, setIsVibrating] = useState(false);
    const [motorsBuzzing, setMotorsBuzzing] = useState([false, false, false, false, false, false, false]);
    const [displayLetters, setDisplayLetters] = useState([{"character": "-", "isWritten": true, "isWriting": false}]);
    const [forceRender, setForceRender] = useState(0); // Dummy state

    let currentDisplayLetters = displayLetters;

    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toLowerCase() === 'v') {
                setIsVibrating(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    // useEffect(() => {
    //     console.log("hi");
    // }, [displayLetters])

    //maps a symbol to a motor activation configuration

    const scrollToPage = function(id) {
        var currentPage = parseInt(id);
        setCurrentSection(currentPage);
        var myElement = document.getElementById(`pitchside-section-${currentPage}`);
        var topPos = myElement.offsetTop;
        document.getElementById('pitchside-slider').scrollTo({
            top: topPos,
            behavior: 'smooth'
        });
    }

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
                
        <div id="pitchside-slider" className={styles["slider"]}>

        <section id="pitchside-section-1">
            <div className={styles["progress-dots"]}>
                        <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                        <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>
            </div>
            <div className={styles.introContainer}>
                <h1>PITCHSIDE</h1>
                <div className={styles.introContext}>
                    
                <div className={styles.infoContainer}>
                    
                </div>


                <div className={styles.textBlock}>
                <h2>Problem</h2>
                <p>Grassroots sports players miss out on recording their best moments because manual methods are inconvenient and automated solutions are too expensive.</p>
                
                </div>
                
                < div className={styles.textBlock}>
                <h2>Our Project</h2>
                <p>Our team is investigating potential alternatives to empower grassroots athletes to record and share their gameplay. This is a perfect opportunity for me to push my design and technical skills in pursuit of building commercially viable products.</p>
                </div>
                </div>

                <div className={styles.introImage}>
                    <img src={img} alt="" />
                </div>

                <div className={styles.introImage}>
                    <img src={veo} alt="" />
                </div>
                {/* < div className={`${styles.handheld} ${styles.product}`}>
                    <h2>Manual Handheld Recording</h2>
                    <img src={veo} alt="" />
                    <div className="productDescription">

                        <p className={styles.priceTag}>Free</p>
                        <ul className={styles.featureList}>
                            <li>Inconsistent quality of footage</li>
                            <li>Requires continuous human attention</li>
                            <li>"my hands are really cold"</li>
                        </ul>

                    </div>

                </div>

                < div className={`${styles.veo} ${styles.product}`}>
                    <h2>Automated Recorder (Veo)</h2>
                    <img src={veo} alt="" />
                    <div className="productDescription">

                        <ul className={styles.featureList}>
                            <li><strong>£1100 (+£400 per year)</strong></li>
                            <li>High quality of footage</li>
                            <li>Minimal human input</li>
                            <li>inaccessible pricing model</li>
                        </ul>

                    </div>

                </div> */}





                {/* <div className={styles.introImage}>
                    <img src={veo} alt="" />
                </div> */}


                {/* <div className={styles.paperLink}>
                    <button 
                        onClick={() => window.open(paperPDF, '_blank')}
                        className={styles.paperLinkButton}
                    >
                        An ACM Research Paper
                    </button>
                </div> */}
                    
       
                {/* <a onClick={() => scrollToPage(2)} className={styles.arrowWrapper}>
                    <img src={arrow} alt="Arrow" />
                </a> */}
            </div>
        </section>


        <section id="pitchside-section-3">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>
            </div>
                
            <div className={styles.pitchsideContainerUser}>
            <h1>User-Centred Design & Development Skills</h1>

                    <div className={styles.images}>
                    <div className={styles.imageBox}>
                        <img src={humanTest} alt="" />
                        <h2>Customer Research Design</h2>
                        <p>To go beyond desk research, we've been working hard on creating realistic sports scenarios to understand the decision-making process behind recording gameplay, and to test the feasibility of possible solutions.</p>
                    </div>

                    <div className={styles.imageBox}>
                        <img src={prototype} alt="" />
                        <h2>Prototyping Software and Hardware</h2>
                        <p>Pictured above is a promising prototype which aims to support automated recording from a smartphone at a fraction of the price of current automated recording solutions. </p>
                    </div>

                    </div>



            </div>


        </section>

        <section id="pitchside-section-2">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"] }></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>                
            </div>

            <div className={styles.pitchsideContainer2}>
            <h1>Communication Skills</h1>

                    <div className={styles.images}>
                    <div className={styles.imageBox}>
                        <img src={pitching} alt="" />
                        <h2>Public Speaking</h2>
                        <p>Here I am venturing well beyond my comfort zone pitching at the 2024 Oxbridge AI start-up competition finals. (I survived, and we nearly won some funding)</p>
                    </div>

                    <div className={styles.imageBox}>
                        <img src={onePager} alt="" />
                        <h2>Written Communication</h2>
                        <p>This is an A4 submission to the Peggy & Wilkinson Fund that won secured us £3200 of grant funding.</p>
                    </div>

                    </div>



            </div>
        </section>








        <section id="pitchside-section-4">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>
            </div>
            <div className={styles.researchContainer}>
            <div className={styles.evaluationSection}>
                    <div className={styles.evaluationLeft}>
                        <h2 className={styles.evaluationHeading}>User Testing</h2>
                        <div className={styles.evaluationText}>
                            <p></p>
                            {/* <p>Evaluated by 14 participants through multiple-choice tests designed to measure their ability to correctly identify characters transmitted to Vibracelet. The study achieved an average accuracy rate of 85.7%, with expert users achieving up to 98.3% accuracy.</p>
                            <p>Participants praised its comfort and discreetness, though challenges such as the distinguishability of certain patterns and external vibration interference were noted. NASA TLX surveys indicated low physical demand and frustration, with some mental fatigue reported, highlighting opportunities for refinement in future iterations.</p> */}
                        </div>
                    </div>
                    <div className={styles.evaluationRight}>
                        <img 
                            src={img} 
                            alt="User evaluation session" 
                            className={styles.evaluationImage}
                        />
                    </div>
                </div>
                <div className={styles.prototypeBox}>
                    <div className={styles.prototypeContent}>
                        <div className={styles.prototypeLeft}>
                            <h2 className={styles.prototypeHeading}>Prototyping</h2>
                            <h4 className={styles.prototypeSubheading}>Final Design</h4>
                            <ul className={styles.prototypeList}>
                                <li><strong>User-Centred Hardware Design</strong>: Dual elastic bracelets with integrated vibration motors provide a comfortable, adjustable fit and deliver precise haptic feedback inspired by Braille.</li>
                                <li><strong>Advanced Control System</strong>: Powered by an Arduino Micro, the device supports customisable vibration patterns and ensures consistent motor calibration.</li>
                                <li><strong>Interactive Software Interface</strong>: A web-based GUI enables pattern input, custom design creation, learning modes, and detailed performance tracking.</li>
                            </ul>
                        </div>
                        <div className={styles.prototypeImages}>
                            <img src={img} alt="First prototype image" className={styles.prototypeImage1} />
                            <img src={img} alt="Second prototype image" className={styles.prototypeImage2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section id="pitchside-section-5">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
            </div>
            <div className={styles.reflectionContainer}>
            </div>
        </section>
        </div>


            </div>
        </div>
    );
}

export default { title, tags, subtitle, img, imgAltText, TemplatePage, hiddenClassName };
