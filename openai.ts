//import { Configuration, OpenAIApi } from "openai";
import Configuration from "openai";
import OpenAIApi from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAIApi(configuration);
export default openai;
