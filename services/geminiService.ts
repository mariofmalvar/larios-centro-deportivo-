import { GoogleGenAI, Type } from "@google/genai";
import { FitnessGoal, ExperienceLevel, WorkoutPlanResponse } from "../types";

// Initialize Gemini
// Note: We use process.env.API_KEY as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (
  goal: FitnessGoal,
  level: ExperienceLevel,
  daysPerWeek: number
): Promise<WorkoutPlanResponse | null> => {
  try {
    const prompt = `Actúa como un entrenador personal experto de clase mundial.
    Crea un plan de entrenamiento personalizado de ${daysPerWeek} días para un usuario con los siguientes datos:
    - Objetivo: ${goal}
    - Nivel de experiencia: ${level}
    
    El plan debe ser detallado, motivador y científicamente correcto.
    Incluye un consejo nutricional breve para cada día de entrenamiento.
    Proporciona también un consejo general al final.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Eres un entrenador deportivo de élite de Larios Sport Center. Responde siempre en JSON estructurado.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            weeklyPlan: {
              type: Type.ARRAY,
              description: "Lista de rutinas diarias",
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING, description: "Ej: Día 1, Lunes" },
                  focus: { type: Type.STRING, description: "Enfoque del día (ej: Pierna, Cardio)" },
                  nutritionTip: { type: Type.STRING, description: "Consejo nutricional específico para este día" },
                  exercises: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        name: { type: Type.STRING },
                        sets: { type: Type.STRING },
                        reps: { type: Type.STRING },
                        notes: { type: Type.STRING }
                      }
                    }
                  }
                }
              }
            },
            generalAdvice: {
              type: Type.STRING,
              description: "Un consejo general motivacional o de salud."
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as WorkoutPlanResponse;
    }
    return null;

  } catch (error) {
    console.error("Error generating workout plan:", error);
    return null;
  }
};