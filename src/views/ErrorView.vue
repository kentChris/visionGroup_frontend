<template>
    <Header />
    <Error />
</template>
<script>
import Header from '../components/Header.vue'
import Error from '../components/Error.vue'

export default {
    name: 'VueError',
    components: {Header, Error}   
}
</script>
