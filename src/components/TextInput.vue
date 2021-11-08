<template>
  <div class="input-group input-group_text" :style="elWidth">
    <label for="" class="input-group__label">{{ label }}</label>
    <input type="text" class="input-group__input" :placeholder="placeholder" />
  </div>
</template>

<script>
import { widthMixin } from '../mixins';

export default {
  name: 'TextInput',
  props: {
    label: String,
    placeholder: String,
    width: String,
    isDate: Boolean,
  },
  mixins: [widthMixin],
  data() {
    return {
      value: '',
    };
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
</style>
