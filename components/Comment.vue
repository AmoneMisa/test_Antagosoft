<template>
  <div class="comment">
    <div class="comment__data">
      <span class="comment__name">{{ name }}</span>
      <span class="comment__time" >{{ comment_time }}</span>
    </div>
    <div class="comment__body">
      <div class="comment__text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'comment_time', 'text']
  }
</script>

<style lang="scss">
  .comment {
    margin-bottom: 12px;
  }

  .comment__data {
    margin-bottom: 10px;
  }

  .comment__name {
    font-size: 16px;
    font-weight: bold;
  }

  .comment__time {
    color: #808080;
    font-size: 12px;
  }

  .comment__body {
    background-color: #F2FBFF;
    border: 1px solid #C4CBCF;
    box-shadow: 0 4px 10px rgba(128, 128, 128, 0.1);
    padding: 11px 17px 11px 21px;
    position: relative;

    &::before {
      height: 0;
      width: 0;
      content: '';
      border-right: 10px solid transparent;
      border-bottom: 10px solid #C4CBCF;
      padding-top: 10px;
      position: absolute;
      top: -20px;
    }

    &::after {
      height: 0;
      width: 0;
      content: '';
      border-right: 8px solid transparent;
      border-bottom: 9px solid #F2FBFF;
      padding-top: 10px;
      position: absolute;
      top: -18px;
      left: 22px;
      z-index: 2;
    }
  }

  .comment__text {

  }
</style>
