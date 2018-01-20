<template>
  <div class="hello">
    <button v-if="!isLoggedIn()" @click="login()"> login </button>
    <button v-if="isLoggedIn()" @click="logout()"> logout </button>
    <p v-if="isLoggedIn()"> someone is logged in </p>
  </div>
</template>

<script>
import Auth from '@/Auth/AuthService'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    login () {
      Auth.login()
    },
    logout () {
      Auth.logout()
    },
    isLoggedIn () { 
      return Auth.isLoggedIn() 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
