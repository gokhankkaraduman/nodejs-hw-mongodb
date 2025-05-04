import { getAllContacts, getContactById } from "../services/contact.js";

const getAllContactsController = async ( req, res ) => {
    const contacts = await getAllContacts();
    res.status(200).json({
        status: "success",
        code: 200,
        message : "Contacts fetched successfully",
        data: {
            contacts,
        },
    });
};

const getContactByIdController = async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
        return res.status(404).json({
            status: "error",
            code:404,
            message: "Contact not found",
        });
    };
    res.status(200).json({
        status:"success",
        code:200,
        message: "Contact fetched successfully",
        data: {
            contact,
        },
    })
};

export { getAllContactsController, getContactByIdController };