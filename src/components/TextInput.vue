<template>
  <div class="input-group input-group_text" :style="elWidth">
    <label for="" class="input-group__label" :class="{ invalid: isError }">
      {{ label }}
    </label>
    <input
      v-model="value"
      @input="emitData"
      @blur="validate"
      type="text"
      class="input-group__input"
      :class="{ input_invalid: isError }"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { widthMixin } from '../mixins';

export default {
  name: 'TextInput',
  props: {
    label: String,
    width: String,
    isDate: Boolean,
    reg: RegExp,
  },
  mixins: [widthMixin],
  data() {
    return {
      value: '',
      isError: false,
    };
  },
  computed: {
    placeholder() {
      return this.isDate ? 'дд.мм.гггг' : '';
    },
  },
  methods: {
    emitData() {
      this.$emit('input', this.value);
    },
    validate() {
      if (this.isDate) {
        this.isError = !this.checkDate();
      } else {
        this.isError = !this.value.match(this.reg);
      }
    },
    checkDate() {
      const date = Date.parse(this.value);
      if (!isNaN(date) && date < Date.now()) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &__label {
    margin-bottom: 10px;
    color: grey;
  }
  &__input {
    height: 30px;
    border: 2px solid #aaa;
    border-radius: 5px;
    outline: none;
  }
}
.invalid {
  color: red;
}
.input_invalid {
  color: red;
  border-color: red;
}
</style>
