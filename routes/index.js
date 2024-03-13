import Router from 'express'
import formController from "../controllers/formController.js";

const router = Router()

router.post('/submit', formController.send)

export default router