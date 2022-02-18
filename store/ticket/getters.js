export default {
  tickets(state) {
    return state.tickets;
  },
  hasTickets(state) {
    return state.tickets && state.tickets.length > 0;
  },
  isTicket(state, getters, rootState, rootGetters) {
    const tickets = getters.tickets;
    const userId = rootGetters.userId;
    return tickets.some((ticket) => ticket.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  },
};
