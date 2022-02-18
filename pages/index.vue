<template>
  <div class="wrapper">
    <div class="box">
      <customer-info></customer-info>
    </div>
    <div class="box">
      <new-ticket></new-ticket>
    </div>
  </div>
</template>

<script>
import CustomerInfo from '../components/customer/CustomerInfo.vue';
import NewTicket from '../components/ticket/NewTicket.vue';
import BaseDialog from '../components/ui/BaseDialog.vue';

export default {
  name: 'App',
  middleware: 'noAuthenticated',
  components: { CustomerInfo, NewTicket, BaseDialog },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
}
.box {
  flex: 1;
  height: calc(100% - 15px);
  margin: 0 10px;
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
