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
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  overflow: hidden;
}
.content {
  padding-left: 85px;
  height: calc(100vh - 80px);
}
</style>
