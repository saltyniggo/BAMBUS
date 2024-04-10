export default {
  createLoan(state, loan) {
    state.loans.push(loan);
  },
  returnItem(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload.loanId);
    loan.returnDate = payload.returnDate;
  },
};
