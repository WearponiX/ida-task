
<template>
  <div class="header">
    <h1 class="header__heading">Добавление товара</h1>
    <span class="header__select-wrapper">
      <!-- <span class="header__select-wrapper" :class="{'header__select-wrapper':}"> -->
      <select class="header__select" v-model="sortBy" @change="sortList">
        <option value="">По умолчанию</option>
        <option value="price-asc">По возрастанию цены</option>
        <option value="price-des">По убыванию цены</option>
        <option value="name">По наименованию</option>
      </select>
    </span>
  </div>
</template>

<style lang="scss">
@import '~assets/sass/header.scss';
</style>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      sortBy: '',
    }
  },
  methods: {
    ...mapActions({
      sortItemList: 'sortItemList',
    }),
    sortList() {
      this.sortItemList(this.sortBy)
    },
  },
}
</script>
