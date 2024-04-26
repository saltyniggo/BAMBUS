import axios from "axios";

async function GetMessagesFromUserId(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetMessagesFromUserId`,
            data: {
                userId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting messages from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function CreateMessage(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/CreateMessage`,
            data: {
                senderId: payload.senderId,
                receiverId: payload.receiverId,
                text: payload.text,
                date: payload.date,
                type: payload.type,
                payload: payload.payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when creating message in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function DeleteMessage(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/DeleteMessage`,
            data: {
                messageId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when deleting message in DB:");
        console.error("Error:", error);
        throw error;
    }
}

export { GetMessagesFromUserId, CreateMessage, DeleteMessage };

