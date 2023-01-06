import axios from "axios";
import { EmailContact } from "../auxiliar";

/*
  {
    name: string;
    email: string;
    subject: string;
    text: string;
  }
*/
export const sendEmailContact = async (data: EmailContact) => {
  try {
    const json = await axios.post("/api/contact", data);

    return json.data; //{ success: true }
  } catch (e: any) {
    console.log("ERROR", e);
  }
};
