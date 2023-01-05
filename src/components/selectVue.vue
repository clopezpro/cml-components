<template>
	<div class="dark:bg-dark-2 bg-gray-200 rounded-md">
		<label :for="id" v-if="label != ''" class="flex align-middle text-xs ml-1 dark:text-gray-200">{{
			label
		}}</label>
		<div class="flex">
			<div
				v-if="name_icon != ''"
				class="flex-nowrap flex items-center justify-center dark:text-gray-200"
			>
				<icon-vue :name="name_icon" ></icon-vue>
			</div>
			<select v-model="valueLocal" :class="getStyleClasses()">
				<option v-if="options.length == 0" value="">NO EXISTEN {{ name }}`s</option>
				<option v-else disabled selected :value="null">
					Selecciona una opción
				</option>
				<option v-if="defaultValue && options.length > 0" value="">
					SELECCIONE {{ name }}
				</option>
				<option v-for="(option, i) in options" :value="getValue(option)" :key="i">
					{{ showOption(option) }}
				</option>
			</select>
			<button
				v-if="btn.active"
				type="button"
				@click="$emit('btnClick')"
				:title="btn.title_btn"
				class="flex-1 h-8 md:h-10 border border-gray-600 rounded-r-md bg-gray-800 hover:bg-blue-600"
			>
				<icon-vue name="plus" :title="btn.title || 'btn'"></icon-vue>
			</button>
		</div>
	</div>
</template>
<script>
import { watch, ref, toRef } from "vue";
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
		label: { type: String, default: "", required: false },
		name: String,
		size: { type: String, default: null, required: false },
		btn: {
			type: Object,
			default() {
				return {};
			},
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
		const getStyleClasses = () => {
			let clase = "w-full form_input-select  ";
			if (props.btn.active) clase += "form_input-right ";
			switch (props.size) {
				case "small":
					clase += " text-xs py-2 px-1";
					break;
				default:
					clase += " py-1 px-2";
					break;
			}
			return clase;
		};
		return { valueLocal, getValue, showOption, getStyleClasses, id };
	},
};
</script>
<style lang="postcss" scoped>
.form_input-select{
	@apply 
    dark:text-indigo-300 dark:bg-slate-800 
}
.form_input-right {
	@apply border-r-0  rounded-r-none !important;
}
</style>