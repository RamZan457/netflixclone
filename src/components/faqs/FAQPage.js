// FAQPage.jsx
import React from "react";
import FAQList from "./FAQList";
import "./Faq.css";
import { faqData } from "../assets/content_options";
import Input from "../small/Input";

const FAQPage = () => {
  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <FAQList faqData={faqData} />
      <Input />
    </div>
  );
};

export default FAQPage;
