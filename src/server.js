import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pino from "pino-http";
import { getContacts, getContactById } from "./controllers/contact.js";

const setupServer = () => {
    dotenv.config();
    const app = express();

    const PORT = process.env.PORT || 3000;
    // Middleware
    app.use(express.json());
    app.use(cors());
    // Pino logger middleware
    app.use(
        pino({
            transport: {
                target: "pino-pretty",
            }
        })
    );

    app.get("/", (req, res) => {
        req.log.info("Ana sayfa ziyaret edildi"); // log örneği
        res.send("Merhaba Express!");
    });
    
    app.get("/contacts", getContacts);

    app.get("/contacts/:id", getContactById);

    // 404 error handling
    app.use((req, res) => {
        res.status(404).json({message:"404 Not Found"});
    })


    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('localhost:3000', 'http://localhost:3000');
    });
};

export { setupServer };
