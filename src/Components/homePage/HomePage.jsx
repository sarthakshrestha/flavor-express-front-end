import React, {useState} from "react";
import HeroSection from "./subComponents/heroSection/HeroSection";
import HowWorksSection from "./subComponents/howWorks/HowWorksSection";
import TopCategories from "./subComponents/topCategories/TopCategories";
import LimitedPromos from "./subComponents/limitedPromos/LimitedPromos";
import PreferredRestaurants from "./subComponents/preferRestro/PreferredRestaurants";
import MealPlan from "./subComponents/mealPlan/MealPlan";
import CustomerReview from "./subComponents/customerReview/CustomerReview";
import Footer from "../../sharedComponents/footer/Footer";
import SmallMealPlan from "./subComponents/smallMealPlan/smallMealPlans";
export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Callback function to handle search
    const handleSearch = (query) => {
        setSearchQuery(query);
    };
  return (
    <div>
      <HeroSection />
      <HowWorksSection />
      <SmallMealPlan/>
      <LimitedPromos />
      <PreferredRestaurants />
      <MealPlan />
      <CustomerReview />
      <Footer />
    </div>
  );
}
