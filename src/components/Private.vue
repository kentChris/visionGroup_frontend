<template>
    <div class="private">
        <video loop muted autoplay class='background'>
        <source src='https://www.visiongroup.co/wp-content/uploads/vision-intro-video-5.mp4' type='video/mp4'>
        </video>

        <h1>Name: {{this.$store.state.user.username}} <br> This is Private Page  </h1>
    </div>
</template>
<script>
export default {
    name: 'VuePrivate',
    async created() {
        const requestOptions = { method: "get",
                                     headers:{
                                    "Content-Type": "application/json",
                                    "x-access-token": "token-value",
                                    "Authorization": `${this.$store.state.token}`
                                    }}

        const response = await fetch('http://localhost:3000/api/private', requestOptions);
        const data = await response.json();

        console.log(data.code);
        if(data.code === 403) {window.location.href='/error'; return;}
        this.setUser(data.user);
        
    },
    methods: {
        setUser(user){
            return this.$store.commit('SET_USER', user);
        }
    }
}
</script>
<style>
.background{
    position: relative;
    margin-left: -0.5%;
    width: 101%;
}

.private h1 {
    color: white;
    position: absolute;
    margin-top: -35%;
    margin-left: 43%;
    text-align: center;
}
</style>