export enum FitnessGoal {
  WEIGHT_LOSS = "Pérdida de Peso",
  MUSCLE_GAIN = "Ganancia Muscular",
  ENDURANCE = "Resistencia",
  FLEXIBILITY = "Flexibilidad y Movilidad",
  GENERAL_HEALTH = "Salud General"
}

export enum ExperienceLevel {
  BEGINNER = "Principiante",
  INTERMEDIATE = "Intermedio",
  ADVANCED = "Avanzado"
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  notes: string;
}

export interface DailyRoutine {
  day: string;
  focus: string;
  exercises: Exercise[];
  nutritionTip: string;
}

export interface WorkoutPlanResponse {
  weeklyPlan: DailyRoutine[];
  generalAdvice: string;
}

export interface ClassSession {
  id: string;
  title: string;
  time: string;
  instructor: string;
  intensity: 'Baja' | 'Media' | 'Alta';
  image: string;
}