// FAQList.jsx
import React from "react";
import FAQItem from "./FAQItem";
import "./Faq.css";

const FAQList = ({ faqData }) => {
  return (
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
