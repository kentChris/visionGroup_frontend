<template>
  <Header />
  <Private />
</template>
<script>
import Header from '../components/Header.vue'
import Private from '../components/Private.vue'
export default {
  name:'PrivateView',
  components: { Header, Private },
}
</script>