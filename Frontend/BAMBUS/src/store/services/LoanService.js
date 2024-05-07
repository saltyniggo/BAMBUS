import axios from "axios";
import userStore from "../modules/user/index.js";
import item from "../modules/item/index.js";
async function GetAllLoans() {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetAllLoans`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting all loans from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function GetAllLoansFromUser() {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetAllLoansFromUser/${userStore.state.user.userId}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting all loans from user from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function GetLoanById(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetLoanById`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
            data: {
                loanId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting loan by id from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function CreateLoan(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/CreateLoan`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
            data: {
                userId: payload.userId,
                itemId: payload.itemId,
                itemType: payload.itemType,
                startDate: payload.startDate,
                dueDate: payload.dueDate,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when creating loan in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function SetReturnDate(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/SetReturnDate/${payload}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
            data: {
                loanId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when setting return date in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function EndExtensionREquest (payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/EndExtensionRequest/${payload}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
            data: {
                loanId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when ending extension request in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function UpdateDueDate(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/UpdateDueDate`,
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                "Authorization": "Bearer " + userStore.state.user.token,
            },
            data: {
                loanId: payload.loanId,
                newDueDate: payload.newDueDate,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when updating due date in DB:");
        console.error("Error:", error);
        throw error;
    }
}

export default { GetAllLoans, GetAllLoansFromUser, GetLoanById, CreateLoan, SetReturnDate, EndExtensionREquest, UpdateDueDate };


