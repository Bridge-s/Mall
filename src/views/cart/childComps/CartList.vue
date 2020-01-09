<template>
  <div class="cart-list">
    <scroll>

    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped></style>
