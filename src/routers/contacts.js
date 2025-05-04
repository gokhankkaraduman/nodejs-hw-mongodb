// routers/contacts.js
import { Router } from "express";
import {ctrlWrapper} from "../utils/ctrlWrapper.js";

import {
  getAllContactsController,
  getContactByIdController,
} from "../controllers/contact.js";

const contactRouter = Router();

contactRouter.get("/", ctrlWrapper(getAllContactsController));
contactRouter.get("/:contactId", ctrlWrapper(getContactByIdController));

export default contactRouter;
