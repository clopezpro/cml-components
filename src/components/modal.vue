<template>
	<Transition name="fade">
		<div
			v-if="showing"
			:class="{
				'cursor-not-allowed': !cerrarFuera,
				'items-center h-screen inset-0': centerModal,
				'h-full': !centerModal,
			}"
			class="modal_container"
			@click.self="clickOut"
		>
			<div
				:class="[...getStyleClasses(), color, { 'h-fit mt-1 ': !centerModal }]"
				class="modal_content"
			>
				<div class="modal_title">
                    <div class="mx-2">{{ title }}</div>
                    <button
                            aria-label="close"
                            ref="close_modal"
                            class="btn_close"
                            @click.prevent="close"
                        >
                            <icon-vue name="x" title="CERRAR"> ss</icon-vue>
				    </button>
                </div>
                <div class=" p-2 mt-1">
                    <div class="">
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
<style lang="postcss" scoped>
.modal_container{
	@apply fixed z-20 top-0 bottom-0 w-full flex-wrap flex justify-center bg-bg-semi-75 overflow-y-auto;
}
.modal_content{
	@apply  relative cursor-auto w-full bg-white shadow-lg dark:bg-dark-1 dark:text-gray-100;
}
.modal_content.is-md {
	@apply max-w-2xl !important;
}
.modal_content.is-lg {
	@apply max-w-4xl !important;
}
.modal_content.is-xl {
	@apply w-screen h-screen !important;
}
.modal_content .btn_close {
	@apply absolute -top-2 -right-4 text-xl text-gray-500 my-2 mx-4 hover:bg-red-500 hover:text-gray-100;
}
.modal_content.modal_title{
	@apply border-b dark:border-b-gray-600 border-b-slate-200;
}
.modal_content .fade-enter,
.modal_content .fade-leave-to {
	opacity: 0;
}
.modal_content.success {
	@apply border-green-800 border;
}
.modal_content.danger {
	@apply  border-red-800 border;
}
.modal_content.danger {
	@apply  border-red-800 border;
}
.modal_content.info {
	@apply  border-blue-600 border-opacity-30 border;
}
.modal_content.error {
	@apply  border-red-800 border;
}
.modal_content.error {
	@apply  border-red-800 border;
}
</style>
