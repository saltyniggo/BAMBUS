import axios from "axios";
import { s } from "vite/dist/node/types.d-aGj9QkWt";

async function GettAllLoans() {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetAllLoans`,
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
            url: `http://localhost:5240/GetAllLoansFromUser`,
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
            method: "put",
            url: `http://localhost:5240/CreateLoan`,
            data: {
                userId: payload.userId,
                itemId: payload.itemId,
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
            url: `http://localhost:5240/SetReturnDate`,
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
            url: `http://localhost:5240/EndExtensionRequest`,
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

export { GettAllLoans, GetAllLoansFromUser, GetLoanById, CreateLoan, SetReturnDate, EndExtensionREquest, UpdateDueDate };


