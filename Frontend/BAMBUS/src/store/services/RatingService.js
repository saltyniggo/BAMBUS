import axios from "axios";

async function AddRating(payload) {
    try {
        const response = await axios({
            method: "put",
            url: `http://localhost:5240/AddRating`,
            data: {
                userId: payload.userId,
                itemId: payload.itemId,
                rating: payload.rating,
                comment: payload.comment,
                isRecomemnded: payload.isRecommended,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when adding rating to DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function UpdateRating(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/UpdateRating`,
            data: {
                itemId: payload.itemId,
                rating: payload.rating,
                comment: payload.comment,
                isRecomemnded: payload.isRecommended,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when updating rating in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function DeleteRating(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/DeleteRating`,
            data: {
                ratingId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when deleting rating in DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function GetAllRating() {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetAllRating`,
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting all ratings from DB:");
        console.error("Error:", error);
        throw error;
    }
}

async function GetRatingById(payload) {
    try {
        const response = await axios({
            method: "post",
            url: `http://localhost:5240/GetRatingById`,
            data: {
                ratingId: payload,
            },
        });
        return response;
    }
    catch (error) {
        console.warn("Error when getting rating by id from DB:");
        console.error("Error:", error);
        throw error;
    }
}

 export { AddRating, UpdateRating, DeleteRating, GetAllRating, GetRatingById };