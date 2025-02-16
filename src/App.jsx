import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Who from "./Components/Who";
import HowItWorks from "./Components/HowItWorks";
import Testimonial from "./Components/Testimonial";
import TeamSection from "./Components/TeamSection";
import Stats from "./Components/Stats";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const details = [
    {
      id: 0,
      text: "Just Sit and Relax",
      name: "We make sure your spending is stress free so that you can have the perfect control.",
      but: "Contact Us",
    },
    {
      id: 1,
      text: "We're Trusted by Over a Million Customers!",
      name: "Here are a Few Reasons",
      but: "Read More",
    },
    {
      id: 2,
      text: "We bring solutions to make life easier.",
      name: "We are a creative company that focuses on long-term relationships with customers.",
      but: "Contact Us",
    },
  ];

  const backgrounds = [
    "https://sandbox-tailwind-template.netlify.app/assets/img/photos/bg8.jpg",
    "https://sandbox-tailwind-template.netlify.app/assets/img/photos/bg9.jpg",
    "https://sandbox-tailwind-template.netlify.app/assets/img/photos/bg7.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setFade(false);
      }, 500); // Halfway fade effect
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Background Transition */}
      <div
        className={` bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${backgrounds[index]})` }}
      >
        {" "}
        <Nav />
        <Header details={details} index={index} fade={fade} />
      </div>

      <div className="whos">
        <Who />
        <HowItWorks />
        <Testimonial />
        <TeamSection />
        <Stats />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
