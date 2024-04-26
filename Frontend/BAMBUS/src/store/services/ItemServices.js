import axios from 'axios';

async function LoadAllItems() {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetItems`,
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting all items from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function AddItem (payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/CreateItem`,
            data: {
                title: payload.title,
                condition : payload.isDamaged,
                type: payload.itemCategory,
                author: payload.author,
                category: payload.category,
                isbn: payload.ISBN,
                issn: payload.ISSN,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when adding item to DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function DeleteItem (payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/DeleteItem`,
            data: {
                itemId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when deleting item from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function UpdateItem(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/EditItem`,
            data: {
                itemId: payload.itemId,
                title: payload.title,
                condition : payload.isDamaged,
                type: payload.itemCategory,
                isbn: payload.ISBN,
                issn: payload.ISSN,
                category: payload.category,
                author: payload.author,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when updating item in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function UpdateCondition(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/UpdateCondition`,
            data: {
                itemId: payload.itemId,
                condition: payload.condition,
                type: payload.type,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when updating item condition in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function AddReservation(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/AddReservation`,
            data: {
                userId: payload.userId,
                itemId: payload.itemId,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when adding reservation to DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function RemoveFirstReservation(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/RemoveReservation`,
            data: {
                itemId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when removing reservation from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function RemoveReservationByUser(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/RemoveReservationByUserId`,
            data: {
                userId: payload.userId,
                itemId: payload.itemId,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when removing reservation from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function AddLoan(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/AddCurrentLoan`,
            data: {
                itemId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when adding loan to Item in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function RemoveLoan(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/RemoveCurrentLoan`,
            data: {
                itemId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when removing loan from Item in DB:");
        console.error("Error:", error);
        throw error;
    }
}

export { LoadAllItems, AddItem, DeleteItem, UpdateItem, UpdateCondition, AddReservation, RemoveFirstReservation, RemoveReservationByUser, AddLoan, RemoveLoan };
