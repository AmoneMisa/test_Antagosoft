<template>
  <div class="user-comment">
    <form class="user-comment-form" @submit.prevent="sendMessage" @keyup.ctrl.enter="sendMessage">
      <div class="user-comment-form__item user-comment-form__textarea">
        <textarea class="user-comment__field" v-model="message"></textarea>
      </div>
      <div class="user-comment-form__item">
        <button class="user-comment-form__button">Написать консультанту</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
      sendMessage() {
        if (this.message.length === 0) {
          return;
        }
        this.$emit('create-message', {name: "Аноним", comment_time: "16 апреля 2020", text: this.message});
        this.message = '';
      }
    }
  }
</script>

<style lang="scss">
  .user-comment-form__item {
    margin: 0 auto;
    margin-bottom: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-comment-form__textarea {
    margin: 30px auto 22px auto;
  }

  .user-comment__field {
    border: 1px solid black;
    border-radius: 2px;
    height: 61px;
    width: 100%;
    padding: 10px;
  }

  .user-comment-form__button {
    border-radius: 23px;
    background-color: #fdd639;
    width: 281px;
    height: 43px;
    border: none;
    font-size: 16px;
   text-align: center;
    font-weight: bold;
  }
</style>
