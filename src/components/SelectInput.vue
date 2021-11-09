<template>
  <div
    class="input-group input-group_select select-input"
    :style="elWidth"
    v-click-outside="close"
  >
    <label for="" class="input-group__label">{{ label }}</label>
    <input
      type="text"
      ref="input"
      class="input-group__input select-input__field"
      @input="setValue()"
      v-model="searchString"
      @focus="open()"
    />
    <ul class="select-input__list" v-show="isOpen">
      <li
        class="select-input__list-item"
        v-for="option in visibleOptions"
        :key="option.id"
        @click="select(option)"
      >
        {{ option[textField] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { widthMixin } from '../mixins';
import ClickOutside from 'vue-click-outside';
import { debounce } from '../debounce';

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
      visibleOptions: [],
    };
  },
  created() {
    this.visibleOptions = JSON.parse(JSON.stringify(this.options));
  },
  methods: {
    setVisibleOptions() {
      this.visibleOptions = this.options.filter((option) =>
        option[this.textField]
          ?.toLowerCase()
          .includes(this.searchString.toLowerCase())
      );
    },
    select(selected) {
      this.searchString = this.options.find((option) => option === selected)[
        this.textField
      ];
      this.$refs.input.value = this.searchString;
      this.close();
      this.$emit('select', selected.id);
    },
    open() {
      this.$refs.input.value = '';
      this.searchString = '';
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    setValue() {
      const deb = debounce(this.setVisibleOptions, 3000);
      deb();
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
