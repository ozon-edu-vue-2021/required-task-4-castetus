<template>
  <div class="form">
    <h2 class="form__heading">Личные данные</h2>
    <text-input :date="false" label="Фамилия" width="30"></text-input>
    <text-input :date="false" label="Имя" width="30"></text-input>
    <text-input :date="false" label="Отчество" width="30"></text-input>
    <text-input :date="false" label="Дата рождения" width="50"></text-input>
    <text-input :date="false" label="E-mail" width="100"></text-input>
    <radio-input
      heading="Пол"
      :options="genderOptions"
      name="gender"
    ></radio-input>
    <h2 class="form__heading">Паспортные данные</h2>
    <select-input label="Гражданство" :options="citizenships"></select-input>
    <template>
      <text-input :date="false" label="Серия паспорта" width="20"></text-input>
      <text-input :date="false" label="Номер паспорта" width="20"></text-input>
      <text-input :date="true" label="Дата выдачи" width="50"></text-input>
    </template>
    <template>
      <text-input
        :date="false"
        label="Фамилия на латинице"
        width="48"
      ></text-input>
      <text-input :date="false" label="Имя на латинице" width="48"></text-input>
      <text-input :date="false" label="Номер паспорта" width="20"></text-input>
      <select-input
        label="Страна выдачи"
        :options="citizenships"
        width="20"
      ></select-input>
      <select-input
        width="50"
        label="Тип паспорта"
        :options="passportTypes"
      ></select-input>
    </template>
    <radio-input
      heading="Меняли ли фамилию или имя?"
      :options="changeOptions"
      name="changed"
    ></radio-input>
    <template>
      <text-input :date="false" label="Фамилия" width="45"></text-input>
      <text-input :date="false" label="Имя" width="45"></text-input>
    </template>
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
import RadioInput from './RadioInput.vue';
import SelectInput from './SelectInput.vue';
import citizenships from '../assets/data/citizenships.json';
import passportTypes from '../assets/data/passport-types.json';

export default {
  name: 'Form',
  components: {
    TextInput,
    RadioInput,
    SelectInput,
  },
  data() {
    return {
      genderOptions: [
        {
          id: 1,
          label: 'Мужской',
          value: 'male',
        },
        {
          id: 2,
          label: 'Женский',
          value: 'female',
        },
      ],
      changeOptions: [
        {
          id: 1,
          label: 'Нет',
          value: 'no',
        },
        {
          id: 2,
          label: 'Да',
          value: 'yes',
        },
      ],
      citizenships: [],
      passportTypes: [],
    };
  },
  created() {
    this.citizenships = citizenships;
    this.passportTypes = passportTypes;
  },
  methods: {},
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__heading {
    width: 100%;
    text-align: left;
  }
}
</style>
