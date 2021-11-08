<template>
  <div class="input-group input-group_select" :style="elWidth"></div>
</template>

<script>
import { widthMixin } from '../mixins';

export default {
  name: 'SelectInput',
  props: {
    label: String,
    options: Array,
    width: String,
  },
  mixins: [widthMixin],
  data() {
    return {};
  },
};
</script>

<style></style>
