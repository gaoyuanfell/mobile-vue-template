<template>
  <div class="tabbar tabs-ios show-tabbar">


    <!-- <template v-for="m in menu">
      <router-link :to="{path: m.route}" class="tab-button">
        <div class="tab-button-icon" :class="{'active': path(m.route), 'icon-index': m.code === 'ZCWAP_ADS_HOME' || m.code === 'ZCMOBI_WAP_V4_US_HOME', 'icon-user': m.code === 'ZCMOBI_WAP_V4_US_USERS', 'icon-data': m.code === 'ZCWAP_ADS_DATA', 'icon-campaign': m.code === 'ZCWAP_ADS_CAMPAIGN', 'icon-creative': m.code === 'ZCWAP_ADS_CREATIVE'}">

        </div>
        <span class="tab-button-text">{{m.name}}</span>
      </router-link>
    </template> -->

    <router-link to="/index" class="tab-button">
      <div class="tab-button-icon icon-index" :class="{'active': path('index')}">

      </div>
      <span class="tab-button-text">首页</span>
    </router-link>
    <router-link to="/info" class="tab-button">
      <div class="tab-button-icon icon-data" :class="{'active': path('info')}">

      </div>
      <span class="tab-button-text">数据</span>
    </router-link>
    <router-link to="/user" class="tab-button">
      <div class="tab-button-icon icon-campaign" :class="{'active': path('user')}">

      </div>
      <span class="tab-button-text">用户</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "y-footer",
  data() {
    return {};
  },
  computed: mapState({
    menu: state => state.menu
  }),
  methods: {
    path(path) {
      return !!~this.$route.path.indexOf(path);
    }
  }
};
</script>
<style scoped lang="less">
.icon-index {
  // background: url("../assets/img/index.png") no-repeat center;
  // background-size: 100%;
  // &.active {
  //   background: url("../assets/img/index_active.png") no-repeat center;
  //   background-size: 100%;
  // }
}

.icon-data {
  // background: url("../assets/img/data.png") no-repeat center;
  // background-size: 100%;
  // &.active {
  //   background: url("../assets/img/data_active.png") no-repeat center;
  //   background-size: 100%;
  // }
}

.icon-user {
  // background: url("../assets/img/user.png") no-repeat center;
  // background-size: 100%;
  // &.active {
  //   background: url("../assets/img/user_active.png") no-repeat center;
  //   background-size: 100%;
  // }
}


.icon-campaign {
  // background: url("../assets/img/campaign.png") no-repeat center;
  // background-size: 100%;
  // &.active {
  //   background: url("../assets/img/campaign_active.png") no-repeat center;
  //   background-size: 100%;
  // }
}

.icon-creative {
  // background: url("../assets/img/creative.png") no-repeat center;
  // background-size: 100%;
  // &.active {
  //   background: url("../assets/img/creative_active.png") no-repeat center;
  //   background-size: 100%;
  // }
}

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
  max-width: 2.4rem * 2;
  min-height: 0.49rem * 2;
  font-size: 0.1rem * 2;
  font-weight: 500;
  color: #8c8c8c;
  padding: 0 0.02rem * 2;
  line-height: 1.2;
}

.tab-button-icon {
  line-height: 1;
}
.tab-button-text,
.tab-button-icon {
  overflow: hidden;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  min-width: 0.26rem * 2;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tabs-ios .tab-button-icon {
  margin-top: 2px;
  margin-bottom: 3px;
  height: 0.26rem * 2;
  color: #8c8c8c;
}

.tabs-ios .tab-button-text {
  margin-top: 0;
  margin-bottom: 1px;
  min-height: 11px;
}
</style>
