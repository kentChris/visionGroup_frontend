<template>
    <div class="main">
        <div class="login">
            <img src="https://www.visiongroup.co/wp-content/uploads/vision-site-assets-logo-01.svg" />
            <input type='text' placeholder="Username..." name='username' id='loginInput' class='userInput' v-model="username" required />
            <input type='password' placeholder="Password..." name='password' id='loginInput' class='passInput' v-model="password" required />
            <button class='button-9' @click="submit">Submit</button>
        </div>
    </div>
    
</template>
<script>
export default{
    name: 'VueLogin',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async submit() {
            const requestOptions = { method: "post",
                                     headers:{
                                    "Content-Type": "application/json",
                                    "x-access-token": "token-value",
                                    },
                                     body: JSON.stringify({ username: this.username, password: this.password})};
            const response = await fetch("http://localhost:3000/api/login", requestOptions);
            const data = await response.json();

            if(data.code != 200) {window.location.href = '/error'; return}
            
            const token = "Bearer "+data.token;
            this.set(token);
            window.location.href = '/private';
            
        },
        set(token) {
            return this.$store.commit('SET_TOKEN', token);
        }
    }
}
</script>
<style>
.main{
    max-width: 101%;
    max-height: 975px;
    background-image: url("../assets/Background.png");
    width: 101%;
    margin-left: -0.5%;
    margin-top: -0.5%;
    height: 980px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden;
}

.login{
    background-color: #FFFFFFCC;
    width: 40%;
    margin: 0 auto;
    margin-top:15%;
}

.login img{
    margin-left: 2%;
    margin-top: 1.5%;
}

#loginInput{
  font-family: inherit;
  width: 90%;
  margin-left: 5%;
  margin-top: 2.5%;
  border: 0;
  border-bottom: 2px solid rgb(116, 116, 143);
  outline: 0;
  font-size: 1.2rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

#loginInput:focus {
    border-bottom: 2px solid rgb(60, 60, 189)
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}



</style>