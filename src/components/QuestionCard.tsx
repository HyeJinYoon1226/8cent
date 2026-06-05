import type { AnswerType } from "../types/perfume";

type Props = {
  question: string;
  options: {
    text: string;
    type: AnswerType;
  }[];
  onSelect: (type: AnswerType) => void;
};

function QuestionCard({ question, options, onSelect }: Props) {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="option-list">
        {options.map((option, index) => (
          <button key={index} onClick={() => onSelect(option.type)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;