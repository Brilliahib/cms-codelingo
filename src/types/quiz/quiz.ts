export interface Quiz {
  id: string;
  learning_path_id: number;
  title: string;
  description: string;
  type: string;
}

export interface Question {
  id: number;
  quiz_id: string;
  question_text: string;
  question_image: string;
  created_at: Date;
  answers: Answer[];
}

export interface Answer {
  id: number;
  question_id: number;
  answer_text: string;
  is_correct: boolean;
}
