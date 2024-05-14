import axios from "axios";
import userStore from "../modules/user/index.js";

async function LoadAllItems() {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:5240/GetItems`,
      headers: {
        accept: "*/*",
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when getting all items from DB:");
    console.error("Error:", error);
    throw error;
  }
}

async function AddItem(payload) {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:5240/CreateItem`,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        title: payload.title,
        condition: payload.condition,
        type: payload.type,
        author: payload.author,
        category: payload.category,
        isbn: payload.isbn,
        issn: payload.issn,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when adding item to DB:");
    console.error("Error:", error);
    throw error;
  }
}

async function DeleteItem(payload) {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:5240/DeleteItem?itemId=${payload}`,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when deleting item from DB:");
    console.error("Error:", error);
    throw error;
  }
}

async function UpdateItem(payload) {
  try {
    const response = await axios({
      method: "put",
      url: `http://localhost:5240/UpdateItem`,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        itemId: payload.itemId,
        title: payload.title,
        condition: payload.condition,
        type: payload.type,
        isbn: payload.isbn,
        issn: payload.issn,
        category: payload.category,
        author: payload.author,
        reservations: payload.reservations,
        currentLoanId: payload.currentLoanId,
        avgRating: payload.avgRating,
        extensionRequestActive: payload.extensionRequestActive,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        itemId: payload.itemId,
        condition: payload.condition,
        type: payload.type,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        userId: payload.userId,
        itemId: payload.itemId,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        itemId: payload,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        userId: payload.userId,
        itemId: payload.itemId,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        itemId: payload,
      },
    });
    return response;
  } catch (error) {
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
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: "Bearer " + userStore.state.user.token,
      },
      data: {
        itemId: payload,
      },
    });
    return response;
  } catch (error) {
    console.warn("Error when removing loan from Item in DB:");
    console.error("Error:", error);
    throw error;
  }
}

export default {
  LoadAllItems,
  AddItem,
  DeleteItem,
  UpdateItem,
  UpdateCondition,
  AddReservation,
  RemoveFirstReservation,
  RemoveReservationByUser,
  AddLoan,
  RemoveLoan,
};
