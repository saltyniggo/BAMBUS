export default {
  // getItems: (state) => state.items,
  getItemById: (state) => (itemId) => {
    return state.items.find((item) => item.itemId === itemId);
  },

  getEditItem: (state) => {
    return state.items.find((item) => item.itemId === state.editItemId);
  },

  getReturnItemId: (state) => state.returnItemId,

  // getReportItemId: (state) => state.reportItemId,

  // getItemsRentedByUser: (state, _, __, rootGetters) => (userId) => {
  //   const loans = rootGetters["loanStore/getActiveLoansFromUserId"](userId);
  //   const items = loans.map((loan) =>
  //     state.items.find((item) => item.currentLoanId === loan.loanId)
  //   );
  //   return items.filter((item) => item !== undefined);
  // },

  getItemsReservedByUser: (state) => (userId) => {
    const items = state.items.filter((item) =>
      item.reservations.includes(userId)
    );
    return items != null ? items : [];
  },
  getReportedItem: (state) => {
    return state.items.find((item) => item.itemId === state.reportItemId);
  },
  isReservedItemAvailableForRenting: (state) => (itemId, userId) => {
    const item = state.items.find((item) => item.itemId === itemId);
    return item.reservations[0] === userId && item.currentLoanId === 0;
  },
  getFilteredItems: (state, _, __, rootGetters) => {
    if (state.search !== "") {
      let searchResults = rootGetters["itemStore/getSearch"];
      return searchResults;
    } else {
      let filteredItems = [];

      if (state.filteredBy === null || state.filteredBy == "all") {
        filteredItems = state.items;
      } else {
        filteredItems = state.items.filter(
          (item) => item.type === state.filteredBy
        );
      }

      let sortedItems = rootGetters["itemStore/getSortedItems"](filteredItems);
      let availableItems =
        rootGetters["itemStore/getOnlyAvailableItems"](sortedItems);
      return availableItems;
    }
  },
  getSortedItems: (state) => (items) => {
    const sortOptions = {
      default: (a, b) => 0,
      avgRating: (a, b) => (a.avgRating || 0) - (b.avgRating || 0),
      title: (a, b) => a.title.localeCompare(b.title),
      author: (a, b) => (a.author || "").localeCompare(b.author || ""),
      avgRatingDesc: (a, b) => (b.avgRating || 0) - (a.avgRating || 0),
      titleDesc: (a, b) => b.title.localeCompare(a.title),
      authorDesc: (a, b) => (b.author || "").localeCompare(a.author || ""),
    };

    const sortFunction = sortOptions[state.sortedBy] || sortOptions.default;

    if (items == null || items == undefined || items.length <= 0) {
      return [];
    } else {
      return [...items].sort(sortFunction);
    }
  },
  getOnlyAvailableItems: (state) => (items) => {
    if (state.onlyAvailable) {
      return items.filter((item) => !item.currentLoanId);
    }
    return items;
  },
  getSearch: (state) => {
    let searchResults = state.items.filter((item) => {
      let match = false;
      if (
        item.title &&
        item.title.toLowerCase().includes(state.search.toLowerCase())
      ) {
        match = true;
      }
      if (
        item.author &&
        item.author.toLowerCase().includes(state.search.toLowerCase())
      ) {
        match = true;
      }
      if (
        item.category &&
        item.category.toLowerCase().includes(state.search.toLowerCase())
      ) {
        match = true;
      }
      return match;
    });
    return searchResults;
  },
  getReportedItems: (state) => {
    return state.items.filter((item) => item.condition == 1);
  },
  getItemsWithoutLoanButReserved: (state) => {
    return state.items.filter(
      (item) =>
        item.reservations.length > 0 &&
        (item.currentLoanId == 0 || item.currentLoanId == null)
    );
  },
};
