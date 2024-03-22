export default {
    getItems: (state) => state.items,
    getItemById: (state) => (itemId) => {
        return state.items.find(item => item.itemId === itemId);
    },
    getEditItem: (state) => {
        return state.items.find(item => item.itemId === state.editItemId);
    }
    
};
