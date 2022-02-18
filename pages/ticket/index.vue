<template>
  <div class="wrapper">
    <div class="left">
      <customer-info-more></customer-info-more>
    </div>
    <div class="right">
      <list-ticket></list-ticket>
    </div>
  </div>
</template>

<script>
import CustomerInfoMore from '../../components/customer/CustomerInfoMore.vue';
import ListTicket from '../../components/ticket/ListTicket.vue';

export default {
  middleware: 'noAuthenticated',
  components: { ListTicket, CustomerInfoMore },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
}
.left {
  flex: 1;
}
.right {
  flex: 3;
}
</style>
