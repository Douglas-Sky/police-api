import { Router } from "express";
import { addStatement, getAllstatement } from "../controllers/statement_controllers.js";

export const  router = Router()

router.post('/statement', addStatement)

router.get('/statements', getAllstatement)


