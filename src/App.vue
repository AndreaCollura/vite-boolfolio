<template>
  <LoadingComp v-if="isLoading"></LoadingComp>
  <HeaderComp />

  <main>

    <router-view></router-view>
    <!-- <ProjectList /> -->
  </main>

  <FooterComp />
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import LoadingComp from './components/LoadingComp.vue';
/* import ProjectList from './pages/ProjectList.vue'; */

export default {
  name: 'App',
  components: {
    /*   */
    HeaderComp,
    LoadingComp,
    FooterComp
  },
  data() {
    return {
      isLoading: true

    }
  },
  methods: {

  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


}
</script>

<style lang="scss" scoped></style>