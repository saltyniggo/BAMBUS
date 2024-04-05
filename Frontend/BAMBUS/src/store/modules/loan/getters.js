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
};
