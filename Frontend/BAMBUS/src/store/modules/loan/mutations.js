export default {
  setLoans(state, loans) {
    state.loans = loans;
  },
  createLoan(state, loan) {
    state.loans.push(loan);
  },
  returnItem(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload.loanId);
    loan.returnDate = payload.returnDate;
  },
  setExtensionRequestActive(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload);
    loan.extensionRequestActive = true;
  },
  setExtensionRequestInactive(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload);
    loan.extensionRequestActive = false;
  },
  extendLoan(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload.loanId);
    loan.dueDate = payload.newDueDate;
  },
  setReturnDate(state, payload) {
    const loan = state.loans.find((loan) => loan.loanId === payload.loanId);
    loan.returnDate = payload.returnDate;
  }
};
