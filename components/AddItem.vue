<template>
  <form
    class="add-item"
    :class="{ 'add-item-flip': isSent }"
    @submit.prevent="addItemInList(itemData)"
    novalidate="true"
  >
    <label class="add-item__field add-item__field--name">
      <p class="add-item__field-caption">Наименование товара</p>
      <input
        @change="validationErrors.name = ''"
        class="add-item__field-input add-item__field-input--name"
        :class="{ 'add-item__field-input--error': validationErrors.name }"
        type="text"
        placeholder="Введите наименование товара"
        v-model="itemData.name"
        required
      />
      <p class="add-item__error" v-if="validationErrors.name">
        {{ validationErrors.name }}
      </p>
    </label>
    <label class="add-item__field add-item__field--description">
      <p class="add-item__field-caption">Описание товара</p>
      <textarea
        class="add-item__field-input add-item__field-input--description"
        placeholder="Введите описание товара"
        v-model="itemData.description"
        resize="none"
        rows="4"
      />
    </label>
    <label class="add-item__field add-item__field--link">
      <p class="add-item__field-caption">Ссылка на изображение товара</p>
      <input
        @change="validationErrors.link = ''"
        class="add-item__field-input add-item__field-input--link"
        :class="{ 'add-item__field-input--error': validationErrors.link }"
        type="text"
        placeholder="Введите ссылку"
        v-model="itemData.link"
        required
      />
      <!-- :value="itemData.link"
        @change="itemData.link" -->
      <p class="add-item__error" v-if="validationErrors.link">
        {{ validationErrors.link }}
      </p>
    </label>
    <label class="add-item__field add-item__field--price">
      <p class="add-item__field-caption">Цена товара</p>
      <input
        @change="validationErrors.price = ''"
        class="add-item__field-input add-item__field-input--price"
        :class="{ 'add-item__field-input--error': validationErrors.price }"
        type="text"
        placeholder="Введите цену"
        v-model="itemData.price"
        required
      />
    </label>
    <p class="add-item__error" v-if="validationErrors.price">
      {{ validationErrors.price }}
    </p>

    <button
      class="add-item__submit"
      :class="{
        'add-item__submit--locked': hasValidationErrors,
      }"
      :disabled="hasValidationErrors"
      type="submit"
    >
      Добавить товар
    </button>
  </form>
</template>

<style lang="scss">
@import '~assets/sass/addItem.scss';
</style>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isSent: false,
      itemData: {
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: 'https://sofia-photography.bg/wp-content/uploads/2021/02/photo-1526170375885-4d8ecf77b99f-2.jpg',
        price: '10000',
      },
      validationErrors: {
        name: '',
        link: '',
        price: '',
      },
    }
  },
  methods: {
    ...mapActions({
      addItem: 'addItem',
    }),
    addItemInList() {
      // обнуляем список ошибок
      this.validationErrors.name = ''
      this.validationErrors.link = ''
      this.validationErrors.price = ''
      // проверяем на ошибки в заполнении
      if (this.itemData.name == '') {
        this.validationErrors.name = 'Поле является обязательным'
      }
      if (this.itemData.link == '') {
        this.validationErrors.link = 'Поле является обязательным'
      }
      if (this.itemData.price == '') {
        this.validationErrors.price = 'Поле является обязательным'
      } else if (!/^\d|\s+$/.test(this.itemData.price)) {
        this.validationErrors.price = 'Цена должна быть числом'
      }
      // если ошибки есть то останавливаем код
      if (this.hasValidationErrors) return

      this.addItem(this.itemData)

      this.isSent = true
      setTimeout(() => {
        this.isSent = false
      }, 1000)
      this.itemData = {
        // name: 'Наименование товара',
        // description:
        //   'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        // link: 'https://sofia-photography.bg/wp-content/uploads/2021/02/photo-1526170375885-4d8ecf77b99f-2.jpg',
        // price: '10000',

        name: '',
        description: '',
        link: '',
        price: '',
      }
    },
  },
  watch: {
    price(val) {
      return (this.itemData.price = val
        .toString()
        .replace(/\s+/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
    },
  },
  computed: {
    price() {
      return this.itemData.price
    },
    hasValidationErrors() {
      return (
        this.validationErrors.name != '' ||
        this.validationErrors.link != '' ||
        this.validationErrors.price != '' ||
        this.itemData.name == '' ||
        this.itemData.link == '' ||
        this.itemData.price == ''
      )
    },
  },
}
</script>
