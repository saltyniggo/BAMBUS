export default {
  createLoan(state, loan) {
    state.loans.push(loan);
  },
  returnItem(state, payload) {
    console.log(payload);
    const loan = state.loans.find((loan) => loan.loanId === payload.loanId);
    console.log(loan);
    loan.returnDate = payload.returnDate;
  },
};
