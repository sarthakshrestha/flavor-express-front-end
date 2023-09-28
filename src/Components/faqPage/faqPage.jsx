import ChatBot from 'react-simple-chatbot';
import React, { useState} from 'react';
import Footer from '../../sharedComponents/footer/Footer';
import "./faqPage.css";
import Header from '../../sharedComponents/header/Header';

export default function FAQ() {
    const faqData = [
        {
          question: 'What types of nutrients do your meals contain?',
          answer: 'Our meals are designed to provide a balance of essential nutrients, including vitamins, minerals, proteins, and carbohydrates. We prioritize the use of fresh and wholesome ingredients to ensure the nutritional value of our meals.',
        },
        {
          question: 'Do you offer options for specific dietary needs or preferences?',
          answer: 'Yes, we understand that different individuals have unique dietary needs and preferences. We offer a variety of options, including vegetarian, vegan, gluten-free, and low-carb meals, to cater to a wide range of dietary requirements.',
        },
        {
          question: 'How do you ensure the quality and freshness of the ingredients used?',
          answer: 'We have stringent quality control measures in place to ensure the freshness and quality of the ingredients. Our sourcing process involves partnering with trusted suppliers who provide us with the freshest produce. Additionally, our chefs carefully inspect and select each ingredient to maintain the highest standards of quality.',
        },
        {
          question: 'Can I customize my meals to meet specific nutritional goals?',
          answer: 'Yes, we offer customization options to help you meet your specific nutritional goals. You can personalize your meals by selecting portion sizes, modifying ingredients, or adding specific dietary preferences. Our goal is to provide you with a personalized and nourishing dining experience.',
        },
 
      ];
      const Question = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const handleClick = () => {
          setIsOpen(!isOpen);
        };


      
        return (
          <div className="question-container">
            
            <div className={`question ${isOpen ? 'open' : ''}`} onClick={handleClick}>
              <h3>{question}</h3>
              <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <p className="answer">{answer}</p>}
          </div>
        );}

        const FAQ = () => {
          const [isVolumeOn, setIsVolumeOn] = useState(true);
      
          const toggleVolume = () => {
            setIsVolumeOn(!isVolumeOn);
          };
      
  return (<> <Header/>
   <div className="faq-container">
   
   <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}

<ChatBot
  headerTitle="ChatBot"
  // speechSynthesis={{ enable: isVolumeOn, lang: 'en' }}
  steps={[
    {
      id: '1',
      message: 'Hello! What is your name?',
      trigger: 'nameInput',
    },
    {
      id: 'nameInput',
      user: true,
      trigger: 'greetResponse',
    },
    {
      id: 'greetResponse',
      message: 'Hi {previousValue}! How can I assist you today?',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: (value) => {
        const lowercaseMessage = value.value.toLowerCase();

        if (lowercaseMessage.includes('hello')) {
          return 'helloResponse';
        } else if (lowercaseMessage.includes('goodbye')) {
          return 'goodbyeResponse';
        } else if (lowercaseMessage.includes('flavour express')) {
          return 'flavourexpress';
        } else if (lowercaseMessage.includes('quality')) {
          return 'qualityResponse';
        } else if (
          lowercaseMessage.includes('nutrient') ||
          lowercaseMessage.includes('nutrients')
        ) {
          return 'nutrientResponse';
        }
        else if (
          lowercaseMessage.includes('happy') ||
          lowercaseMessage.includes('good')
        ) {
          return 'happyResponse';
        } else if (
          lowercaseMessage.includes('delivery') ||
          lowercaseMessage.includes('order')
        ) {
          return 'deliveryResponse';
        } 
        else if (
          lowercaseMessage.includes('sad') 
        ) {
          return 'sadResponse';
        }
        else if (
          lowercaseMessage.includes('menu') ||
          lowercaseMessage.includes('options')
        ) {
          return 'menuResponse';
        }
        else if (
          lowercaseMessage.includes('angry') ||
          lowercaseMessage.includes('idiot') ||
          lowercaseMessage.includes('rude') ||
          lowercaseMessage.includes('vicious') ||
          lowercaseMessage.includes('bad') ||
          lowercaseMessage.includes('mean') ||
          lowercaseMessage.includes('offensive') ||
          lowercaseMessage.includes('horrible') ||
          lowercaseMessage.includes('nasty') ||
          lowercaseMessage.includes('terrible')
        ){
          
          return 'angryResponse';
        }         else if (
          lowercaseMessage.includes('super') 

        ) {
          return 'excitedResponse';
        }else {
          return 'defaultResponse';
        }
      },
    },
    {
      id: 'helloResponse',
      message: 'Hello, {previousValue}! How can I assist you today?',
      trigger: 'userInput',
    },
    {
      id: 'goodbyeResponse',
      message: 'Goodbye, {previousValue}! Have a great day!',
      end: true,
    },
    {
      id: 'flavourexpress',
      message:
        "Welcome to Flavour Express! We bring the best restaurants and culinary experiences right to your doorstep.",
      trigger: 'userInput',
    },
    {
      id: 'qualityResponse',
      message:
        "At Flavour Express, we are committed to delivering high-quality meals to our customers. We partner with top-rated restaurants and ensure that our delivery processes adhere to strict quality standards. From the selection of ingredients to the packaging of your meal, we prioritize freshness, taste, and hygiene to provide you with a delightful dining experience.",
      trigger: 'userInput',
    },
    {
      id: 'nutrientResponse',
      message:
        "Nutrients are essential for maintaining a healthy body and mind, {previousValue}. At Flavour Express, we understand the importance of nutrition. Our meals are carefully crafted to provide a balance of essential nutrients, including vitamins, minerals, proteins, and carbohydrates. We strive to offer a diverse menu that caters to different dietary preferences and requirements.",
      trigger: 'userInput',
    },
    {
      id: 'deliveryResponse',
      message:
        "We offer convenient and reliable delivery services. Once you place your order, our dedicated delivery partners ensure that your food reaches you promptly and in perfect condition. You can track your delivery in real-time through our app and have peace of mind knowing that your meal is on its way.",
      trigger: 'userInput',
    },
    {
      id: 'menuResponse',
      message:
        "Our menu is carefully curated to provide a wide range of options to suit every palate. Whether you're looking for comfort food, healthy choices, or international cuisine, we have something for everyone. You can explore our menu through the app, browse different categories, and customize your order according to your preferences.",
      trigger: 'userInput',
    },
    {
      id: 'defaultResponse',
      message: "I'm sorry, I didn't understand. Can you please rephrase?",
      trigger: 'userInput',
    },
    {
      id: 'happyResponse',
      message: "I'm glad to hear that! How can I make your day even better?",
      trigger: 'userInput',
    },
    {
      id: 'sadResponse',
      message:
        "I'm sorry to hear that. Is there anything specific I can assist you with to improve your mood?",
      trigger: 'userInput',
    },
    {
      id: 'angryResponse',
      message:
        "I apologize if there's anything that has made you angry. Please let me know what's bothering you, and I'll do my best to assist you.",
      trigger: 'userInput',
    },
    {
      id: 'excitedResponse',
      message:
        "That's wonderful! I'm excited for you too. Howcan I contribute to your excitement? Let me know!",
      trigger: 'userInput',
    }
  ]}
/>              <button onClick={toggleVolume}>
            {isVolumeOn ? 'Mute' : 'Unmute'}
          </button></div>
    <Footer/>
</>
  );


};
return <FAQ />;
}