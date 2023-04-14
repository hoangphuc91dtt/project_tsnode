import { Schema, model } from "mongoose";

interface IExperience {
  title: string;
  job: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperienceSchema = new Schema<IExperience>({
  title: { type: String },
  job: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: { type: String }
});

const ExperienceModel = model<IExperience>("Experience", ExperienceSchema);

export default ExperienceModel;
