<template>
  <div class="tabbar tabs-ios show-tabbar">
    <router-link to="/index" class="tab-button">
      <div class="tab-button-icon">

      </div>
      <span class="tab-button-text">Home</span>
    </router-link>
    <router-link to="/info" class="tab-button">
      <div class="tab-button-icon">

      </div>
      <span class="tab-button-text">Info</span>
    </router-link>
    <router-link to="/user" class="tab-button">
      <div class="tab-button-icon">

      </div>
      <span class="tab-button-text">User</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'y-footer',
    data() {
      return {

      }
    },
    computed: {

    }
  }

</script>
<style>
  .tabbar {
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 10;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    opacity: 0;
  }

  .tabs-ios.tabbar {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-top: 0.55px solid rgba(0, 0, 0, 0.3);
    background: #f8f8f8;
  }

  .tabbar.show-tabbar {
    opacity: 1;
  }

  .tab-button {
    margin: 0;
    text-align: center;
    border-radius: 0;
    position: relative;
    z-index: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 0;
    text-decoration: none;
    background: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .tabs-ios .tab-button {
    max-width: 2.4rem;
    min-height: 0.49rem;
    font-size: 0.1rem;
    font-weight: 500;
    color: #8c8c8c;
    padding: 0 0.02rem;
    line-height: 1.2;
  }

  .tab-button-icon{
    line-height: 1;
  }
  .tab-button-text, .tab-button-icon {
    overflow: hidden;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    min-width: 0.26rem;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tabs-ios .tab-button-icon {
    margin-top: 5px;
    margin-bottom: 1px;
    min-width: 0.35rem;
    height: 0.26rem;
    font-size: 0.3rem;
    color: #8c8c8c;
  }

  .tabs-ios .tab-button-text {
    margin-top: 0;
    margin-bottom: 1px;
    min-height: 11px;
  }
</style>
