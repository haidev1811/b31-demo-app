<template>
  <div>
    <div class="top">
      <div class="list-nav">
        <div class="item-nav active">Thông tin khách hàng</div>
        <div class="item-nav">Sản phẩm dịch vụ</div>
        <div class="item-nav" @click="nextTicketPage">Dịch vụ Ticket</div>
      </div>
    </div>
    <div class="content">
      <div class="user">
        <img :src="user1" alt="" />
        <div class="status-list">
          <div class="status-item vip">vip</div>
          <div class="status-item active">active</div>
          <div class="status-item other">tpin</div>
        </div>
      </div>
      <div class="contact">
        <div class="contact-item">
          <img :src="letter" alt="" />
          <p>Mail</p>
        </div>
        <div class="contact-item">
          <img :src="contact" alt="" />
          <p>Số CMND</p>
        </div>
        <div class="contact-item">
          <img :src="phone" alt="" />
          <p>Số điện thoại</p>
        </div>
        <div class="contact-item">
          <img :src="photo" alt="" />
          <p>Edit Profile Photo.</p>
        </div>
        <div class="contact-item">
          <img :src="question" alt="" />
          <p>Help.</p>
        </div>
        <div class="contact-item">
          <img :src="image" alt="" />
          <p>Change Wallpaper.</p>
        </div>
        <div class="contact-item last">
          <p>Invite.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user1 from '../../static/images/users/user-1.png';
import letter from '../../static/images/icons/letter.png';
import contact from '../../static/images/icons/contact.png';
import phone from '../../static/images/icons/phone.png';
import image from '../../static/images/icons/image.png';
import question from '../../static/images/icons/question.png';
import photo from '../../static/images/icons/photo.png';

export default {
  data() {
    return {
      user1,
      letter,
      contact,
      phone,
      image,
      question,
      photo,
    };
  },
  methods: {
    nextTicketPage() {
      this.$router.replace('/ticket');
    },
  },
};
</script>

<style scoped>
.top {
  border-bottom: 1px solid #dddbda;
}
.list-nav {
  display: flex;
  align-items: center;
}
.item-nav {
  font-size: 14px;
  line-height: 18px;
  color: #080707;
  padding: 4px 7px;
  cursor: pointer;
  transition: all 0.25s ease-in;
}
.item-nav.active {
  font-weight: 600;
  border-bottom: 2px solid #0078d4;
}
.item-nav:hover {
  font-weight: 600;
  transition: all 0.25s ease-out;
}
.content {
  padding: 15px 10px;
}
.user {
  display: flex;
  align-items: center;
}
.user img {
  max-width: 80px;
  min-height: 80px;
}
.status-list {
  display: flex;
  margin-left: 5px;
}
.status-item {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 16px;
  padding: 2px 16px;
  margin: 0 5px;
}
.status-item.vip {
  background-color: #dd7a01;
  color: #fff;
}
.status-item.active {
  background-color: #0b8e11;
  color: #fff;
}
.status-item.other {
  background-color: #ffdada;
  color: #bd524e;
}
.contact {
  margin: 20px 15px;
}
.contact-item {
  display: flex;
}
.contact-item img {
  width: 26px;
  height: 22px;
  margin-right: 10px;
}
.contact-item p {
  font-size: 16px;
  font-weight: 500;
}
.contact-item.last p {
  margin-left: 35px;
}
</style>
