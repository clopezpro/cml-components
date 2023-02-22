<template>
	<div class="content_input" :class="{'error_input':error==true}">
		<div style="display:flex">
			<div
				v-if="name_icon || icon "
				class="icon_input "
			>
				<icon-vue :name="name_icon || icon" clas></icon-vue>
			</div>
			<label v-if="label"  class="label_input" :class="{'label_input_icon':name_icon || icon}">
				{{label}}
			</label>
			<input
				v-if="type != 'textarea'"
				:id="id"
				class="input_vue"
				@focus="onFocus=true"
				:value="modelValue"
				@input="emitValue('modelValue', $event)"
				:class="classInput"
				:disabled="disabled"
				:autocomplete="!autocomplete ? autocomplete : 'true'"
				:maxlength="maxlength"
				:name="name"
				:type="type"
				:placeholder="placeholder"
			/>
			<textarea
				v-if="type == 'textarea'"
				:id="id"
				class="input_vue input_texarea"
				:value="modelValue"
				@input="(event) => $emit('update:modelValue', event.target.value)"
				:class="{ 'input_vue-right': btn.active }"
				:autocomplete="!autocomplete ? autocomplete : 'true'"
				:maxlength="maxlength"
				:cols="cols"
				:rows="rows"
				:name="name"
				:type="type"
				:placeholder="placeholder"
			>
			</textarea>
			<button
				v-if="btn"
				type="button"
				@click="$emit('btnClick')"
				:title="btn.title"
				class="btn_input"
				:class="btn.class || ''"
			>
				<icon-vue :name="btn.icon || 'plus'" :title="btn.title || 'btn'"></icon-vue>
			</button>
		</div>
		<div v-if="messages.length>0">
			<div v-for="msj in messages" class="mensage_input">
				{{ msj }}
			</div>
		</div>
		<div v-if="rules.length>0 && onFocus" >
			<div class="mensage_input">
				{{ rulesValidation }}
			</div>
		</div>
	</div>
</template>

<script>
import { ref,computed } from "vue";
import IconVue from "./icons.vue";
export default {
	name: "inputVue",
	components: {
		"icon-vue":IconVue,
	},
	props: {
		modelValue: { default: null },
		maxlength: {  default: null, required: false },
		name_icon: { type: String, default: null, required: false },
		icon: { type: String, default: null, required: false },
		background: { type: String, default: "", required: false },
		color: { type: String, default: "", required: false },
		messages: { type: Array, default: () => [], required: false },
		cols: { type: String, default: "1", required: false },
		rows: { type: String, default: "1", required: false },
		label: { type: String, default: "", required: false },
		type: { type: String, default: "text", required: false },
		autocomplete: { type: String, default: undefined, required: false },
		disabled: { type: Boolean, default: undefined, required: false },
		placeholder: { type: String, default: "", required: false },
		name: { type: String, default: "", required: false },
		error: { type: Boolean, default:  undefined, required: false },
		rules: { type: Array, default: () => [], required: false },
		btn: {
			type: Object,
			default:null,
		},
		modelModifiers: {
			default: () => ({}),
		},
	},
	emits: ["update:modelValue","btnClick"],
	setup(props, context) {
		const id = ref(context._uid);
		const onFocus=ref(false);

		const emitValue = (propName, evt) => {
			let val = evt.target.value;
			

			if (props.modelModifiers["trim"]) {
				val = val.trim();
			}
			context.emit(`update:${propName}`, val);
		};

		const classInput = computed(() => {
			return {
				"input_vue-btn":props.btn ,
				"labelinput_input":props.label ,
			};
		});
		

	  const rulesValidation=	computed(() => {
			return props.rules.map((rule) => {
				const result = rule(props.modelValue);
				if (result !== true) {
					return result;
				}
			}).find(rs=>rs!=null);
		});

		return { id, emitValue,rulesValidation,onFocus,classInput};
	},
};
</script>
<style lang="postcss" scoped>
	.input_vue {
			@apply appearance-none border 
			h-fit
			w-full
			rounded-sm
			pl-1
			bg-white
			focus:bg-white 
			focus:border-gray-500  
			leading-tight 
			focus:outline-none
			placeholder:opacity-50
			dark:text-indigo-300
			border-gray-300
			dark:border-gray-600
			dark:bg-dark-1 
			dark:focus:bg-dark-2
	}
	.input_vue-btn{
		@apply rounded-r-sm;
	}
	.error_input{
		 @apply  bg-red-500 bg-opacity-10 !important ;
	}
	.error_input .labelinput_input{
		 @apply  bg-red-500 bg-opacity-10 text-red-500 !important ;
	}
	.error_input .icon_input{
		 @apply  bg-red-500 bg-opacity-10 text-red-500 !important ;
	}

	.mensage_input{
		@apply text-xs text-red-500 p-0 m-0	block
	}
	.input_texarea{
		@apply w-full md:py-2 md:px-4 text-xs;
	}
	.labelinput_input{
		@apply pt-3;
	}
	.label_input{
		@apply absolute left-1 dark:text-gray-400 items-center text-xs ;
	}
	.label_input_icon{
		@apply left-6;
	}
	.content_input{
		@apply dark:bg-dark-2 bg-gray-200 rounded-md rounded-b-none relative  h-fit  dark:border-b  dark:border-gray-700 rounded-r-md ;
	}
	
	.icon_input{
		@apply  items-center justify-center dark:text-green-200 flex;
	}
	.btn_input{
		@apply flex-1 h-8 md:h-10 border border-gray-300 dark:rounded-r-md bg-gray-300 border-l-0  dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-600;
	}
</style>
