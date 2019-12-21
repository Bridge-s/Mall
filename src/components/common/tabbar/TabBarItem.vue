<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item-active-icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        return this.$router.replace(this.path);
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
}
.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>
