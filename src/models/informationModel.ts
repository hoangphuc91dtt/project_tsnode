import { Schema, model } from "mongoose";

interface IInformation {
  name: string;

  job: string;

  address: string;

  web_link: string;

  phone: string;
}

const InformationSchema = new Schema<IInformation>({
  name: {
    type: String
  },
  job: {
    type: String
  },

  address: {
    type: String
  },
  web_link: {
    type: String
  },
  phone: {
    type: String
  }
});

const InformationModel = model<IInformation>("Information", InformationSchema);

export default InformationModel;
