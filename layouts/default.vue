<template>

  <Loading v-if="showHideSpinner" />
  <AppHeader/>
  <slot/>
  <AppFooter/>

</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Loading from '../components/Loading'

export default {
  components: {
    AppHeader,
    AppFooter,
    Loading,
  },

  head() {
    return {
      title: this.title
    }
  },

  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true
    };
  }
}
</script>

<style>

</style>