import { Material } from "../material/material";
import { Quiz } from "../quiz/quiz";

export interface Learning {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export interface LearningDetail {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  materials: Material[];
  quizzes: Quiz[];
}
