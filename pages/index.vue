<template>
  <div class="main">
    <transition name="preloading">
      <div class="preloader" v-if="showPreloader" @click.prevent>
        <p class="preloader__caption">Загрузка...</p>
      </div>
    </transition>
    <Header></Header>
    <AddItem></AddItem>
    <ListItems></ListItems>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      showPreloader: true,
    }
  },
  methods: {
    ...mapActions({
      loadItemList: 'loadItemList',
    }),
  },
  mounted() {
    this.loadItemList()
    setTimeout(() => {
      this.showPreloader = false
    }, 1000)
  },
})
</script>
