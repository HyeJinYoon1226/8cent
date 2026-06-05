export type AnswerType = "citrus" | "woody" | "fresh" | "sweet";

export type Perfume = {
  id: number;
  city: string;
  name: string;
  type: AnswerType;
  concept: string;
  notes: string[];
  description: string;
  image: string;
};