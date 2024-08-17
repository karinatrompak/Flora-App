import express from "express";
import { addConteudo, listConteudo, removeConteudo } from "../controllers/conteudoController.js";
import multer from "multer";

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage: storage });
  
  const conteudoRouter = express.Router();
  
  conteudoRouter.post("/add", upload.single("image"), addConteudo);
  conteudoRouter.get("/list",listConteudo);
  conteudoRouter.post("/remove",removeConteudo);



export default conteudoRouter;