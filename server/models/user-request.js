import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutorialRequest = new Schema({
  technology: {
    type: String,
    required: true,
    minLength:4,
    maxLength:12,
  },
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const tutorialRequestModel = mongoose.model(
  "tutorial-request",
  tutorialRequest
);

export const createTutorialRequest = async (data) => {
  try {
    const result = await tutorialRequestModel.create(data);
    return result
} catch (err) {
    throw err;
  }
};

export const getAllRequests = async () => {
    try {
      const result = await tutorialRequestModel.find({});
      return result
  } catch (err) {
      throw err;
    }
  };
  
  export const updateDataById = async (id, data) => {
    try {
      const result = await tutorialRequestModel.updateOne({_id:id},data);
      return result
  } catch (err) {
      throw err;
    }
  };
  