<template>
  <div class="page__wrapper">
    <div class="page__content">
      <div class="wrapper">
        <custom-header/>
        <div class="main-content">
          <services :bars="bars"/>
          <last-comments :comments="comments"/>
        </div>
      </div>
    </div>
    <div class="page__footer">
      <div class="wrapper">
        <write-comment @create-message="pushMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "~/components/Header";
  import WriteComment from "~/components/WriteComment";
  import Services from "~/components/Services";
  import LastComments from "~/components/LastComments";

  export default {
    components: {
      Services, LastComments, 'custom-header': Header,
      WriteComment
    },
    data() {
      return {
        comments: [{
          name: "Самуил",
          comment_time: "13 октября 2011",
          text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
        },
          {
            name: "Лилия Семёновна",
            comment_time: "14 октября 2011",
            text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц " +
              "жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами? "
          },
          {
            name: "Лилия Семёновна",
            comment_time: "14 октября 2011",
            text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц " +
              "жизненно стабилизирует кинетический момент?"
          }],
        bars: [{text: "Ручное бронирование", count: 11}, {text: "Пакетные туры", count: 3}, {text: "Отели", count: 1}],
      }
    },
    methods: {
      pushMessage(msg) {
        this.comments.push(msg);
      }
    }
  }
</script>

<style lang="scss">
  body {
    box-sizing: border-box;
    font-family: Arial, Tahoma, sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  input, button, textarea {
    font-size: 14px;
    font-family: Tahoma, Arial, sans-serif;
    outline: none;
  }

  textarea {
    resize: none;
  }

  .page__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  .page__content {
    flex: auto;
  }

  .page__footer {
    background-color: #f2f2f2;
    flex: none;
  }

  .wrapper {
    width: 490px;
    margin: 0 auto;
  }

  .comments {
    margin-bottom: 22px;
  }

  @media (min-width: 320px) and (max-width: 720px) {
    .wrapper {
      width: calc(100vw - 20px);
    }
  }
</style>
