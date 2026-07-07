export type AnswerType = "citrus" | "woody" | "fresh";

export type Perfume = {
  id: number;
  city: string;
  name: string;
  type: AnswerType;
  concept: string;
  notes: string[];
  description: string;
  story: string;
  mood: string;
  image: string;
};