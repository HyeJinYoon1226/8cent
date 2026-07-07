import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import type { AnswerType } from "../types/perfume";

type Question = {
  question: string;
  options: {
    text: string;
    type: AnswerType;
  }[];
};

const questions: Question[] = [
  {
    question: "여행에서 가장 기억에 남는 시간대는?",
    options: [
      { text: "화려한 밤거리", type: "citrus" },
      { text: "고요한 새벽", type: "woody" },
      { text: "맑은 자연의 오후", type: "fresh" },
    ],
  },
  {
    question: "여행지에서 가장 좋아하는 장소는?",
    options: [
      { text: "번화가와 쇼핑거리", type: "citrus" },
      { text: "사찰과 전통 건축물", type: "woody" },
      { text: "공원과 자연", type: "fresh" },
    ],
  },
  {
    question: "여행 후 남기고 싶은 기억은?",
    options: [
      { text: "설렘과 에너지", type: "citrus" },
      { text: "평온함과 여유", type: "woody" },
      { text: "자유로움과 상쾌함", type: "fresh" },
    ],
  },
  {
    question: "여행 사진의 분위기는?",
    options: [
      { text: "화려하고 선명한 색감", type: "citrus" },
      { text: "차분한 필름 감성", type: "woody" },
      { text: "밝고 자연스러운 풍경", type: "fresh" },
    ],
  },
  {
    question: "가장 끌리는 향의 계열은?",
    options: [
      { text: "시트러스", type: "citrus" },
      { text: "우디", type: "woody" },
      { text: "그린", type: "fresh" },
    ],
  },
  {
    question: "당신의 여행 스타일은?",
    options: [
      { text: "즉흥적으로 돌아다닌다", type: "citrus" },
      { text: "천천히 둘러본다", type: "woody" },
      { text: "자연을 찾아간다", type: "fresh" },
    ],
  },
  {
    question: "여행 기념품을 고른다면?",
    options: [
      { text: "트렌디한 굿즈", type: "citrus" },
      { text: "전통 공예품", type: "woody" },
      { text: "자연 소재 소품", type: "fresh" },
    ],
  },
  {
    question: "8cent가 기록할 당신의 여행은?",
    options: [
      { text: "반짝이는 도시의 기억", type: "citrus" },
      { text: "시간이 머무는 골목의 기억", type: "woody" },
      { text: "바람이 스치는 자연의 기억", type: "fresh" },
    ],
  },
];

function Test() {
  const [step, setStep] = useState(0);

  const [scores, setScores] = useState<Record<AnswerType, number>>({
    citrus: 0,
    woody: 0,
    fresh: 0,
  });

  const navigate = useNavigate();

  const handleSelect = (type: AnswerType) => {
    const newScores = {
      ...scores,
      [type]: scores[type] + 1,
    };

    setScores(newScores);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const resultType = Object.entries(newScores).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      navigate(`/result/${resultType}`);
    }
  };

  return (
    <main className="section">
      <p className="progress">
        Q. {step + 1} / {questions.length}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        />
      </div>

      <QuestionCard
        question={questions[step].question}
        options={questions[step].options}
        onSelect={handleSelect}
      />
    </main>
  );
}

export default Test;