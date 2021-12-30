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
    userId: Joi.string(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(8).required()
  });

  noteIDValidation = Joi.object({
    id: Joi.string()
  });

  getNoteByIDValidation = Joi.object({
    userId: Joi.string(),
    noteId: Joi.string().required()
  });

  noteUpdateValidation = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string(),
    title: Joi.string().min(3),
    description: Joi.string().min(3)
  });

  validateDeleteNote = Joi.object({
    id: Joi.string(),
    noteId: Joi.string().required().min(20),
    userId: Joi.string()
  });

  validateLabel = Joi.object({
    labelName: Joi.string().required().min(5),
    noteId: Joi.string().required().min(20),
    userId: Joi.string()
  });

  getLabelValidation = Joi.object({
    id: Joi.string().required()
  });

  getLabelByIdValidation = Joi.object({
    userId: Joi.string().required(),
    id: Joi.string().required().min(20)
  });

  labelUpdateValidation = Joi.object({
    id: Joi.string().required().min(20),
    userId: Joi.string(),
    labelName: Joi.string().min(3).required()
  });
}
module.exports = new Validation();
