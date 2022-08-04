<template>
  <transition-group name="new-item" mode="out-in" class="list-items" tag="div">
    <ItemCard
      v-for="(item, key) in getItemList"
      :key="item.id"
      :item="item"
    ></ItemCard>
  </transition-group>
</template>

<style lang="scss">
@import '~assets/sass/listItems.scss';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    addNewItem() {},
  },
  computed: {
    ...mapGetters({
      getItemList: 'getItemList',
    }),
  },
}
</script>
