import React from "react";
import "./faq.css";

const Faq = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-left font-semibold">{faq.question}</div>
      <div className="faq-answer text-left">{faq.answer}</div>
    </div>
  );
};

export default Faq;
