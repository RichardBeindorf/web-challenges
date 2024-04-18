import Chance from "chance";

export default function handler(request, response) {
    const chance = new Chance();
    console.log("chance object:", chance)

    const character = {
        age: chance.age(),
        firstName: chance.first(),
        lastName: chance.last(),
        "favorite Animal": chance.animal()}

    console.log("character object:", character)

    response.status(200).json(character);
}