import React, { useState } from 'react';
import Header from '../../sharedComponents/header/Header';
import Footer from '../../sharedComponents/footer/Footer';
import logoImage from '../../sharedComponents/footer/Logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dietSuggestion.css';
import icon from './dieticon.png';

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
                    <h1 className="title">Suggestions</h1>
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
                            <h2 className="bx-title">What are some healthy choices that can be made?</h2>
                            <br/>
                            <button className="box-button-hide" onClick={handleHealthyChoicesClick}>
                                {showHealthyChoices ? 'Hide Content' : 'Click to know more!'}
                            </button>
                            <br/>
                            {showHealthyChoices && (
                                <ul className="box-content-1">
                                    <li>Balanced Meals: Opt for meals that include a balance of protein, carbohydrates, and healthy fats. Look for options that incorporate lean proteins like chicken or tofu, whole grains, and plenty of vegetables.</li>
                                    <li>Portion Control: Pay attention to portion sizes when ordering. Many food delivery apps offer different portion size options, so choose a smaller portion or share a larger one to avoid overeating.</li>
                                    <li>Nutritional Information: Use the app's nutritional information to make informed choices. Check for details like calories, fat content, sodium levels, and sugar content to make healthier selections.</li>
                                    <li>Customization: Take advantage of customization options if available. Request modifications like extra veggies, less oil, or sauce on the side to tailor your meal to your dietary preferences and restrictions.</li>
                                    <li>Dietary Preferences: Filter or search for meals that align with your dietary preferences, such as vegetarian, vegan, gluten-free, or low-carb options.</li>
                                    <li>Hydration: Don't forget to order beverages wisely. Opt for water, herbal tea, or low-calorie options instead of sugary sodas or excessive fruit juices.</li>
                                    <li>Limit Sugary Treats: While it's okay to indulge occasionally, try to limit sugary desserts and snacks. If you have a sweet tooth, consider ordering smaller dessert portions or sharing them with others.</li>
                                    <li>Mindful Eating: Practice mindful eating by savoring your meal and paying attention to hunger cues. Avoid distractions like TV or screens while eating to prevent overeating.</li>
                                    <li>Special Diets: If you have specific dietary requirements, such as managing blood sugar levels or heart health, look for menu items that align with your needs. Many apps offer diabetic-friendly or heart-healthy meal options.</li>
                                    <li>Variety: Explore a variety of cuisines and dishes to ensure you get a wide range of nutrients. This can make your dining experience more enjoyable while also providing a diverse array of nutrients.</li>
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
