<template>
  <ul class="ageOptions">
    <li
      class="ageOption"
      v-for="option in options"
      :key="option.id"
      :data-age="option.age"
      @click="$emit('ageChange', option.age)"
    >
      <h5>{{ option.age }}</h5>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      selectedAge: "",
    };
  },
  methods: {
    selectAgeOption(age) {
      this.selectedAge = age;
      this.$emit("selectedAge", this.selectedAge);
    },
  },
};
</script>

<style scoped>
.ageOptions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px 0px;
}
.ageOption {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 7px;
  position: relative;
  width: 49%;
  height: 56px;
  background: #ffffff;
  border: 2px solid #216cf6;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.ageOption:hover {
  background: #216cf6;
  color: #fff;
}
.ageOption.active {
  background: #216cf6;
  color: #fff;
}
h5 {
  font-size: 16px;
  font-weight: 400;
  color: #001429;
  line-height: 18px;
}
</style>