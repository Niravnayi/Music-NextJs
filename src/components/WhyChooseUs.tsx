"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import musicMastery from "../app/assets/music-mastery.webp"
import image2 from "../app/assets/image2.webp"
import image3 from '../app/assets/image3.webp'

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={image2}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={musicMastery}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={image3}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
