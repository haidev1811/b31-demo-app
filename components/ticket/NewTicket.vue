<template>
  <div>
    <div class="top">
      <p>Tạo ticket</p>
      <img :src="closeIcon" alt="" />
    </div>
    <div class="content">
      <div class="subject">
        <p>Subject:</p>
        <input type="text" placeholder="Placeholder" />
      </div>
      <b-container class="list">
        <b-row>
          <b-col lg="4">
            <label for="type-workcode">Workcode</label>
            <b-form-input
              type="text"
              id="type-workcode"
              class="type-input"
              :class="{ invalid: !workcode.isValid }"
              placeholder="Placeholder"
              v-model.trim="workcode.val"
              @blur="clearVadility('workcode')"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label>Trạng thái</label>
            <b-form-select
              :options="optionsStatus"
              class="type-input"
              :class="{ invalid: !status.isValid }"
              v-model="status.val"
              @change="clearVadility('status')"
            ></b-form-select>
          </b-col>
          <b-col lg="4">
            <label>Ưu tiên</label>
            <b-form-select
              :options="optionsPrioritize"
              class="type-input"
              :class="{ invalid: !prioritize.isValid }"
              v-model="prioritize.val"
              @change="clearVadility('prioritize')"
            ></b-form-select>
          </b-col>
          <b-col lg="4">
            <label for="type-date">Ngày tạo</label>
            <b-form-input
              type="date"
              id="type-date"
              class="type-input"
              :class="{ invalid: !createdDate.isValid }"
              v-model.trim="createdDate.val"
              @blur="clearVadility('createdDate')"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-user">Người tạo</label>
            <b-form-input
              type="text"
              id="type-user"
              class="type-input"
              :class="{ invalid: !createdUser.isValid }"
              placeholder="Placeholder"
              v-model.trim="createdUser.val"
              @blur="clearVadility('createdUser')"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-handling">Bộ phận xử lý</label>
            <b-form-input
              type="text"
              id="type-handling"
              class="type-input"
              placeholder="Placeholder"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-receive">Kênh tiếp nhận</label>
            <b-form-input
              type="text"
              id="type-receive"
              class="type-input"
              :class="{ invalid: !receive.isValid }"
              placeholder="Placeholder"
              v-model.trim="receive.val"
              @blur="clearVadility('receive')"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-ticketdate">Ngày gửi ticket</label>
            <b-form-input
              type="date"
              id="type-ticketdate"
              class="type-input"
              placeholder="Placeholder"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-exp">Ngày hết hạn</label>
            <b-form-input
              type="date"
              id="type-exp"
              class="type-input"
              placeholder="Placeholder"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-firstdate">Ngày phản hồi đầu tiên</label>
            <b-form-input
              type="date"
              id="type-firstdate"
              class="type-input"
              placeholder="Placeholder"
            ></b-form-input>
          </b-col>
          <b-col lg="4">
            <label for="type-lastdate">Ngày phản hồi cuối cùng</label>
            <b-form-input
              type="date"
              id="type-lastdate"
              class="type-input"
              placeholder="Placeholder"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <div class="note">
        <label for="type-note">Nhập ghi chú</label>
        <b-form-textarea
          id="type-note"
          class="type-textarea"
          placeholder="Ghi chú xử lý"
          rows="3"
          max-rows="3"
        ></b-form-textarea>
      </div>
      <div class="actions">
        <button class="cancel" @click="cancelForm">Hủy</button>
        <button class="add" @click="submitForm">
          Tạo ticket
          <img :src="nextIcon" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import closeIcon from '../../static/images/icons/close.png';
import nextIcon from '../../static/images/icons/next.png';

export default {
  data() {
    return {
      closeIcon,
      nextIcon,
      workcode: {
        val: '',
        isValid: true,
      },
      status: {
        val: null,
        isValid: true,
      },
      prioritize: {
        val: null,
        isValid: true,
      },
      createdDate: {
        val: '',
        isValid: true,
      },
      createdUser: {
        val: '',
        isValid: true,
      },
      receive: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
      optionsStatus: [
        { value: null, text: 'Placeholder' },
        { value: 'active', text: 'Mở' },
        { value: 'pending', text: 'Chờ' },
        { value: 'close', text: 'Đóng' },
      ],
      optionsPrioritize: [
        { value: null, text: 'Placeholder' },
        { value: 'high', text: 'Cao' },
        { value: 'medium', text: 'Trung bình' },
        { value: 'low', text: 'Thấp' },
      ],
    };
  },
  methods: {
    clearVadility(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.workcode.val === '') {
        this.workcode.isValid = false;
        this.formIsValid = false;
      }
      if (this.status.val === null) {
        this.status.isValid = false;
        this.formIsValid = false;
      }
      if (this.prioritize.val === null) {
        this.prioritize.isValid = false;
        this.formIsValid = false;
      }
      if (this.createdDate.val === '') {
        this.createdDate.isValid = false;
        this.formIsValid = false;
      }
      if (this.createdUser.val === '') {
        this.createdUser.isValid = false;
        this.formIsValid = false;
      }
      if (this.receive.val === '') {
        this.receive.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        workcode: this.workcode.val,
        status: this.status.val,
        prioritize: this.prioritize.val,
        createdDate: this.createdDate.val,
        createdUser: this.createdUser.val,
        receive: this.receive.val,
      };

      this.$store.dispatch('ticket/addTicket', formData);

      this.$router.replace('/ticket');
    },
    cancelForm() {
      this.workcode.val = '';
      this.status.val = null;
      this.prioritize.val = null;
      this.createdDate.val = '';
      this.createdUser.val = '';
      this.receive.val = '';
      this.ticketDate.val = '';
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 10px;
  border-bottom: 1px solid #dddbda;
}
.top p {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}
.top img {
  height: 10px;
  width: 10px;
}
.content {
  padding: 15px 10px;
}
.subject {
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-bottom: 2px solid #0078d4;
}
.subject p {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}
.subject input {
  border: none;
  flex: 1;
  padding: 2px 3px;
  font-size: 14px;
}
.subject input:focus {
  outline: none;
}
.list {
  padding: 10px 0;
}
label {
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
}
.type-input:focus,
.type-textarea:focus {
  box-shadow: 0px 4px 4px rgba(0, 112, 210, 0.5);
}
.invalid {
  box-shadow: 0px 4px 4px rgba(238, 19, 19, 0.5);
}
.note {
  display: flex;
  flex-direction: column;
}
.type-textarea {
  background-color: #faffbb;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}
button {
  border: none;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  border-radius: 5px;
  margin-left: 5px;
}
button.cancel {
  background-color: #dd7a01;
}
button.add {
  background-color: #048448;
}
button img {
  width: 15px;
  height: 15px;
  margin-left: 3px;
}
</style>
