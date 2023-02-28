<template>
	
		<modal :showing="showing" @close="close" :color="type">
			<template #body>
                <div class="">
                    <h2 :class="getClassTitle" class="text-xl font-bold ">
                        <icon-vue 
                            name="shield-exclamation"    
                            class="h-10 w-10 text-red-600"
                        v-if="props.type=='error'">
                        
                        </icon-vue>  
                        <icon-vue 
                            name="clipboard-document"    
                            class="h-10 w-10 text-blue-600 text-opacity-30"
                        v-if="props.type=='info'">
                        
                        </icon-vue>   
                        <icon-vue 
                            name="check"    
                            class="h-10 w-10 text-green-600 text-opacity-60"
                        v-if="props.type=='success'">
                        
                        </icon-vue>   
                        
                        {{ title || "Alert" }}
                    </h2>
                    <div class=" p-1 min-h-fit flex content_alert ">
                        <div class="text-danger">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, amet repellat! Ab distinctio asperiores nisi ut esse inventore, aspernatur ratione possimus suscipit nobis, quam tempore culpa sapiente, labore eveniet numquam.
                           Repellendus quibusdam temporibus numquam neque earum deserunt quos beatae minima impedit debitis rem omnis voluptatem officia atque velit saepe quia harum corporis distinctio veniam vitae, amet dolore ducimus eius. Exercitationem?
                           Ipsum asperiores officiis ut quidem neque, sed veritatis minima, a rem obcaecati sint eum alias nulla laboriosam enim, dolores eveniet. Distinctio consequuntur sed ipsam tempora amet quae voluptas! Tempore, quis.
                           Cumque sed laborum et ipsum at amet quia ex. Explicabo et minus quis fuga. Soluta ipsum quas aliquam totam, doloribus asperiores sit quia quod adipisci voluptates, quae velit veniam veritatis.
                           Quibusdam ullam reprehenderit perferendis quidem voluptas iste necessitatibus recusandae nostrum nesciunt est! Dolores pariatur fuga excepturi molestiae harum odio nisi dolor aliquid exercitationem quasi perspiciatis esse, beatae aperiam perferendis? Nemo.
                        </div>
                    </div>
                </div>
			</template>
			<template #footer>
				<div class="flex justify-end">
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
.content_alert{
     animation: miAnimacion 1s ease-out;
}
@keyframes miAnimacion {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
