import { setupServer } from "./server.js";
import { connectToMongoDB } from "./db/initMongoConnection.js";

const launchApp = async () => {
    await connectToMongoDB();
    setupServer();
};

launchApp();