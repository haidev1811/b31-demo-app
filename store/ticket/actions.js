export default {
  async addTicket(context, data) {
    const userId = localStorage.getItem('userId');

    const ticketData = {
      workcode: data.workcode,
      status: data.status,
      prioritize: data.prioritize,
      createdDate: data.createdDate,
      createdUser: data.createdUser,
      receive: data.receive,
    };

    const response = await fetch(
      `https://vue-http-demo-e4dfc-default-rtdb.asia-southeast1.firebasedatabase.app/tickets.json`,
      {
        method: 'POST',
        body: JSON.stringify(ticketData),
      }
    );

    if (!response.ok) {
      //...
    }

    context.commit('addTicket', {
      ...ticketData,
    });
  },
  async loadTickets(context, payload) {
    if (!context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-http-demo-e4dfc-default-rtdb.asia-southeast1.firebasedatabase.app/tickets.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const tickets = [];

    for (const key in responseData) {
      const ticket = {
        workcode: responseData[key].workcode,
        status: responseData[key].status,
        prioritize: responseData[key].prioritize,
        createdDate: responseData[key].createdDate,
        createdUser: responseData[key].createdUser,
        receive: responseData[key].receive,
      };
      tickets.push(ticket);
    }

    context.commit('setTickets', tickets);
    context.commit('setFetchTimestamp');
  },
};
