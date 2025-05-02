import {
  getAllContacts,
  getContactById as getContactByIdService,
} from "../services/contact.js";

const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    if (!contacts) {
      return res.status(500).json({
        message: "Error fetching contacts",
        status: "500",
      });
    }

    return res.status(200).json({
      message: "Contacts fetched successfully",
      status: "200",
      data: contacts,
    });
  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({
      message: "Error fetching contacts",
      status: "500",
      error: error.message,
    });
  }
};

const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await getContactByIdService(id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
        status: "404",
      });
    }

    return res.status(200).json({
      message: "Contact fetched successfully",
      status: "200",
      data: contact,
    });
  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({
      message: "Error fetching contact",
      status: "500",
      error: error.message,
    });
  }
};

export { getContacts, getContactById };
