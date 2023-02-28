<template>
	
		<modal :showing="showing" @close="close" :color="type">
			<template #body>
                <div class="">
                    <h2 :class="getClassTitle" class="title_alert ">
                        <IconVue 
                            name="shield-exclamation"    
                            class="iconAlert  is_error "
                        v-if="props.type=='error'">
                        
                        </IconVue>  
                        <IconVue 
                            name="clipboard-document"    
                            class="iconAlert is_info"
                        v-if="props.type=='info'">
                        
                        </IconVue>   
                        <IconVue 
                            name="check"    
                            class="iconAlert is_success"
                        v-if="props.type=='success'">
                        
                        </IconVue>   
                        
                        {{ title || "Alert" }}
                    </h2>
                    <div class=" content_alert ">
                        <div class="">
                          {{ message }}
                        </div>
                    </div>
                </div>
			</template>
			<template #footer>
				<div class="btn_close_content">
					<VButton :color="getColorBtn" @click="close()"> Cerrar </VButton>
				</div>
			</template>
		</modal>
</template>
<script setup>
import IconVue from "./icons.vue";
import VButton from "./VButton.vue";
import modal from "./modal.vue";
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
	title: {
		required: false,
		default: null,
		type: String,
	},
	showing: {
		required: true,
		type: Boolean,
	},
    message:{
        required: true,
        type: String,
    },
	type: {
		required: false,
		default: "",
		type: String,
	},
});
const emit = defineEmits(["close", "update:showing"]);
const close = () => {
	emit("update:showing", false);
	emit("close");
};
const getColorBtn=computed(()=>{
   switch(props.type)
   {
      case "danger":
      case "error":
          return "red";                
      break; 
      case "info":
          return "blue";                
      break;
      default:
            return 'green'
      break;
   }
})
const getClassTitle = computed(() => {
	return [props.type].map((val) => val && `is-${val}`);
});
</script>
<style lang="postcss">
.iconAlert{
    @apply h-10 w-10;
}
.iconAlert.is_info{
    @apply text-blue-600 text-opacity-30;
}
.iconAlert.is_error{
    @apply text-red-600 ;
}
.iconAlert.is_success{
    @apply text-green-600 text-opacity-60 ;
}
.btn_close_content{
    @apply flex justify-end
}
.title_alert{
    @apply text-xl font-bold;
}
.content_alert{
    @apply p-1 min-h-fit flex ;
}
.content_alert{
     animation: miAnimacion 1s ease-out;
}

@keyframes miAnimacion {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
