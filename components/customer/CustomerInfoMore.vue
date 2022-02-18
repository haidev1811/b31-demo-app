<template>
  <div>
    <div class="top">
      <p>Thông tin khách hàng</p>
      <input type="text" placeholder="Tìm kiếm" />
    </div>
    <div class="info-list">
      <img :src="infoBigIcon" alt="" />
      <img :src="messageBigIcon" alt="" />
      <img :src="letterBigIcon" alt="" />
      <img :src="listBigIcon" alt="" />
    </div>
    <div class="content">
      <div class="user">
        <img :src="user1" alt="" />
        <div>
          <div class="info">
            <p>Đặng Long</p>
            <img :src="qr" alt="" />
          </div>
          <div class="status-list">
            <div class="status-item vip">vip</div>
            <div class="status-item active">active</div>
            <div class="status-item other">tpin</div>
          </div>
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
import infoBigIcon from '../../static/images/icons/info-big.png';
import messageBigIcon from '../../static/images/icons/message-big.png';
import letterBigIcon from '../../static/images/icons/letter-big.png';
import listBigIcon from '../../static/images/icons/list-big.png';
import user1 from '../../static/images/users/user-1.png';
import letter from '../../static/images/icons/letter.png';
import contact from '../../static/images/icons/contact.png';
import phone from '../../static/images/icons/phone.png';
import image from '../../static/images/icons/image.png';
import question from '../../static/images/icons/question.png';
import photo from '../../static/images/icons/photo.png';
import qr from '../../static/images/icons/qr.png';

export default {
  data() {
    return {
      infoBigIcon,
      messageBigIcon,
      letterBigIcon,
      listBigIcon,
      user1,
      letter,
      contact,
      phone,
      image,
      question,
      photo,
      qr,
    };
  },
};
</script>

<style scoped>
.top {
  border-bottom: 2px solid #df6106;
  display: flex;
}
.top p {
  flex: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #fac8a4;
  background: linear-gradient(
    180deg,
    rgba(250, 200, 164, 0.296) 0%,
    rgba(255, 182, 33, 0) 100%
  );
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.top input {
  border: none;
  border-top: 1px solid #dddbda;
  border-left: 1px solid #dddbda;
  font-size: 14px;
  padding-left: 10px;
}
.top input:focus {
  outline: none;
}
.info-list {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}
.info-list img {
  cursor: pointer;
  max-width: 50px;
  max-height: 40px;
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
  max-height: 80px;
}
.status-list {
  display: flex;
  margin-left: 5px;
}
.status-item {
  font-size: 14px;
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
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info p {
  font-size: 18px;
  font-weight: 700;
  margin: 0 10px 5px 10px;
}
.info img {
  width: 15px;
  height: 15px;
}
</style>
