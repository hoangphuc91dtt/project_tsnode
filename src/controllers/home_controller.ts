import { Request, Response } from "express";
import Skill from "../models/skillModel";
import Education from "../models/educationModel";
import Experience from "../models/experienceModel";
import Information from "../models/informationModel";

class HomeController {
  async index(req: Request, res: Response) {
    let skills = await Skill.find({});
    let educations = await Education.find({});
    let informations = await Information.find({});
    let experiences = await Experience.find({});

    res.render("index", {
      skills: skills,
      educations: educations,
      informations: informations,
      experiences: experiences
    });
  }
}

export default new HomeController();
