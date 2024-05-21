import React from 'react';
import { useState } from 'react';
import styles from './pubsOnTap.module.css';
import img from './assets_pot/pot_header.jpg'
import potGradient1 from './assets_pot/pot_gradient1.jpg';
import logoHeader from './assets_pot/logo_header.png';
import landing from './assets_pot/landing.jpg';
import pints from './assets_pot/pints.jpg';
import profileImg from './assets_pot/profile-circle.png';
import starIcon from './assets_pot/starIcon.svg';
import leaderboardIcon from './assets_pot/leaderboardIcon.svg';
import usersIcon from './assets_pot/newProfileIcon.svg';
import home from './assets_pot/Home.png';
import leaderboard from './assets_pot/Leaderboard.png';
import pcp from './assets_pot/Pub Crawl Planner.png';
import whatsOn from './assets_pot/Whats on Filters.png';
import review from './assets_pot/review.png';
import profile from './assets_pot/profile.png';
import back_white from '../../assets/back_white.png';
import close from '../../assets/close_white.png';

const title = "Pubs on Tap"
const imgAltText = "Pubs on Tap"
const tags = ["Entrepreneurship", "Leadership", "UX"]
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
                    <img className="close-button" src={back_white} alt="close window icon" />
                </button>

                <div className={styles["tags"]}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles["tag"]}>{tag}</span>
                    ))}
                </div>

                <button className={styles["close_button"]}
                    onClick={e => { e.stopPropagation(); closeFunction() }}
                >
                    <img className="close-button" src={close} alt="close window icon" />
                </button>
            </div>

            <div className={styles["expanded-project-body"]}>
                    
                
                <div className={styles["header_logo"]}>
                    <img src={potGradient1}></img>
                    <img src={logoHeader} alt="Pubs on Tap"></img>
                </div>
                <div className={styles["header_image"]}>
                    <img src={landing}></img>
                </div>
                <div className={styles["intro"]}>
                    <p>An engaging app designed to boost local pub discovery and patronage, featuring personalised pub recommendations, social pub crawl planning, and interactive leaderboards. It's a digital tool created to support and reinvigorate the UK's local pub scene.</p>
                </div>
                <div className={styles["second_image"]}>
                    <img src={pints} alt="Friends raising their beer glasses in a toast at a pub"></img>
                </div>
                <div className={styles["description"]}>
                    <p>Co-founded by my brother and I in 2020, Pubs on Tap was founded with the mission of levelling the playing field for local pubs, providing them with the kind of exposure typically enjoyed by larger chains.</p>
                    <br></br>
                    <p>Using my computer science and user experience expertise I led the development and design of Pubs on Tap. Starting with extensive, creative lockdown based user and pub research, to guiding a development team to make Pubs on Tap come to life.</p>
                    <br></br>
                    <p>What started as a simple idea quickly grew into a complex app. Through are agile management we we able to release Pubs on Tap in the summer of 2021.</p>
                </div>

                <div className={styles.accomplishments}>
                    <div className={styles.accomplishment}>
                        <img src={starIcon} alt="5 Star rating on App Store" className={styles.icon}/>
                        <p>5 Star rating on App Store</p>
                    </div>
                    <div className={styles.accomplishment}>
                        <img src={leaderboardIcon} alt="Peaked at 123rd Spot on App Store" className={styles.icon}/>
                        <p>Peaked at 123<sup>rd</sup> Spot on App Store</p>
                    </div>
                    <div className={styles.accomplishment}>
                        <img src={usersIcon} alt="Over 600 Active Users" className={styles.icon}/>
                        <p>Over 600 Active Users</p>
                    </div>
                </div>

                 <div className={styles["reviews"]}>
                    <h2>App Store Reviews</h2>
                    <div className={styles.singleReview}>
                        <img src={profileImg} alt="Profile" />
                        <div className={styles.reviewContent}>
                            <div className={styles.reviewText}>
                                Great App! So useful for students!
                            </div>
                            <div className={styles.reviewStars}>
                                ★★★★★
                            </div>
                        </div>
                        <div className={styles.reviewDetails}>
                            <div>By dx1sy7</div>
                            <div>Sep 22, 2022</div>
                        </div>
                    </div>
                    <div className={styles.singleReview}>
                        <img src={profileImg} alt="Profile" />
                        <div className={styles.reviewContent}>
                            <div className={styles.reviewText}>
                                Great app for finding new pubs!
                            </div>
                            <div className={styles.reviewStars}>
                                ★★★★★
                            </div>
                        </div>
                        <div className={styles.reviewDetails}>
                            <div>By hoody462</div>
                            <div>Jul 23, 2021</div>
                        </div>
                    </div>
                </div>

                

                <div className={styles.schematics}>
                 <img src={home} alt="A screenshot of Pubs on Tap's home screen"/>
                 <img src={leaderboard} alt="A screenshot of Pubs on Tap's leaderboard page"/>
                 <img src={whatsOn} alt="A screenshot of Pubs on Tap's What's On page"/>
                 <img src={pcp} alt="A screenshot of Pubs on Tap's Pub Crawl Planner feature"/>
                 <img src={review} alt="A screenshot of Pubs on Tap's reviewing system"/>
                 <img src={profile} alt="A screenshot of Pubs on Tap's profile page"/>
                </div>

                <div className={styles.extraInfo}>
                    For more information visit <a href="http://www.pubsontap.com" target="_blank" rel="noopener noreferrer">www.pubsontap.com</a>
                </div>

                
            </div>
        </div>
    );
}

export default { title, tags, img, imgAltText, TemplatePage, hiddenClassName };