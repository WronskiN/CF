<template>
  <div class="main-wrapper">
    <!-- <TheHeader />
    <TheForm />
    <TheFooter /> -->
    <!-- <div class="">
      <router-link to="/">HomePage</router-link>
      <router-link to="thank-you">Thank You</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
// import TheFooter from "./components/layouts/TheFooter.vue";
// import TheHeader from "./components/layouts/TheHeader.vue";
// import TheForm from "./components/layouts/TheForm.vue";

export default {
  name: "App",
  // components: {
  //   TheFooter,
  //   TheHeader,
  //   TheForm,
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;1,700&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3 {
  letter-spacing: -0.01em;
  color: #001429;
}
h1 {
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 1rem;
}
h2 {
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
}
h3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
}
.main-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(310.31deg, #dbe8ff 3.6%, #f9fafb 37.88%), #f9fafb;
}
@media (min-width: 768px) {
  h1 {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -1px;
  }
  h2 {
    font-size: 32px;
    line-height: 42px;
  }
  h3 {
    font-size: 24px;
  }
}
#app {
  font-family: "Inter", sans-serif;
  /* font-family: "Lora", serif;
  font-family: "Montserrat", sans-serif; */
  width: 100%;
}
</style>
