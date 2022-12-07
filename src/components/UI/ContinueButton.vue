<template>
  <button class="continueButton" :data-step="step" :style="style">
    Continue
  </button>
</template>

<script>
export default {
  props: ["step", "style"],
};
</script>

<style scoped>
.continueButton {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 203px;
  height: 56px;
  background: #f25a38;
  border-radius: 100px;
  font-weight: 700;
  line-height: 32px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
}
.continueButton:hover {
  background: #eb350c;
}
</style>