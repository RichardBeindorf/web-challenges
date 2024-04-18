import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const randomName = chance.name();
const randomAge = chance.age();
const randomProf = chance.age();

export const server = createServer((request, response) => {
    if (request.url === "/") {
      response.statusCode = 200;
      response.end(`Hello, my name is ${randomName} and I am ${randomAge} years old. I am a ${randomProf}.`);
    } else {
      response.statusCode = 404;
      response.end("Not Found");
    }
  });