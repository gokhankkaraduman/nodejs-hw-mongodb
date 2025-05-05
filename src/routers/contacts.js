// routers/contacts.js
import { Router } from "express";
import {ctrlWrapper} from "../utils/ctrlWrapper.js";

import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
  putContactController,
} from "../controllers/contact.js";

const contactRouter = Router();

contactRouter.get("/", ctrlWrapper(getAllContactsController));
contactRouter.get("/:contactId", ctrlWrapper(getContactByIdController));
contactRouter.post("/", ctrlWrapper(createContactController));
contactRouter.put("/:contactId", ctrlWrapper(putContactController));
contactRouter.patch("/:contactId", ctrlWrapper(patchContactController));
contactRouter.delete("/:contactId", ctrlWrapper(deleteContactController));

export default contactRouter;
