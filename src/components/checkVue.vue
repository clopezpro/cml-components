<template>
	<div class="form-check">
		<input
			class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 m t-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
			type="checkbox"
			:checked="modelValue"
			:value="modelValue"
			@change="(event) => emitValue(event.target.checked)"
		/>
		<label
			@click="emitValue(!modelValue)"
			class="form-check-label inline-block dark:text-gray-500 text-gray-800 cursor-pointer"
		>
			{{ label }}
		</label>
	</div>
</template>
<script>
export default {
	name: "checkVue",
	props: {
		label: { type: String, default: "ACTIVAR" },
		modelValue: { type: Boolean, default: false, required: false },
	},
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		const emitValue = (event) => {
			emit("update:modelValue", event);
		};
		return { emitValue };
	},
};
</script>
<style lang="postcss" scoped>
.form-check-input:checked[type="checkbox"] {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E");
	}
</style>