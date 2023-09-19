import React from "react";
import HeroSection from "./subComponents/HeroSection";
import HowWorksSection from "./subComponents/HowWorksSection";
import TopCategories from "./subComponents/TopCategories";
import LimitedPromos from "./subComponents/LimitedPromos";
import PreferredRestaurants from "./subComponents/PreferredRestaurants";
import MealPlan from "./subComponents/MealPlan";
import CustomerReview from "./subComponents/CustomerReview";
import Footer from "../../shared/footer/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowWorksSection />
      <TopCategories />
      <LimitedPromos />
      <PreferredRestaurants />
      <MealPlan />
      <CustomerReview />
      <Footer />
    </div>
  );
}
