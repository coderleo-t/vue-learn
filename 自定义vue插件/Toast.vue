<style>
  .toast {
    display: fixed;
    left: 50%;
    top: 50%;
    background-color: black;
    opacity: 0.5;
    height: 100px;
    width: 100px;
    transform: translate(-50% -50%);
  }
</style>
<template>
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
</template>
<script>
export default {
   data() {
      return {
        message:'',
        isShow: true
      }
   },
   methods: {
     show(message, delay=1000) {
       this.message = message
       this.isShow = true
       setTimeout(() => {
         this.isShow = false
         this.message = ''
       }, delay)
     }
   }
}
</script>
