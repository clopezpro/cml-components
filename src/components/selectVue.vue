<template>
	<div class="content_select">
		<label :for="id" v-if="label != ''" class="flex align-middle text-xs ml-1 dark:text-gray-200">{{
			label
		}}</label>
		<div style="display:flex">
			<div
				v-if="name_icon != ''"
				class="icon_select"
			>
				<icon-vue :name="name_icon" ></icon-vue>
			</div>
			<select v-model="valueLocal" class="input_select" :class="classSelect">
				<option v-if="options.length == 0" value="">NO EXISTEN {{ name }}`s</option>
				<!-- <option v-else disabled selected :value="null">
					Selecciona una opción
				</option> -->
				<option v-if="placeholder && options.length > 0" value="" disabled>
					{{ placeholder }}
				</option>
				<option v-for="(option, i) in options" :value="getValue(option)" :key="i">
					{{ showOption(option) }}
				</option>
			</select>
			<button
				v-if="btn"
				type="button"
				@click="$emit('btnClick')"
				:title="btn.title"
				class="btn_select"
				:class="btn.class || ''"
			>
				<icon-vue :name="btn.icon || 'plus'" :title="btn.title || 'btn'"></icon-vue>
			</button>
		</div>
	</div>
</template>
<script>
import { watch, ref, toRef,computed } from "vue";
import IconVue from "./icons.vue";

export default {
	name: "selectVue",
	components: {
		"icon-vue": IconVue,
	},
	props: {
		name_icon: { type: String, default: "", required: false },
		defaultValue: { type: String, default: null, required: false },
		modelValue: { default: "", required: false },
		placeholder: { type: String, default: false, required: false },
		label: { type: String, default: "", required: false },
		name: String,
		size: { type: String, default: null, required: false },
		btn: {
			type: Object,
			default:null,
		},
		options: {
			type: Array,
			required: false,
			default() {
				return [];
			},
		},
		returnObject: {
			type: Boolean,
			default: false,
		},
		keyName: {
			type: Array,
			required: false,
			default() {
				return ["name"];
			},
		},
	},
	setup(props, { emit }) {
		const valueProp = toRef(props, "modelValue");
		const valueLocal = ref(valueProp.value);
		const id = ref(Math.random().toString(36) + "slc");
		const showOption = (option) => {
			const text = props.keyName
				.map((name) => {
					return option[name];
				})
				.toString()
				.replace(",", " ");
			if (text.length > 0) {
				return text;
			} else {
				return option;
			}
		};
		const getValue = (option) => {
			if (props.returnObject) {
				return option;
			} else {
				return option._id ? option._id : showOption(option);
			}
		};
		watch(valueProp, (newDATA) => {
			if (valueProp.value != valueLocal.value && newDATA) {
				valueLocal.value = newDATA;
			}
		});
		watch(valueLocal, () => {
			if (valueProp.value != valueLocal.value) {
				emit("update:modelValue", valueLocal.value);
			}
		});

		const classSelect = computed(() => {
			return {
				"input_select-btn": props.btn ,
				"input_select-placeholder": props.placeholder && (props.modelValue=='' || props.modelValue==null) ,
				"input_select-small":props.size=='small' ,
				"input_select-right": props.btn.active,
			};
		});
		return { valueLocal, getValue, showOption, classSelect, id };
	},
};
</script>
<style lang="postcss" scoped>

.input_select-small{
	@apply text-xs py-2 px-1
}
.input_select-right {
	@apply border-r-0  rounded-r-none !important;
}
.input_select-placeholder{
	@apply text-gray-400 !important;
}
.input_select{
	@apply  w-full dark:text-indigo-300 dark:bg-slate-800 dark:border-t dark:border-gray-700  py-1 px-2 border-b rounded-r-md dark:border-b-gray-700
}
.input_select-btn{
	@apply border-r-0  rounded-r-none !important;
}
.icon_select{
	@apply flex-nowrap flex items-center justify-center dark:text-gray-200;
}
.btn_select{
	@apply flex-1 h-8 md:h-10 border border-gray-300 rounded-r-md bg-gray-300 border-l-0  dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-600;
}
.content_select{
	@apply dark:bg-dark-2 bg-gray-200 rounded-md
}


</style>