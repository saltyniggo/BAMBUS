export default {
  getActiveLoansFromUserId: (state) => (userId) => {
    return state.loans.filter(
      (loan) => loan.userId === userId && loan.returnDate === null
    );
  },
  getPastLoansFromUserId: (state) => (userId) => {
    return state.loans.filter(
      (loan) => loan.userId === userId && loan.returnDate !== null
    );
  },
  getAllLoansFromUserId: (state) => (userId) => {
    return state.loans.filter((loan) => loan.userId === userId);
  },
  getAllLoans: (state) => state.loans,

  getLoanById: (state) => (loanId) => {
    return state.loans.find(
      (loan) => loan.loanId === loanId && loan.returnDate === null
    );
  },
  getActiveItemIdFromUserId: (state) => {
    let loans = state.loans.find(
      (loan) => loan.returnDate === null
    );

    if (!Array.isArray(loans)) {
      loans = [loans];
    }

    let itemIds = [];
    loans.forEach(loan => {
      let itemId = loan.itemId;
      itemIds.push(itemId);
    });

    return itemIds;
  }
};
