<template>
  <div class="item-card" tabindex="0">
    <span
      class="item-card__delete"
      @click.prevent="deleteItemFromList(item.id)"
    ></span>
    <img class="item-card__image" :src="item.link" alt="Фото товара" />
    <h2 class="item-card__heading">{{ item.name }}</h2>
    <p class="item-card__description">{{ item.description }}</p>
    <p class="item-card__price">
      {{ item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} руб.
    </p>
  </div>
</template>

<style lang="scss">
@import '~assets/sass/itemCard.scss';
</style>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      deleteItem: 'deleteItem',
    }),
    deleteItemFromList(id) {
      this.deleteItem(id)
    },
  },
  computed: {},
}
</script>
