/* eslint-disable no-control-regex */
/* eslint-disable prefer-regex-literals */
const Joi = require("joi");

class Validation {
    validDetails =
        Joi.object({
          firstName: Joi.string().min(3).max(20).required().pattern(new RegExp("([A-Z][a-z]*)([\\s\\'-][A-Z][a-z]*)*")),

          lastName: Joi.string().min(2).max(20).required().pattern(new RegExp("([A-Z][a-z]*)([\\s\\'-][A-Z][a-z]*)*")),

          email: Joi.string().pattern(new RegExp("^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")).required(),

          password: Joi.string().required()
            .pattern(new RegExp("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"))
        });

    validLogin =
        Joi.object({
          email: Joi.string().required().pattern(new RegExp("^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),

          password: Joi.string().required()
            .pattern(new RegExp("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"))
        });

  validForgotPassword =
    Joi.object({
      email: Joi.string().required().pattern(new RegExp("^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))

    });

  validResetPassword =
    Joi.object({
      email: Joi.string().required().pattern(new RegExp("^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
      password: Joi.string().required().pattern(new RegExp("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")),
      code: Joi.string().required()

    });

  createNoteValidation = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(8).required()
  });
}
module.exports = new Validation();
