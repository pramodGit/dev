import { useEffect, useState } from "react";
import data from "./qa.data";
import { AccordionItem } from "../shared/accordian";
import { useSearch } from "../core/context/searchContext";


const QuestinosAnswers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { searchTerm } = useSearch();

  const filtered = data.filter((item) => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    console.log("QA json length ", data.length);
  }, []);
  return (
    <div className="container">
      {filtered.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default QuestinosAnswers;
