<template>
  <HeaderComp />

  <main>

    <router-view></router-view>
    <!-- <ProjectList /> -->
  </main>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
/* import ProjectList from './pages/ProjectList.vue'; */

export default {
  name: 'App',
  components: {
    /*   */
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