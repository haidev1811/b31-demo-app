export default {
  addTicket(state, payload) {
    state.tickets.push(payload);
  },
  setTickets(state, payload) {
    state.tickets = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
