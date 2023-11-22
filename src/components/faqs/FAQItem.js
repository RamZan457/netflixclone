// FAQItem.jsx
import React, { useState } from "react";
import "./Faq.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleOpen}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
