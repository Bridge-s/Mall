<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar"

import Scroll from 'components/common/scroll/Scroll';

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  activated() {
      this.$refs.scroll.refresh();
    }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 89px - 49px);
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
