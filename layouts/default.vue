<template>
  <div class="app">
    <bread-crumb></bread-crumb>
    <sidebar></sidebar>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '../components/ui/BreadCrumb.vue';
import Sidebar from '../components/ui/Sidebar.vue';

export default {
  components: { BreadCrumb, Sidebar },
};
</script>

<style scoped>
.app {
  max-width: 1440px;
  margin: 0 auto;
}
.content {
  padding-left: 55px;
  height: calc(100vh - 50px);
}
</style>
