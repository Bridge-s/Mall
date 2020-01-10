<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
      <!--      <img src="~assets/img/cart/tick.svg" alt="">-->
      <check-button
        :is-checked="isSelectAll"
        @click.native="selectAllClick"
        class="check-all"
      ></check-button>
      <span class="text">全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{ totalPrice }}</span>
    </div>
    <div class="calc" @click="calcClick">去付款({{ calcCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked === true;
        })
        .reduce((prev, item) => {
          return prev + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    calcCount() {
      return this.cartList.filter(item => {
        return item.checked === true;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.filter(item => !item.checked).length;
    }
  },
  methods: {
    selectAllClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择购买的商品', 1500)
      }
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 49px;
  background: #eeeeee;
  display: flex;
  line-height: 46px;
  text-align: center;
}
.total-check {
  width: 25%;
  display: flex;
  margin-left: 5px;
  /* margin-top: 5px */
}
.total-price {
  width: 50%;
}
.calc {
  width: 25%;
  background-color: #ff5028;
  color: #fff;
}
.text {
  margin-left: 5px
}
.check-all {
  margin-top: 2px
}
</style>
