import React from 'react';
import { useState, useEffect } from 'react';
import styles from './vibracelet.module.css';
import img from './assets/finalphoto.jpg';
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';
import vibraceleticon from './assets/vibracelet_icon.svg';
import arrow from './assets/Arrow 1.png';
import museum from "./assets/museum.jpeg";
import demoday from './assets/demoday.jpeg';
import insideVibracelet from './assets/insidefinalproto.jpg';
import proto1 from './assets/1stproto.jpg';
import proto2 from './assets/3rdproto.jpg';
import userEvaluation from './assets/userEvaluation.jpg';
import paperPDF from './assets/Vibracelet_TeamE_2024.pdf';

const title = "Vibracelet";
const imgAltText = "Vibracelet";
const tags = ["Hardware", "UX", "Interaction Design"];
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
const alphabet =  {
    "a": [1, 0, 0, 0, 0, 0],
    "b": [1, 1, 0, 0, 0, 0],
    "c": [1, 0, 0, 1, 0, 0],
    "d": [1, 0, 0, 1, 1, 0],
    "e": [1, 0, 0, 0, 1, 0],
    "f": [1, 1, 0, 1, 0, 0],
    "g": [1, 1, 0, 1, 1, 0],
    "h": [1, 1, 0, 0, 1, 0],
    "i": [0, 1, 0, 1, 0, 0],
    "j": [0, 1, 0, 1, 1, 0],
    "k": [1, 0, 1, 0, 0, 0],
    "l": [1, 1, 1, 0, 0, 0],
    "m": [1, 0, 1, 1, 0, 0],
    "n": [1, 0, 1, 1, 1, 0],
    "o": [1, 0, 1, 0, 1, 0],
    "p": [1, 1, 1, 1, 0, 0],
    "q": [1, 1, 1, 1, 1, 0],
    "r": [1, 1, 1, 0, 1, 0],
    "s": [0, 1, 1, 1, 0, 0],
    "t": [0, 1, 1, 1, 1, 0],
    "u": [1, 0, 1, 0, 0, 1],
    "v": [1, 1, 1, 0, 0, 1],
    "w": [0, 1, 0, 1, 1, 1],
    "x": [1, 0, 1, 1, 0, 1],
    "y": [1, 0, 1, 1, 1, 1],
    "z": [1, 0, 1, 0, 1, 1],
    ".": [0, 0, 0, 0, 0, 1],
    "motor1": [1, 0, 0, 0, 0, 0],
    "motor2": [0, 1, 0, 0, 0, 0],
    "motor3": [0, 0, 1, 0, 0, 0],
    "motor4": [0, 0, 0, 1, 0, 0],
    "motor5": [0, 0, 0, 0, 1, 0],
    "motor6": [0, 0, 0, 0, 0, 1]
  }

  const motors = [];
  const isBuzzing = [false, false, false, false, false, false];
  for(let i = 1; i <= 6 ; i++){
    motors.push(document.getElementById(`dot${i}`));
  }
  const textBufferInput = document.getElementById("textBufferInput");

const delay = async function(time){
    await new Promise(r => setTimeout(r, time));
}

