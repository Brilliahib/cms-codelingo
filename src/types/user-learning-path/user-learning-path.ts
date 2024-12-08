import { Learning } from "../learning/learning";

export interface UserLearningPath {
  id: number;
  user_id: number;
  learning_path_id: number;
  created_at: Date;
  updated_at: Date;
  progress_status: number;
  learning_path: Learning;
  user_materials: UserMaterials[];
  user_quizzes: string;
}

export interface UserMaterials {
  id: number;
  user_learning_path_id: number;
  material_id: number;
  is_completed: boolean;
  is_unlocked: boolean;
  created_at: Date;
  updated_at: Date;
}
