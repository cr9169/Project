import * as Joi from "joi";

export const validateObject = (input: object) => {
    const schema = Joi.object().keys({
      home: Joi.string().required(),
    });
  return schema.validate(input).error;
};

console.log(validateObject({
  home: "dfs",
  hog: "afdsaf"
}));
