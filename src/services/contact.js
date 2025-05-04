import Contacts from "../db/models/contact.js";

const getAllContacts = async () => {
  const contacts = await Contacts.find();
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await Contacts.findById(contactId);
  return contact;
};

export { getAllContacts, getContactById };
