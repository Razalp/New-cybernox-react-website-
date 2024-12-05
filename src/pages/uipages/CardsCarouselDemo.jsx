import React from "react";
import { Carousel, Card } from "../../Components/ui/apple-cards-carousel";
import website from "../../assets/Website Creator Bro Illustration.png";
import ecommerce from "../../assets/Online Shopping Bro Illustration.png";
import uiux from "../../assets/UI UX Differences Amico.png";
import app from "../../assets/Rafiki Source Code Illustration.png";
import hosting from "../../assets/Cloud Hosting Cuate Illustration.png";
import market from "../../assets/Marketing Consulting Illustration.png";
import resweb from "../../assets/Responsive Devices 3D Rendering.jpg"

export function CardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black font-sans">
        We Can Help You With.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ content, images }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        {content}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dummy content ${index}`}
            className="w-full h-auto object-contain mx-auto max-w-lg rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};


const data = [
  {
    category: "Website Development",
    title: "Building Dynamic Websites for Your Business",
    src: website,
    content: (
      <DummyContent
        content="Our website development services help you create dynamic, user-friendly websites that boost your online presence and drive business growth."
        images={[resweb]} // Array of images
      />
    ),
  },
  {
    category: "E-commerce Development",
    title: "Seamless Online Shopping Experience",
    src: ecommerce,
    content: (
      <DummyContent
        content="We offer custom e-commerce development services that provide a seamless shopping experience, integrating features like payment gateways and product management systems."
        images={[ecommerce]} // Array of images
      />
    ),
  },
  {
    category: "UI/UX Design",
    title: "Designing Intuitive User Interfaces",
    src: uiux,
    content: (
      <DummyContent
        content="Our UI/UX design services focus on creating visually appealing and user-centric designs that enhance user interaction and satisfaction."
        images={[uiux]} // Array of images
      />
    ),
  },
  {
    category: "App Development",
    title: "Developing Mobile Apps with a Purpose",
    src: app,
    content: (
      <DummyContent
        content="We build mobile apps that deliver an exceptional user experience, whether for iOS or Android, tailored to your business needs."
        images={[app]} // Array of images
      />
    ),
  },
  {
    category: "Hosting & Domain Registration",
    title: "Reliable Hosting and Domain Services",
    src: hosting,
    content: (
      <DummyContent
        content="We provide secure hosting and domain registration services, ensuring your website is fast, reliable, and always online."
        images={[hosting]} // Array of images
      />
    ),
  },
  {
    category: "Digital Marketing",
    title: "Boosting Your Brand with Digital Marketing",
    src: market,
    content: (
      <DummyContent
        content="Our digital marketing services help you reach your target audience through effective strategies like SEO, PPC, and social media marketing."
        images={[market]} // Array of images
      />
    ),
  },
];

