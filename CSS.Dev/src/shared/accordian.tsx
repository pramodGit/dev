import { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../assets/accordian.css";

interface AccordionItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        ref={contentRef}
        className="answer-container"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <div className="answer-content">
          {Array.isArray(answer) ? (
            <ul>
              {answer.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};