<template>
  <div class="formInputWrapper">
    <label v-if="forName" :for="forName">{{ label }}</label>
    <input :type="type" :name="name" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "placeholder", "label", "forName", "type"],
};
</script>

<style scoped>
.formInputWrapper {
  display: flex;
  flex-wrap: wrap;
}
.formInputWrapper input {
  border: 2px solid transparent;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 16px #cccccc;
  border-radius: 5px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #001429;
  width: 343px;
  height: 56px;
  margin: 1rem 0;
}
.formInputWrapper input::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #a3a3a3;
  padding-left: 10px;
}
.formInputWrapper input:active,
.formInputWrapper input:focus,
.formInputWrapper input:hover {
  border: 2px solid #216cf6 !important;
  outline: none;
}
.formInputWrapper label {
  font-weight: bold;
}

@media (min-width: 1024px) {
  .formInputWrapper input {
    width: 326px;
  }
}
@media (min-width: 1440px) {
  .formInputWrapper input {
    width: 343px;
  }
}
</style>