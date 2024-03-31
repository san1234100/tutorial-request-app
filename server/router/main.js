import express from "express";
import {
  createTutorialRequest,
  getAllRequests,
  updateDataById,
  deleteDataById
} from "../models/user-request.js";

export const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to express js");
});
router.post("/create", async (req, res) => {
  const data = {
    technology: "tooling",
    title: "Github tutorials",
    desc: "Learn github to work with an team",
    created_at: new Date(),
  };
  try {
    const result = await createTutorialRequest(data);
    // console.log(result);
    res.status(200);
    res.json(res.body);
  } catch (err) {
    res.status(404);
    res.json(err.errors);
  }
});
router.get("/requests", async (req, res) => {
  try {
    const result = await getAllRequests();
    console.log(result);
    res.status(200);
    res.json(result);
  } catch (err) {
    res.status(404);
    res.json(err.errors);
  }
});
router.put("/requests/:id", async (req, res) => {
  try {
    const docId = req.params.id;
    const data = {
      technology: "java",
      title: "Java tutorials",
      desc: "Learn github to work with an team",
      created_at: new Date(),
    };
    if (docId) {
      const result = await updateDataById(docId, data);
      res.status(200);
      res.json(result);
    }
  } catch (err) {
    res.status(404);
    res.json(err.errors);
  }
});
router.delete("/requests/:id", async (req, res) => {
  try {
    const docId = req.params.id;
      const result = await deleteDataById(docId);
      res.status(200);
      res.json(result);
    
  } catch (err) {
    res.status(403);
    res.json(err.errors);
  }
});
// router.post('/create',(req,res)=>{
//     res.send('Welcome to express js')
// })
