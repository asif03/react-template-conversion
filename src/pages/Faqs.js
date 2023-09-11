import React, { useState } from "react";
import Faq from "../components/faqs/Faq";

const Faqs = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "How do I invest in boostx projects?",
      answer:
        "To invest in any of the boostx affiliated projects check out the home page and navigate to any either the website or presale links for said project. From there you can use the boostx dashboard to create an account and create a payment request using the numerous crypto currencies we support. Once the payment has been created (always double check the selected blockchain!) send money to the address and your account will be credited with tokens which you will receive upon token launch.",
      open: true,
    },
    {
      question: "How does boostx facilitate presales?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae est quis elit eleifend faucibus. Pellentesque faucibus vehicula aliquet. Quisque non purus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ac augue sapien. Suspendisse commodo consectetur fringilla. Vestibulum eget convallis dui.",
      open: false,
    },
    {
      question: "Is marketing provided for my project?",
      answer:
        "Aenean laoreet venenatis sapien, vel imperdiet neque vestibulum in. Praesent rutrum est at metus ultricies, at dapibus nunc elementum. Nullam semper sem quis tincidunt porta. Nam ac urna non elit consectetur maximus ac id lorem. Suspendisse aliquet vulputate leo in pretium. In feugiat facilisis auctor. Curabitur consectetur ultrices purus vitae rutrum.",
      open: false,
    },
    {
      question:
        "How do I find out the token address for a project I am invested in?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae est quis elit eleifend faucibus. Pellentesque faucibus vehicula aliquet. Quisque non purus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ac augue sapien. Suspendisse commodo consectetur fringilla. Vestibulum eget convallis dui.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 174, 165, 0.35) 0%, rgba(250, 251, 255, 1) 100%)",
      }}
    >
      <div className="container mx-auto px-8 lg:px-12 flex flex-col">
        <h1 className="pt-20 font-serif text-black font-extrabold text-4xl pb-5">
          Frequently Asked Questions
        </h1>
        <div>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <Faq faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
