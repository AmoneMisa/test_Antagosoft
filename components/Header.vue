<template>
    <div class="header">
      <div class="header__avatar">
        <div class="avatar">
          <img src="/avatar/75e823313c999f5e437da758b7e14205.png" class="avatar__img">
        </div>
      </div>
      <div class="header__text-block">
        <div class="text-block">
          <div class="text-block__name">{{ name }}</div>
          <div class="text-block__status">{{ status }}</div>
          <div class="text-block__tagline">{{ tagline }}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return  {
          name: "Вероника Ростова",
          status: "Менеджер по продажам",
          tagline: "Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
        }
      }
    }
</script>

<style lang="scss">

  .header {
    padding: 14px 0 0 0;
    display: flex;
    position: relative;
  }

  .avatar {
    background-color: #c4c4c4;
    position: relative;
    z-index: 2;
    height: 124px;
    width: 124px;
    border-radius: 100%;
    overflow: hidden;
  }

  .avatar__img {
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    border-radius: 100%;
    margin-left: -10px;
  }

  .text-block {
    margin-left: 10px;
  }

  .text-block__name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  .text-block__status {
    color: #808080;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .text-block__tagline {
    background-color: #FFFBC8;
    border: 1px solid #DADADA;
    border-radius: 5px;
    max-height: 52px;
    padding: 10px 0 10px 31px;
    line-height: 20px;
    z-index: 1;
    position: absolute;
    left: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 420px) {

    .text-block__tagline {
      font-size: 12px;
      max-height: 70px;
    }
  }

  @media (min-width: 421px) and (max-width: 580px) {
    .text-block__tagline {
      max-height: 70px;
    }
  }

</style>