const activateMotor = async function (motorIndex, delayTime){
    setMotorsBuzzing(motorsBuzzing.map( (m, index) => {
        if(index == motorIndex){
            return true;
        }
        else return m;
    } ))

    return await delay(delayTime);
  }

  const deactivateMotor = async function (motorIndex, delayTime){
    setMotorsBuzzing(motorsBuzzing.map( (m, index) => {
        if(index == motorIndex){
            return false;
        }
        else return m;
    } ))

    return await delay(delayTime);
  }

  const activateMotors = async function(motorIndexes, delayTime){
    setMotorsBuzzing(motorsBuzzing.map( (m, index) => {
        if(motorIndexes.includes(index)){
            return true;
        }
        else return m;
    } ))

    return await delay(delayTime);
  }

  const deactivateMotors = async function(motorIndexes, delayTime){
    setMotorsBuzzing(motorsBuzzing.map( (m, index) => {
        if(motorIndexes.includes(index)){
            return false;
        }
        else return m;
    } ))

    return await delay(delayTime);
  }

  const initialiseDisplayLetters = function(letters){
    const newDisplayLetters = [];
    for(let i = 0; i < letters.length; i++){
        newDisplayLetters.push({
            "character": letters[i],
            "isWritten": false,
            "isWriting": false
        })
    }
    setDisplayLetters(newDisplayLetters);
    currentDisplayLetters = newDisplayLetters;
    // setForceRender(prev => prev + 1);
  }

  const  updateDisplayLetter = function (index, isWritten, isWriting){
    const updatedDisplayLetters = JSON.parse(JSON.stringify(currentDisplayLetters));
    if(index >= 0 && index < updatedDisplayLetters.length){
        updatedDisplayLetters[index].isWritten = isWritten;
        updatedDisplayLetters[index].isWriting = isWriting;
        setDisplayLetters(updatedDisplayLetters);
        currentDisplayLetters = updatedDisplayLetters;
    }
    // setForceRender(prev => prev + 1);
  }

  const handlePlayLetters = async function(){
    const letters = textBufferInput.value.toLowerCase() || "";
    
    // window.alert(`playing letters ${letters}`);
    initialiseDisplayLetters(letters);

    for(let i = 0; i < letters.length; i++){
        const toBeActivated = [];
        updateDisplayLetter(i, false, true)
        if(alphabet[letters[i]]){
            for(let j = 0; j < 6; j++){
                if(alphabet[letters[i]][j] == 1 ){
                    toBeActivated.push(j);
                    // motors[j].classList.add({styles.isBuzzing});
                    // window.alert("Awaiting next one");
                    console.log(`motor: ${motors[j].classList}`);
                    // motors[j].classList.add("dotTesting");
                    // isBuzzing[j] = true;
                    await activateMotor(j, 500);
                    await deactivateMotor(j, 200);
    
                    console.log(`motor: ${motors[j].classList}`);
    
                }
            }
    
            await activateMotors(toBeActivated, 500);
            await deactivateMotors(toBeActivated, 500)
        }


        updateDisplayLetter(i, true, false)

    }
  }

    const scrollToPage = function(id) {
        var currentPage = parseInt(id);
        setCurrentSection(currentPage);
        var myElement = document.getElementById(`vibracelet-section-${currentPage}`);
        var topPos = myElement.offsetTop;
        document.getElementById('vibracelet-slider').scrollTo({
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
                
        <div id="vibracelet-slider" className={styles["slider"]}>

        <section id="vibracelet-section-1">
            <div className={styles["progress-dots"]}>
                        <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                        <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                        <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>
            </div>
            <div className={styles.firstContainer}>
                <div className={styles.topLine}>               
                    <div className={styles.title + " " + (isVibrating ? styles.buzz : "")}>Vibracelet</div>
                    <img className={styles["vibracelet-icon"]} src={vibraceleticon} alt="Graphic Icon of Vibracelet" />
                </div>
                <div className={styles.subHeading}>
                    A wearable that uses vibrations to discreetly communicate with its wearer.
                </div>
                {/* <div className={styles.paperLink}>
                    <button 
                        onClick={() => window.open(paperPDF, '_blank')}
                        className={styles.paperLinkButton}
                    >
                        An ACM Research Paper
                    </button>
                </div> */}
                    
       
                <a onClick={() => scrollToPage(2)} className={styles.arrowWrapper}>
                    <img src={arrow} alt="Arrow" />
                </a>
            </div>
        </section>

            <section id="vibracelet-section-3">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>
            </div>
            <div className={styles.earlyPrototypesContainer}>
            <div className={styles.researchBox}>
            <h2 className={styles.researchHeading}>Initial Exploration</h2>
                <p className={styles.researchText}>
                    To explore exciting ways to design an exciting interaction, we our team visited museums and gathered suggestions from student and staff audience to produce a large volume of potential ideas. We converged on using vibrations or haptic feedback to provide an experience beyond sight and sound.
                </p>
            <h2 className={styles.researchHeading}>Academic Research</h2>
                <p className={styles.researchText}>
                    ViBracelet, designed for potential ACM publication, relied on rigorous research. We combined an in-depth review of haptic communication literature with primary research to gather user insights on preferred form factors and use cases, ensuring a user-centered design.
                </p>
            </div>
                <div className={styles.earlyPrototypesBox}>
                    <h4 className={styles.prototypeSubheading}>Hardware Prototypes</h4>
                    <div className={styles.prototypeColumns}>
                        <img src={proto1} alt="Early prototype version" className={styles.prototypeColumnImage} />
                        <div className={styles.prototypeColumnText}>
                        <h3>The Spider</h3>
                        <p >
                            Every project begins with a rough prototype, and ViBracelet was no exception. The initial design featured 3D-printed nodes housing haptic motors, loosely secured with elastic loops, and connected to an Arduino via a tangle of spider-like cables—giving it an unintentionally creature-like appearance.
                        </p>
                        </div>
                        {/* <p className={styles.prototypeColumnText}>
                            Every project begins with a rough prototype, and ViBracelet was no exception. The initial design featured 3D-printed nodes housing haptic motors, loosely secured with elastic loops, and connected to an Arduino via a tangle of spider-like cables—giving it an unintentionally creature-like appearance.
                        </p> */}
                        <div className={styles.prototypeColumnText}>
                            <h3>The Bomb?</h3>
                            <p>
                            Subsequent prototypes improved usability by distributing vibrations across both wrists, mimicking Braille's two-column layout. This approach not only reduced the cognitive load on a single wrist but also enhanced the design's simplicity, durability, and ease of repair.
                            </p>
                        </div>

                        <img src={proto2} alt="Improved prototype version" className={styles.prototypeColumnImage} />
                    </div>
                </div>
                

            </div>
        </section>


        <section id="vibracelet-section-2">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"] }></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"]}></div>                
            </div>
            <div className={styles.secondContainer}>

                <div className={styles.demoContainer}>
                    <h2>Demo</h2>
                    <div className={styles.wristsContainer}>

                    <div className={`${styles.leftWrist} ${styles.wristContainer}`}>
                        <div id="dot1" className={`${styles.leftDot1} ${styles.demoDot} ${(motorsBuzzing[0] ? styles.dotTesting : "")}`}></div>
                        <div id="dot2" className={`${styles.leftDot2} ${styles.demoDot} ${(motorsBuzzing[1] ? styles.dotTesting : "")}`}></div>
                        <div id="dot3" className={`${styles.leftDot3} ${styles.demoDot} ${(motorsBuzzing[2] ? styles.dotTesting : "")}`}></div>
                        <img className={styles["vibracelet-demo-icon"]} src={vibraceleticon} alt="Graphic Icon of Vibracelet" />
                        <p>L</p>
                    </div>
                    <div className={`${styles.rightWrist} ${styles.wristContainer}`}>
                        <div id="dot4" className={`${styles.rightDot1} ${styles.demoDot} ${(motorsBuzzing[3] ? styles.dotTesting : "")}`}></div>
                        <div id="dot5" className={`${styles.rightDot2} ${styles.demoDot} ${(motorsBuzzing[4] ? styles.dotTesting : "")}`}></div>
                        <div id="dot6" className={`${styles.rightDot3} ${styles.demoDot} ${(motorsBuzzing[5] ? styles.dotTesting : "")}`}></div>
                        <img className={styles["vibracelet-demo-icon"]} src={vibraceleticon} alt="Graphic Icon of Vibracelet" />
                        <p>R</p>
                    </div>

                    </div>

                    <div className={styles.wordDisplay}>
                                                   
                        {displayLetters.map( (l, i) => {
                            console.log("Letter JSON", l);
                            console.log(displayLetters);
                           return (<span key={`letter ${i}`}className={`${styles.displayLetter} ${l.isWritten ? styles.written : styles.unwritten} ${l.isWriting ? styles.writing : ""}`}>{l.character}</span>)
                        })}
                        
                    </div>

                    <div className={styles.demoControls}>
                        <input id="textBufferInput" autoComplete="off" className={styles.textBufferInput} type="text" />
                        <button className = {styles.sendLettersButton} onClick={() => handlePlayLetters()}>Send to Bracelet</button>
                    </div>


                </div>

                {/* <img 
                    src={museum} 
                    alt="A visitor experiencing art at the Victoria & Albert Museum while wearing Vibracelet devices on both wrists, demonstrating the device in a real-world cultural setting" 
                    className={styles.topLeftImage}
                />
                <div className={styles.topRightText}>
                    <h2>Exec Summary</h2>
                    <p>TO CHANGE: Testing Vibracelet in real-world scenarios helped us understand how people interact with haptic feedback in cultural spaces. The Victoria & Albert Museum provided an ideal environment to observe how users naturally adapted to receiving information through subtle vibrations.</p>
                </div>
                <div className={styles.bottomLeftText}>
                    <h2>Problem Statement</h2>
                    <p>How can a <strong>dual-bracelet wearable device</strong> using <strong>vibrotactile feedback</strong> enhance <strong>visitor engagement</strong> in <strong>museums</strong> by <strong>discreetly delivering information</strong> without relying on <strong>audio or visual channels</strong>?</p>
                </div>
                <img 
                    src={demoday}
                    alt="A researcher demonstrating Vibracelet's custom software interface during a demo day, showing how text messages are converted into vibration patterns for the wearable devices" 
                    className={styles.bottomRightImage}
                /> */}
            </div>
                

                




        </section>


        <section id="vibracelet-section-4">
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
                            {/* <p>Evaluated by 14 participants through multiple-choice tests designed to measure their ability to correctly identify characters transmitted to Vibracelet. The study achieved an average accuracy rate of 85.7%, with expert users achieving up to 98.3% accuracy.</p> */}
                            <p>Participants praised its comfort and discreetness, though challenges such as the distinguishability of certain patterns and external vibration interference were noted. NASA TLX surveys indicated low physical demand and frustration, with some mental fatigue reported, highlighting opportunities for refinement in future iterations.</p>
                        </div>
                    </div>
                    <div className={styles.evaluationRight}>
                        <img 
                            src={userEvaluation} 
                            alt="User evaluation session" 
                            className={styles.evaluationImage}
                        />
                    </div>
                </div>
                {/* <div className={styles.prototypeBox}>
                    <div className={styles.prototypeContent}> */}
                        {/* <div className={styles.prototypeLeft}>
                            <h2 className={styles.prototypeHeading}>Prototyping</h2>
                            <h4 className={styles.prototypeSubheading}>Final Design</h4>
                            <ul className={styles.prototypeList}>
                                <li><strong>User-Centred Hardware Design</strong>: Dual elastic bracelets with integrated vibration motors provide a comfortable, adjustable fit and deliver precise haptic feedback inspired by Braille and Morse Code.</li>
                                <li><strong>Advanced Control System</strong>: Powered by an Arduino Micro, the device supports customisable vibration patterns and ensures consistent motor calibration.</li>
                                <li><strong>Interactive Software Interface</strong>: A web-based GUI enables pattern input, custom design creation, learning modes, and detailed performance tracking.</li>
                            </ul>
                        </div> */}
                        {/* <div className={styles.prototypeImages}>
                            <img src={img} alt="First prototype image" className={styles.prototypeImage1} />
                            <img src={insideVibracelet} alt="Second prototype image" className={styles.prototypeImage2} />
                        </div> */}
                    {/* </div>
                </div> */}
            </div>
        </section>
            <section id="vibracelet-section-5">
            <div className={styles["progress-dots"]}>
                <div onClick={() => scrollToPage(1)} className={styles["progress-dot-1"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(2)} className={styles["progress-dot-2"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(3)} className={styles["progress-dot-3"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(4)} className={styles["progress-dot-4"] + " " + styles["progress-dot"]}></div>
                <div onClick={() => scrollToPage(5)} className={styles["progress-dot-5"] + " " + styles["progress-dot"] + " " + styles["current"]}></div>
            </div>
            <div className={styles.reflectionContainer}>
                <div className={styles.reflectionLeft}>
                    <h2 className={styles.reflectionHeading}>Reflections</h2>
                    <div className={styles.reflectionText}>
                        <p>Overall project transformed my approach to interaction design, empowering me to think beyond traditional means of conveying information. Below are the key triumphs of our device and approach, and some emergent avenues for further exploration:</p>
                        <ul className={styles.reflectionList}>
                            <li><strong>Innovative Design:</strong> The ViBracelet project explored vibrotactile communication through a dual-bracelet device, pushing the boundaries of discreet, non-verbal interaction.</li>
                            <li><strong>User-Centred Innovation:</strong> User feedback on comfort, intuitiveness, and pattern recognition directly informed design improvements, highlighting the importance of usability in real-world contexts.</li>
                            <li><strong>Iterative Prototyping:</strong> Each prototype revealed key insights, from enhancing vibration distinguishability to improving comfort and durability, demonstrating the value of iterative refinement.</li>
                            <li><strong>Challenges and Lessons:</strong> High accuracy rates were achieved, but challenges like external vibrations and mental fatigue emphasised areas for further refinement and real-world adaptability.</li>
                            <li><strong>Future Potential:</strong> The project showcased the promise of wearable technology and vibrotactile feedback for niche use cases and as an artifact for discussing effective multi-sensory learning strategies.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.reflectionRight}>
                    <h2 className={styles.reflectionHeading}>Full Scientific Paper</h2>
                    <button 
                        onClick={() => window.open(paperPDF, '_blank')}
                        className={styles.openPdfButton}
                    >
                        Open Full Paper in New Tab
                    </button>
                    <div className={styles.pdfContainer}>
                        <iframe 
                            src={`${paperPDF}#view=FitH&zoom=100&toolbar=0&navpanes=0`}
                            className={styles.pdfEmbed}
                            title="Vibracelet Research Paper"
                            type="application/pdf"
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>


            </div>
        </div>
    );
}

export default { title, tags, img, imgAltText, TemplatePage, hiddenClassName };
