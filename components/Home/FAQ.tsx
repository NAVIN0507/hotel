import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is it accessible?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "How much does it cost?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
   {
    question: "Is it accessible?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "How much does it cost?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,Immerse yourself in the captivating works of Bliss Gardens, where nature and aesthetics unite seamlessly. Explore lush landscapes, vibrant gardens,",
  },
];

const FAQ = () => {
  return (
    <section className="px-4 lg:px-10 py-10">
      <h2 className="text-center text-[#5C5C5C] text-xl">FAQ</h2>

      <div className="flex flex-col items-center mt-6">
        <h1 className="flex gap-2 text-3xl lg:text-4xl font-mono text-center">
          <span className="hidden lg:block w-20 h-0 mt-6 border border-gray-500" />
          GOT ANY QUESTIONS
        </h1>
        <h1 className="flex gap-2 text-3xl lg:text-4xl font-mono text-center">
          WE'VE GOT ANSWERS
          <span className="hidden lg:block w-20 h-0 mt-6 border border-gray-500" />
        </h1>
      </div>

      {/* Two-column layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqItems.map((item, index) => (
          <Accordion type="single" collapsible key={index} className="w-full">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="p-6 bg-[#011D38] text-white text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-[#011D38] text-[#C1C1C1] text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
