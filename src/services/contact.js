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
const updateContact = async (contactId, contactData) => {
  const updatedContact = await Contacts.findByIdAndUpdate(contactId, contactData, { new: true });
  return updatedContact;
};
const deleteContact = async (contactId) => {
  const deletedContact = await Contacts.findByIdAndDelete(contactId);
  return deletedContact;
};
export { getAllContacts, getContactById, createContact, updateContact, deleteContact };
