<template>
  <div class="input-group input-group_radio">
    <h4 class="form__heading form__heading_small">{{ heading }}</h4>
    <div class="input-group__button" v-for="option in options" :key="option.id">
      <input
        type="radio"
        :name="name"
        id=""
        v-model="selectedValue"
        :value="option.value"
        @change="select"
      />
      <label for="input-group__label_radio">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioInput',
  props: {
    name: String,
    heading: String,
    options: Array,
    defaultValue: Boolean || String,
  },
  data() {
    return {
      selectedValue: null,
    };
  },
  created() {
    if (this.defaultValue !== undefined) {
      this.selectedValue = this.defaultValue;
    }
  },
  methods: {
    select() {
      this.$emit('input', this.selectedValue);
    },
  },
};
</script>

<style scoped>
.input-group_radio {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
}
.input-group__button {
  width: fit-content;
}
.input-group__label_radio {
  margin-right: 10px;
}
</style>
