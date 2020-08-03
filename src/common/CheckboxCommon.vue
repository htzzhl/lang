<template>
  <input type="checkbox" class="checkbox" @change="checkboxToggle" :checked='value' />
</template>

<script>

  export default {
    name:'Checkbox',
    props: {
      value:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      checkboxToggle(){
        this.$emit('input',!this.value)
        this.$emit('change')
      }

    }
  }
</script>
<style>
</style>
