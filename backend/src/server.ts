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

const pair1 = createPair(1, "2"); 
console.log(`Pair: ${pair1}`);
console.log(`Type of pair: ${typeof(pair1)}`);

type Name<T> = { value: T };
const name: Name<string> = { value: "Bar" };
console.log(typeof(name), name.value);

const createLoggedPair = <S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] => {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

const pair2 = createLoggedPair("Hi", "Amit");
console.log(pair2, typeof(pair2));



