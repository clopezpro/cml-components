
<template>
    <button   class="btnVue  h-fit"  :class="[getStyleClasses,$attrs.class]" >
        <slot></slot>
    </button>

</template>
<script setup>
    import { defineProps,computed } from 'vue'
    const props = defineProps({
        color: {
            type: String,
            default: null
        }   
    })

    const getStyleClasses = computed(() => {
			return [props.color].map((val) => val && `is-${val}`);
    })
</script>
<style lang="postcss" scoped>
    .btnVue.is-green{
        @apply    bg-green-500 
        hover:bg-green-400 
        dark:bg-green-500 
        dark:hover:bg-green-600 
         

    }
    .btnVue.is-blue{
        @apply bg-blue-600 
        hover:bg-blue-400 
        dark:bg-blue-600 
        dark:hover:bg-blue-600 
         
    } 
     .btnVue.is-orange{
        @apply   bg-orange-500 
        hover:bg-orange-400 
        dark:bg-orange-500 
        dark:hover:bg-orange-600 
         
    } 
    .btnVue.is-purple{
        @apply   bg-purple-500 
        hover:bg-purple-400 
        dark:bg-purple-500 
        dark:hover:bg-purple-600 
         
    } 
    .btnVue.is-yellow{
        @apply   bg-yellow-500 
        hover:bg-yellow-400 
        dark:bg-yellow-500 
        dark:hover:bg-yellow-600 
         
    } 
    .btnVue.is-gray{
        @apply   bg-gray-500 
        hover:bg-gray-400 
        dark:bg-gray-500 
        dark:hover:bg-gray-600 
         
    }  
    .btnVue.is-white{
        @apply  bg-white
        hover:bg-white 
        dark:bg-white 
        dark:hover:bg-white 
         
    }


    .btnVue{
        @apply dark:text-gray-800  
       
        text-opacity-90 
        bg-purple-500 
        hover:bg-purple-400 
        dark:bg-green-500 
        dark:hover:bg-green-600 
        
        text-white 
        font-bold 
        px-2 
        py-1
        rounded
    }
    
</style>