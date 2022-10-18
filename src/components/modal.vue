<template>
	<Transition name="fade">
		<div
			v-if="showing"
			:class="{
				'cursor-not-allowed': !cerrarFuera,
				'items-center h-screen inset-0': centerModal,
				'h-full': !centerModal,
			}"
			class="fixed z-20 w-full flex-wrap flex justify-center bg-bg-semi-75 overflow-y-auto"
			@click.self="clickOut"
		>
			<div
				:class="[...getStyleClasses(), color, { 'h-fit mt-1 ': !centerModal }]"
				class="modal relative cursor-auto w-full bg-white shadow-lg dark:bg-dark-1 dark:text-gray-100"
			>
				<div class="dark:border-b dark:border-b-gray-600">
                    <div class="mx-2">{{ title }}</div>
                    <button
                            aria-label="close"
                            ref="close_modal"
                            class="absolute -top-2 -right-4 text-xl text-gray-500 my-2 mx-4 hover:bg-red-500 hover:text-gray-100"
                            @click.prevent="close"
                        >
                            <icon-vue name="x" title="CERRAR"> ss</icon-vue>
				    </button>
                </div>
                <div class=" p-2 mt-1">
                    <div class="p-2 rounded-lg">
                        <slot name="body"> </slot>
                    </div>
                    <slot name="footer"></slot>
                </div>
			</div>
		</div>
	</Transition>
</template>
<script>
import IconVue from "./icons.vue";
export default {
	name: "modalCLP",
    components: {
		"icon-vue":IconVue,
	},
	props: {
		title: {
			required: false,
			default: "",
			type: String,
		},
		showing: {
			required: true,
			type: Boolean,
		},
		color: {
			required: false,
			default: "success",
			type: String,
		},
		size: {
			required: false,
			default: "md",
			type: String,
		},
		cerrarFuera: {
			required: false,
			default: true,
			type: Boolean,
		},
		centerModal: {
			required: false,
			default: true,
			type: Boolean,
		},
	},
	emits: ["close", "update:showing"],
	setup(props, context) {
		 const clickOut=()=> {
			if (props.cerrarFuera) {
				context.emit("update:showing", false);
				context.emit("close");
			}
		}
		 const close=()=> {
			context.emit("update:showing", false);
			context.emit("close");
		}
		 const getStyleClasses=()=> {
			return [props.size].map((val) => val && `is-${val}`);
		}
		return {
			clickOut,
			close,
			getStyleClasses,
		};
	},
};
</script>
