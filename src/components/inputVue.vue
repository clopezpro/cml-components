<template>
	<div class="dark:bg-dark-2 bg-gray-200 rounded-md rounded-b-none">
		<label :for="id" v-if="label != ''" class="flex  text-gray-700 dark:text-gray-300 align-middle text-xs ml-1">{{
			label
		}}</label>
		<div class="flex">
			<div
				v-if="name_icon != ''"
				class="flex-nowrap flex items-center justify-center"
			>
				<icon-vue :name="name_icon"></icon-vue>
			</div>
			<input
				v-if="type != 'textarea'"
				:id="id"
				class="form_imput w-full md:py-2 md:px-4 md:text-md text-xs"
				:value="modelValue"
				@input="emitValue('modelValue', $event)"
				:class="{ 'form_imput-right': btn.active }"
				:autocomplete="!autocomplete ? 'off' : 'true'"
				:maxlength="maxlength"
				:name="name"
				:type="type"
				:placeholder="placeholder"
			/>
			<textarea
				v-if="type == 'textarea'"
				:id="id"
				class="form_imput w-full md:py-2 md:px-4 md:text-md text-xs"
				:value="modelValue"
				@input="(event) => $emit('update:modelValue', event.target.value)"
				:class="{ 'form_imput-right': btn.active }"
				:autocomplete="!autocomplete ? 'off' : 'true'"
				:maxlength="maxlength"
				:cols="cols"
				:rows="rows"
				:name="name"
				:type="type"
				:placeholder="placeholder"
			>
			</textarea>
			<button
				v-if="btn.active"
				type="button"
				@click="$emit('btnClick')"
				:title="btn.title_btn"
				class="flex-1 h-8 md:h-10 border dark:border-gray-600  dark:bg-gray-800 hover:bg-green-600"
			>
				<icon-vue
					:name="btn.name_icon || 'plus'"
					:title="btn.title || name"
				></icon-vue>
			</button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import IconVue from "./icons.vue";
export default {
	name: "inputVue",
	components: {
		"icon-vue":IconVue,
	},
	props: {
		modelValue: { default: null },
		maxlength: {  default: "", required: false },
		name_icon: { type: String, default: "", required: false },
		cols: { type: String, default: "1", required: false },
		rows: { type: String, default: "1", required: false },
		label: { type: String, default: "", required: false },
		type: { type: String, default: "text", required: false },
		autocomplete: { type: Boolean, default: false, required: false },
		placeholder: { type: String, default: "", required: false },
		name: { type: String, default: "", required: false },
		btn: {
			type: Object,
			default() {
				return { active: false };
			},
		},
		modelModifiers: {
			default: () => ({}),
		},
	},
	emits: ["update:modelValue","btnClick"],
	setup(props, context) {
		const id = ref(context._uid);
		const emitValue = (propName, evt) => {
			let val = evt.target.value;

			if (props.modelModifiers["trim"]) {
				val = val.trim();
			}
			context.emit(`update:${propName}`, val);
		};
		return { id, emitValue };
	},
};
</script>
