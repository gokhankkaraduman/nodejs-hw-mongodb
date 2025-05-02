import Contact from "../db/models/contact.js";

const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    console.error("Service error fetching contacts:", error);
    throw error;
  }
};

const getContactById = async (id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw new Error("Contact not found");
    }
    return contact;
  } catch (error) {
    console.error("Service error fetching contact:", error);
    throw error;
  }
};

export { getAllContacts, getContactById };
