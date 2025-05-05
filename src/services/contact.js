import Contacts from "../db/models/contact.js";

const getAllContacts = async () => {
  const contacts = await Contacts.find();
  return contacts;
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
