<template>
  <div class="list-ticket">
    <div class="top">
      <img :src="userIcon" alt="" />
      <p>Đặng Long - 0964 567 981 - LongD@gmail.com</p>
    </div>
    <div class="top-action">
      <form>
        <label for="search-input">Tìm kiếm:</label>
        <b-form-input
          type="text"
          id="search-input"
          v-model.trim="search"
        ></b-form-input>
      </form>
      <button @click="addNewTicket">
        New ticket
        <img :src="lightingIcon" alt="" />
      </button>
    </div>
    <div class="table">
      <div class="table-nav">
        <p
          class="table-nav-item"
          :class="{ active: tab === 'tickets' }"
          @click="changeTab('tickets')"
        >
          Danh sách Ticket
        </p>
        <p
          class="table-nav-item"
          :class="{ active: tab === 'products' }"
          @click="changeTab('products')"
        >
          Sản phẩm dịch vụ
        </p>
        <p class="table-nav-item">Ghi chú</p>
      </div>
      <div>
        <b-table
          v-if="tab === 'tickets'"
          bordered
          hover
          sticky-header="440px"
          :items="listTickets"
          :fields="fields"
          :tbody-tr-class="rowClass"
        ></b-table>
        <b-table
          v-else-if="tab === 'products'"
          bordered
          hover
          sticky-header="440px"
          :items="products"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import userIcon from '../../static/images/icons/user.png';
import lightingIcon from '../../static/images/icons/lighting.png';
import tickets from '../../data/tickets';
import products from '../../data/products';

export default {
  data() {
    return {
      userIcon,
      lightingIcon,
      tickets,
      products,
      tab: 'tickets',
      search: '',
      fields: [
        {
          key: 'workcode',
          sortable: true,
        },
        {
          key: 'status',
          label: 'Trạng Thái',
          sortable: true,
        },
        {
          key: 'prioritize',
          label: 'Ưu Tiên',
          sortable: true,
        },
        {
          key: 'createdDate',
          label: 'Ngày Tạo',
          sortable: true,
        },
        {
          key: 'createdUser',
          label: 'Người Tạo',
        },
        {
          key: 'receive',
          label: 'Kênh Tiếp Nhận',
        },
      ],
    };
  },
  computed: {
    hasTickets() {
      return this.$store.getters['ticket/hasTickets'];
    },
    listTickets() {
      const tickets = this.$store.getters['ticket/tickets'];
      if (this.search !== '') {
        return tickets.filter((item) => {
          return this.search
            .toLowerCase()
            .split('')
            .every((s) => item.createdUser.toLowerCase().includes(s));
        });
      } else {
        return tickets;
      }
    },
  },
  created() {
    this.loadTickets();
  },
  methods: {
    changeTab(value) {
      this.tab = value;
    },
    rowClass(item, type) {
      if (!item || type !== 'row') return;
      if (item.prioritize === 'high') {
        return 'table-success';
      }
      if (item.prioritize === 'medium') {
        return 'table-primary';
      }
      if (item.prioritize === 'low') {
        return 'table-danger';
      }
    },
    addNewTicket() {
      this.$router.replace('/');
    },
    async loadTickets() {
      try {
        await this.$store.dispatch('ticket/loadTickets');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    },
  },
};
</script>

<style scoped>
.list-ticket {
  border-top: 1px solid #dddbda;
  border-left: 1px solid #dddbda;
}
.top {
  display: flex;
  padding: 10px 5px 0px 5px;
}
.top img {
  max-width: 25px;
  max-height: 25px;
}
.top p {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.top-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  border: none;
  background-color: #0070d2;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  padding: 4px 12px;
  margin-right: 30px;
}
button:hover {
  background-color: #1f7fd3;
}
.table {
  padding: 10px;
}
.table-nav {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #dd7a01;
}
.table-nav-item {
  font-size: 16px;
  padding: 4px 8px;
  margin: 0;
  border-top: 3px solid #dddbda;
  border-left: 1px solid #dddbda;
  border-right: 1px solid #dddbda;
  cursor: pointer;
  transition: all 0.25s ease-in;
}
.table-nav-item.active {
  color: #dd7a01;
  border-top: 3px solid #dd7a01;
}
.table-nav-item:hover {
  color: #dd7a01;
  border-top: 3px solid #dd7a01;
  transition: all 0.25s ease-out;
}
form {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
label {
  font-size: 16px;
  font-weight: 600;
}
form input {
  padding: 0 3px;
}
</style>
