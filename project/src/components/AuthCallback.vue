<template>
  <div class="authcallback">
   
  </div>
</template>

<script>
import Auth from '@/Auth/AuthService'

export default {
  name: 'AuthCallback',
  created () {
    console.log('started?')
    Auth.handleAuthentication()
    console.log('done?')
  }
}
</script>
