import { Schema, model } from "mongoose";

interface IEducation {
  title: string;
  level: string;
  date: string;
  description: string;
  time_year: string;
  name_Education: string;
  title_Education: string;
}

const EducationSchema = new Schema<IEducation>({
  title: { type: String },
  level: { type: String },
  date: { type: String },
  description: { type: String },
  time_year: { type: String },
  name_Education: { type: String },
  title_Education: { type: String }
});

const EducationModel = model<IEducation>("Education", EducationSchema);

export default EducationModel;
