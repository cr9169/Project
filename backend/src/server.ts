import * as Joi from "joi";

export const validateObject = (input: object) => {
    const schema = Joi.object().keys({
      home: Joi.string().required(),
    });
  return schema.validate(input).error ?
   "Error: " + schema.validate(input).error?.details[0].message :
    "valid";
};

// console.log(validateObject({
//   dsa: "dfs",
// }));

const createPair = <firstElement, secondElement>(var1: firstElement, var2: secondElement): [firstElement, secondElement] => {
  return [var1, var2];
}

const pair = createPair(1, "2"); 
console.log(`Pair: ${pair}`);
console.log(`Type of pair: ${typeof(pair)}`);

type Name<T> = { value: T };
const name: Name<string> = { value: "Bar" };
console.log(typeof(name), name.value);


