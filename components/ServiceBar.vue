<template>
  <div class="service-bar">
    <div class="service-bar__wrapper">
      <div class="service-bar__text">{{ text }}</div>
      <div class="service-bar__progress"
           :class="{'service-bar__progress_low': count === 1,
                   'service-bar__progress_mid': count === 3}">
      </div>
    </div>
    <div class="service-bar__counts">{{ count }}</div>
  </div>
</template>

<script>
  export default {
    props: ['count', 'text'],

  }
</script>

<style lang="scss">
  .service-bar {
    display: flex;
    align-items: center;
  }

  .service-bar__wrapper {
    border-radius: 0 3px 3px 0;
    margin-bottom: 2px;
    padding-left: 6px;
    position: relative;
    flex: auto;
  }

  .service-bar__text {
    line-height: 26px;
    font-size: 13px;
  }

  .service-bar__progress {
    position: absolute;
    background-color: #B1E19B;
    max-width: 230px;
    min-width: 10px;
    height: 26px;
    top: 0;
    left: 0;
    z-index: -1;
    width: 219px;
  }

  .service-bar__progress_low {
    background-color: #ACE2F8;
    width: 36px;
  }

  .service-bar__progress_mid {
    background-color: #ACE2F8;
    width: 54px;
  }

  .service-bar__counts {
    margin-left: 10px;
    width: 41px;
    font-size: 13px;
    font-weight: bold;
    line-height: 15px;
    text-align: right;
    flex: none;
    padding-right: 25px;
  }

</style>
