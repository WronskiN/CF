<template>
  <div class="formSelect">
    <select @input="$emit('update:modelValue', $event.target.value)">
      <option>Please Select</option>
      <option
        v-for="option in options"
        :value="option.label"
        :key="option.id"
        v-bind="$attrs"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    modelValue: [String, Number],
  },
};
</script>

<style scoped>
.formSelect {
  width: 343px;
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.formSelect select {
  appearance: none;
  width: 343px;
  height: 56px;
  padding-left: 10px;
  border: 2px solid transparent;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 16px #cccccc;
  border-radius: 5px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #001429;
  z-index: 1;
  display: flex;
}
.formSelect select::-ms-expand {
  display: none;
}
.formSelect::after {
  content: url("../../assets/option-arrow.svg");
  color: #216cf6;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 10;
}
.formSelect select option {
  color: #000 !important;
}
.formSelect select:active,
.formSelect select:focus,
.formSelect select:hover {
  border: 2px solid #216cf6 !important;
  outline: none;
}

@media (min-width: 1024px) {
  .formSelect select {
    width: 326px;
  }
}
@media (min-width: 1440px) {
  .formSelect select {
    width: 343px;
  }
}
</style>