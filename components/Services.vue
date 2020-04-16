<template>
  <div class="services">
    <div class="services__wrapper">
      <div class="services-text">Услуги</div>
      <div class="services-bars">
        <div class="services-bars_line"></div>
        <service-bar v-for="(bar, index) in bars" :key="index" :count="bar.count" :text="bar.text"/>
      </div>
      <div class="services-count">Всего
        <span class="services-count__total">15</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceBar from "./ServiceBar";

  export default {
    components: {ServiceBar},
    props: ['bars']
  }
</script>

<style lang="scss">
  .services {
    width: 318px;
    margin-left: auto;
    max-width: 100%;
    margin-top: -8px;
  }

  .services-text {
    text-align: right;
    border-bottom: 1px solid #DADADA;
    padding-bottom: 7px;
    margin-bottom: 16px;
    padding-right: 25px;
  }

  .services-bars {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 15px;
    position: relative;
  }

  .services-bars_line {
    position: absolute;
    border-left: 1px solid rgba(51, 51, 51, 0.2);
    height: 82px;
    top: 0;
    z-index: 2;
  }

  .services-count {
    padding-top: 7px;
    border-top: 1px solid #DADADA;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-right: 25px;
  }
</style>
