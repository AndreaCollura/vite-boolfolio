<template>
  <HeaderComp />

  <main>
    <IndexComp />
  </main>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import IndexComp from './components/IndexComp.vue';

export default {
  name: 'App',
  components: {
    IndexComp,
    HeaderComp
  },
  data() {
    return {

    }
  },
  methods: {

  },


}
</script>

<style lang="scss" scoped></style>