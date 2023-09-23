import React from "react";
import AboutPicture from "../pictures/meal.jpg";
import Establishment from "../pictures/kitchen.jpg";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={AboutPicture} alt="Image"/>
                    </div>
                    <div className="about-description">
                        <h2>About Us</h2>
                        <p>
                            In the heart of the vibrant and culturally rich city of Kathmandu, Nepal,
                            Flavor Express stands as a beacon of culinary convenience and gastronomic delight.
                            As the premier food delivery and meal plan delivery website in the region, Flavor Express has
                            become synonymous with delivering not just food, but an unforgettable dining experience to the
                            doorsteps of residents and visitors alike. With a mission to tantalize taste buds, simplify meal planning,
                            and celebrate the diverse flavors of Nepal, Flavor Express has emerged as a trusted partner in the
                            culinary journey of the Kathmandu Valley.
                        </p>
                    </div>
                </div>

                <div className="establishment-section">
                    <div className="establishment-content">
                        <div className="establishment-description">
                            <h2>Establishment</h2>
                            <p>
                                Flavor Express takes pride in its commitment to quality, freshness, and sustainability.
                                We work closely with local farmers and suppliers to source the freshest and finest ingredients
                                for our partner restaurants and meal plans. By supporting local businesses and reducing food waste,
                                we aim to contribute to the well-being of the Kathmandu community and the preservation of Nepal's
                                natural beauty. Our eco-friendly packaging and responsible delivery practices further
                                underscore our dedication to a greener, more sustainable future.
                            </p>
                        </div>
                        <div className="establishment-image">
                            <img src={Establishment} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
