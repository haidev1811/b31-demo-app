<template>
  <div class="sidebar">
    <div class="list">
      <div class="item active">
        <img :src="connectIcon" alt="" class="icon" />
      </div>
      <div class="item">
        <img :src="noteIcon" alt="" class="icon" />
      </div>
      <div class="item">
        <img :src="messageIcon" alt="" class="icon" />
      </div>
      <div class="item">
        <img :src="chartIcon" alt="" class="icon" />
      </div>
    </div>
    <img :src="exitIcon" alt="" class="icon" @click="logout" />
  </div>
</template>

<script>
import connectIcon from '../../static/images/icons/connect.png';
import noteIcon from '../../static/images/icons/note.png';
import messageIcon from '../../static/images/icons/message.png';
import chartIcon from '../../static/images/icons/chart.png';
import exitIcon from '../../static/images/icons/exit.png';

export default {
  data() {
    return {
      connectIcon,
      noteIcon,
      messageIcon,
      chartIcon,
      exitIcon,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.replace('/login');
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 80px;
  bottom: 0;
  background-color: rgba(0, 112, 210, 0.8);
  z-index: 99;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0070d2;
}
.item {
  position: relative;
  cursor: pointer;
}
.item.active::before {
  position: absolute;
  content: '';
  left: 0;
  height: 100%;
  width: 14px;
  background-color: #ff9e2c;
}
.icon {
  width: 44px;
  height: 44px;
  margin: 12px 21px;
  cursor: pointer;
}
</style>
