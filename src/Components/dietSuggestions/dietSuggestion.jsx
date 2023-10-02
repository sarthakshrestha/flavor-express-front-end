import React, { useState } from 'react';
import Header from '../../sharedComponents/header/Header';
import Footer from '../../sharedComponents/footer/Footer';
import logoImage from '../../sharedComponents/footer/Logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dietSuggestion.css';
import icon from './img.png';
import icon2 from "./zzz.png";

export default function DietSuggestion() {
    const [showContent, setShowContent] = useState(false);
    const [showHealthyChoices, setShowHealthyChoices] = useState(false);

    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    const handleHealthyChoicesClick = () => {
        setShowHealthyChoices(!showHealthyChoices);
    };

    return (
        <>
            <Header />
            <div className="suggestion-container">
                <div className="content-container">
                    <h1 className="title">Diet Advice</h1>
                    <div className="box">
                        <p className="text">
              <span>
                <h1 className="textContainer">
                   {''}We bring your wanted diet needs<br /> to your desired location
                </h1>
                <img src={icon} alt="diet" className="image-icon" />
              </span>
                        </p>
                    </div>
                    <div className="box why-important-box">
                        <div className="box-content-wrapper">
                            <h2 className="box-title">Why Is It Important?</h2>
                            {showContent ? (
                                <p className="box-content">
                                    Nutritious food plays a vital role in maintaining good health and overall well-being. It provides essential nutrients, vitamins, and minerals that are necessary for the proper functioning of the body. A balanced diet can help prevent chronic diseases, boost the immune system, improve energy levels, and support healthy growth and development. By consuming nutritious food, you can enhance your physical and mental performance, maintain a healthy weight, and reduce the risk of various health conditions.
                                </p>
                            ) : (
                                <p className="box-content">
                                    Click the button at the right to learn why nutritious food is important and beneficial to our health.
                                </p>
                            )}
                            <button className="box-button" onClick={handleButtonClick}>
                                {showContent ? 'Hide Content' : 'Learn More'}
                            </button>
                        </div>
                    </div>
                    <div className="why-important-box-1">
                        <div className="box-content-wrapper-1">
                            <h2 className="bx-title">What are some healthy choices that can be made?<img src={icon2} alt="diet" className="icon-2" /></h2>
                            <br/>
                            <button className="box-button-hide" onClick={handleHealthyChoicesClick}>
                                {showHealthyChoices ? 'Hide Content' : 'Learn More!'}
                            </button>
                            <br/>
                            {showHealthyChoices && (
                                <ul className="box-content-1">
                                    <li>Opt for balanced meals: Protein, carbs, healthy fats.</li>
                                    <li>Control portions: Choose smaller sizes or share.</li>
                                    <li>Use nutritional info: Check calories, fats, sugar, etc.</li>
                                    <li>Customize orders: Modify to fit dietary needs.</li>
                                    <li>Filter dietary preferences: Vegetarian, vegan, etc.</li>
                                    <li>Choose healthier beverages: Water, herbal tea.</li>
                                    <li>Limit sugary treats: Share desserts occasionally.</li>
                                    <li>Practice mindful eating: No distractions.</li>
                                    <li>Find special diet options: Diabetic-friendly, etc.</li>
                                    <li>Explore diverse cuisines for variety.</li>
                                </ul>

                            )}
                            <p>By making these healthy choices through Flavor Express, you can maintain better control over your diet, support your nutritional goals, and promote overall well-being.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
