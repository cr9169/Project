import * as Joi from "joi";
import { number } from "joi";

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

////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////


interface Person {
  age: number;
  firstName: string;
  lastName: string;
}

// Declare an object kindPerson from the Person interface, where all the properties are optional:

const kindPerson1: Partial<Person> = 
  {
    age: 10,
  };
console.log(`kind person: ${kindPerson1.age}`);
          
// Declare an object kindPerson from the Person interface, where all the properties are required.

const kindPerson2: Required<Person> = 
  {
    age: 1800,
    firstName: "Santa",
    lastName: "Claus",
  };
console.log(`kind person: ${kindPerson2.age}`);

// Records: Record<string, number> is equivalent to { [key: string]: number }.

const record: Record<string, number> = { ["1"]: 10, ["2"]: 2 };
console.log(record["1"], record["2"], typeof(record));
