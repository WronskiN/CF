<template>
  <div class="thankYouWrapper">
    <TheHeader :showProgress="false" :showBrands="false" />
    <div class="main">
      <h1>Thank you for using CF Broadband</h1>
      <div class="thankYouMessage">
        <h2>What's next?</h2>
        <p>An advisor from CF Broadband will call you shortly.</p>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.thankYouWrapper {
  background: white;
}
.main {
  width: 100%;
  height: calc(100vh - 210px);
}
h1 {
  height: 71px;
  color: #fff;
  background: #001429;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
}
h2,
p {
  color: #000000;
  text-align: center;
}
h2 {
  font-size: 24px;
}
p {
  font-size: 18px;
}
@media (min-width: 768px) {
  .main {
    height: calc(100vh - 160px);
  }
}
</style>