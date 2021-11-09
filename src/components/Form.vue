<template>
  <form class="form" @submit.prevent="send">
    <h2 class="form__heading">Личные данные</h2>
    <text-input
      :date="false"
      label="Фамилия"
      width="30"
      v-model="formFields.surName"
      :reg="regExps.cyrillic"
    ></text-input>
    <text-input
      :date="false"
      label="Имя"
      width="30"
      v-model="formFields.name"
      :reg="regExps.cyrillic"
    ></text-input>
    <text-input
      :date="false"
      label="Отчество"
      width="30"
      v-model="formFields.patrName"
      :reg="regExps.cyrillic"
    ></text-input>
    <text-input
      :isDate="true"
      label="Дата рождения"
      width="50"
      v-model="formFields.birthdate"
    ></text-input>
    <text-input
      :date="false"
      label="E-mail"
      width="100"
      v-model="formFields.email"
      :reg="regExps.email"
    ></text-input>
    <radio-input
      heading="Пол"
      :options="genderOptions"
      name="gender"
    ></radio-input>
    <h2 class="form__heading">Паспортные данные</h2>
    <select-input
      label="Гражданство"
      width="61"
      :options="citizenships"
      @select="setCitizenship"
      textField="nationality"
    ></select-input>
    <template v-if="isRF">
      <text-input
        :date="false"
        label="Серия паспорта"
        width="20"
        v-model="formFields.passport.serie"
        :reg="regExps.fourDigit"
      ></text-input>
      <text-input
        :date="false"
        label="Номер паспорта"
        width="20"
        v-model="formFields.passport.code"
        :reg="regExps.sixDigit"
      ></text-input>
      <text-input
        :isDate="true"
        label="Дата выдачи"
        width="50"
        v-model="formFields.passportDate"
      ></text-input>
    </template>
    <template v-else>
      <text-input
        :date="false"
        label="Фамилия на латинице"
        width="48"
        v-model="formFields.latinSurname"
        :reg="regExps.latin"
      ></text-input>
      <text-input
        :date="false"
        label="Имя на латинице"
        width="48"
        v-model="formFields.latinName"
        :reg="regExps.latin"
      ></text-input>
      <text-input
        :date="false"
        label="Номер паспорта"
        width="20"
        v-model="formFields.passport.code"
      ></text-input>
      <select-input
        label="Страна выдачи"
        textField="nationality"
        :options="citizenships"
        width="20"
        @select="setPassportCountry"
      ></select-input>
      <select-input
        width="50"
        label="Тип паспорта"
        textField="type"
        :options="passportTypes"
      ></select-input>
    </template>
    <radio-input
      heading="Меняли ли фамилию или имя?"
      :options="changeOptions"
      name="changed"
      v-model="formFields.isNameChanged"
      :defaultValue="formFields.isNameChanged"
    ></radio-input>
    <template v-if="formFields.isNameChanged">
      <text-input
        :date="false"
        label="Фамилия"
        width="45"
        v-model="formFields.prevSurname"
        :reg="regExps.cyrillic"
      ></text-input>
      <text-input
        :date="false"
        label="Имя"
        width="45"
        v-model="formFields.prevName"
        :reg="regExps.cyrillic"
      ></text-input>
    </template>
    <button class="form__button" type="submit">Отправить</button>
  </form>
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
          value: false,
        },
        {
          id: 2,
          label: 'Да',
          value: true,
        },
      ],
      citizenships: [],
      passportTypes: [],
      isRF: true,
      regExps: {
        cyrillic: /^[А-Яа-я]+$/,
        latin: /^[A-Za-z]+$/,
        email:
          /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        fourDigit: /^\d{4}$/,
        sixDigit: /^\d{6}$/,
      },
      formFields: {
        name: '',
        surName: '',
        patrName: '',
        birthdate: '',
        email: '',
        gender: '',
        citizenship: '',
        passport: {
          serie: '',
          code: '',
        },
        passportDate: '',
        latinName: '',
        latinSurname: '',
        passportType: '',
        passportCountry: '',
        isNameChanged: false,
        prevName: '',
        prevSurname: '',
      },
    };
  },
  created() {
    this.citizenships = citizenships;
    this.passportTypes = passportTypes;
  },
  methods: {
    setCitizenship(id) {
      this.isRF = id === 8604;
      this.formFields.citizenship = this.citizenships.find(
        (el) => el.id === id
      )?.nationality;
    },
    setPassportCountry(id) {
      this.formFields.passportCountry = this.citizenships.find(
        (el) => el.id === id
      )?.nationality;
    },
    send() {
      console.log(JSON.stringify(this.formFields));
    },
  },
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
  &__button {
    color: #fff;
    background-color: blue;
    border-radius: 5px;
    padding: 10px;
    border: none;
    justify-self: flex-end;
    cursor: pointer;
  }
}
</style>
