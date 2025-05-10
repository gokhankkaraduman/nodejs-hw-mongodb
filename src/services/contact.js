import Contacts from "../db/models/contact.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

const getAllContacts = async ({
  page=1,
  limit=10,
}) => {
  const perPage= Number(limit);
  const skip = (page - 1) * limit;

  const contacts = await Contacts.find().skip(skip).limit(perPage);
  const totalContacts = await Contacts.countDocuments();
  const pagination = calculatePaginationData(totalContacts, page, limit);

  return {
    contacts,
    pagination,
  };
};

const getContactById = async (contactId) => {
  const contact = await Contacts.findById(contactId);
  return contact;
};

const createContact = async (contactData) => {
  const newContact = await Contacts.create(contactData);
  return newContact;
};
const updateContactByPut = async (contactId, contactData, options={}) => {
  const updatedContact = await Contacts.findByIdAndUpdate(
    contactId,
    contactData,
    { new: true,
      upsert: true,
      rawResult: true,
    includeResultMetadata: true,
    ...options, }
  );
  return {updatedContact , isNew: Boolean(updatedContact?.lastErrorObject?.updatedExisting)};
};
 
const updateContactByPatch = async (contactId, contactData) => {
  const updatedContact = await Contacts.findByIdAndUpdate(
    contactId,
    { $set: contactData },
    { new: true }
  );
  return updatedContact;
};

const deleteContact = async (contactId) => {
  console.log("Deleting contact with ID:", contactId);
  const deletedContact = await Contacts.findByIdAndDelete(contactId);
  console.log("Deleted contact:", deletedContact);
  return deletedContact;
};
export {
  getAllContacts,
  getContactById,
  createContact,
  updateContactByPut,
  updateContactByPatch,
  deleteContact,
};
