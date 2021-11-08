<template>
  <div
    class="input-group input-group_select select-input"
    :style="elWidth"
    v-click-outside="close"
  >
    <label for="" class="input-group__label">{{ label }}</label>
    <input
      type="text"
      class="input-group__input"
      ref="input"
      v-model="searchString"
      @focus="open()"
    />
    <ul class="select-input__list" v-show="isOpen">
      <li
        class="select-input__list-item"
        v-for="option in visibleOptions"
        :key="option.id"
        @click="select(option.id)"
      >
        {{ option[textField] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { widthMixin } from '../mixins';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'SelectInput',
  props: {
    label: String,
    options: Array,
    width: String,
    textField: String,
  },
  mixins: [widthMixin],
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpen: false,
      searchString: '',
      test: 'test',
    };
  },
  computed: {
    visibleOptions() {
      return this.options.filter((option) =>
        option.nationality
          ?.toLowerCase()
          .includes(this.searchString.toLowerCase())
      );
    },
  },
  methods: {
    select(id) {
      this.searchString = this.options.find(
        (option) => option.id === id
      )?.nationality;
      this.close();
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
.select-input {
  position: relative;
  &__list {
    z-index: 100;
    padding-left: 0;
    position: absolute;
    top: 42px;
    width: 100%;
  }
  &__list-item {
    list-style-type: none;
    padding: 2px 5px;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }
}
</style>
