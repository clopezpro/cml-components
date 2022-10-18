<template >
  <div  v-show="name==isActive.name">
    <slot></slot>
  </div>
</template>
<script>
import {inject} from 'vue' 
  export default {
    props: {
      name: {
        type: String,
        default: 'Tab'
      },
      title: {
        type: String,
        default: null
      },
      selected: { default: false }
    },
    setup(){
        const isActive=inject("isActive");
        return {isActive}
    },
  }
</script>