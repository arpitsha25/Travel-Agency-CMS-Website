import React, { useState, useRef, useEffect } from 'react';

// AccordionItem component for a single FAQ item
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Update the container's height when isOpen changes.
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="flex cursor-pointer mb-4 pb-6 group w-full items-start justify-between border-b border-gray-100 text-left"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="max-w-xl pr-5">
        <h3 className={`text-[18px] font-semibold ${isOpen ? 'text-orange-900' : 'text-black'}`}>
          {question}
        </h3>
        {/* The answer container: its height toggles to show/hide the content */}
        <div
          ref={contentRef}
          style={{ height }}
          className="overflow-hidden transition-all duration-500"
        >
          <p className="text-gray-600 text-[14px] mt-3">{answer}</p>
        </div>
      </div>
      <div className="pt-1">
        {isOpen ? (
          // Minus icon when open
          <span className="relative top-3">
            <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                fill="#FF460C"
              />
            </svg>
          </span>
        ) : (
          // Plus icon when closed
          <span className="relative top-1">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                fill="black"
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

// Main FAQSection component
const FAQSection = () => {
  // FAQ data array (adjust as needed)
  const faqs = [
    {
      question: 'Do you offer customized travel packages?',
      answer:
        'Yes! We provide tailor-made travel packages to suit your preferences, budget, and schedule. Whether you’re looking for an adventure, a relaxing getaway, or a family vacation, we can personalize your trip accordingly.',
    },
    {
      question: 'What is included in your tour packages?',
      answer:
        'Our tour packages typically include accommodation, transportation, guided tours, and some meals. However, the inclusions vary depending on the package you choose. We also offer add-ons like travel insurance, visa assistance, and special activities.',
    },
    {
      question: 'Do I need a visa for my trip?',
      answer:
        'Visa requirements depend on your destination and nationality. We provide assistance with visa applications and can guide you through the process to ensure a smooth travel experience.',
    },
    {
      question: 'What is your cancellation and refund policy?',
      answer:
        'Our cancellation and refund policies vary depending on the tour package and service providers. We recommend checking the terms before booking. In most cases, cancellations made within a certain period may be eligible for a partial refund.',
    },
    {
      question: 'How much do your tour packages cost?',
      answer:
        'Our tour packages vary in price depending on the destination, duration, and inclusions. We offer budget-friendly to luxury travel options. Contact us for a personalized quote based on your travel plans.',
    },
    {
      question: 'Do you have any terms & conditions?',
      answer:
        'Yes, we have specific terms and conditions regarding bookings, cancellations, payments, and liabilities. We advise our clients to review these before confirming their travel plans to ensure a smooth experience.',
    },
  ];
  

  return (
    <section className="relative py-10 overflow-hidden bg-gray-50">
      <img className="absolute top-0 left-0 mt-44" src="saturn-assets/images/faq/light-blue-left.png" alt="" />
      <img className="absolute top-0 right-0 mt-10" src="saturn-assets/images/faq/star-right.svg" alt="" />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
      <div className="p-5 w-full flex justify-center items-center flex-col">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          Frequetly asked questions
        </div>
        <div id="packages" className="font-Roboto font-bold lg:text-[32px] text-[24px]">
          YOU ASK? WE ANSWER
        </div>
      </div>
          <div className="pt-18 sm:pt-14 px-8 sm:px-10 pb-18 bg-white rounded-4xl shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
