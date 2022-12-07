<template>
  <div class="main-wrapper">
    <TheHeader :showProgress="true" :showBrands="true" />
    <TheForm />
    <TheFooter />
    <router-view />
  </div>
</template>

<script>
import TheFooter from "../components/layouts/TheFooter.vue";
import TheHeader from "../components/layouts/TheHeader.vue";
import TheForm from "../components/layouts/TheForm.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader,
    TheForm,
  },
};
</script>