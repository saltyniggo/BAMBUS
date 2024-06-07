export default {
  setLoans(state, loans) {
    state.loans = loans;
  },

  returnItem(state, { loanId, returnDate }) {
    const loan = state.loans.find((loan) => loan.loanId === loanId);
    if (loan) {
      loan.returnDate = returnDate;
    }
  },

  setExtensionRequestActive(state, loanId) {
    const loan = state.loans.find((loan) => loan.loanId === loanId);
    if (loan) {
      loan.extensionRequestActive = true;
    }
  },

  setExtensionRequestInactive(state, loanId) {
    const loan = state.loans.find((loan) => loan.loanId === loanId);
    if (loan) {
      loan.extensionRequestActive = false;
    }
  },

  extendLoan(state, { loanId, newDueDate }) {
    const loan = state.loans.find((loan) => loan.loanId === loanId);
    if (loan) {
      loan.dueDate = newDueDate;
    }
  },

  setReturnDate(state, { loanId, returnDate }) {
    const loan = state.loans.find((loan) => loan.loanId === loanId);
    if (loan) {
      loan.returnDate = returnDate;
    }
  },

  logout(state) {
    state.loans = [];
  },
};
