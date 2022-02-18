<template>
  <div class="wrapper">
    <p class="item active">
      <img :src="icons" alt="" class="icon" />
      Home
    </p>
    <p class="next">></p>
    <p class="item">Application Center</p>
    <p class="next">> ... ></p>
    <p class="item">Application List</p>
    <p class="next">></p>
    <p class="item active">An Application</p>
  </div>
</template>

<script>
import icons from '../../static/images/icons/Home.png';

export default {
  data() {
    return {
      icons: icons,
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 50px;
  padding: 0 80px;
  display: flex;
  align-items: center;
}
.item,
.next {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0 5px;
}
.item.active {
  color: rgba(0, 0, 0, 0.85);
}
.icon {
  margin-right: 3px;
  height: 14px;
  width: 14px;
}
</style>
