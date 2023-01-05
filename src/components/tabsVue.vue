<template>
	<div>
		<nav
			class="dark:bg-dark-1 pt-2 border border-b border-b-gray-400 rounded-md rounded-b-none border-green-900"
		>
			<div class="-mb-px flex">
				<a
					v-for="(tab, i) in tabs"
					class="cursor-pointer p-1 bg-slate-700 border-b rounded-t-md rounded-l-none border-b-gray-400 dark:text-gray-900 text-gray-100 text-center text-xs uppercase"
					:class="{ activeTab: selected == tab.name, activeTabFirst: i == 0 }"
					:ref="tab.name"
					@click.prevent="selectTab(tab)"
					:key="tab"
				>
					{{ tab.title ? tab.title : tab.name }}
				</a>
			</div>
		</nav>
		<div
			class="tabs-details border border-t-0 rounded-t-none rounded-b-md border-gray-700 p-1"
		>
			<slot></slot>
		</div>
	</div>
</template>
<script>
import { ref, reactive, provide, watch } from "vue";
export default {
	props: {
		selected: {
			type: String,
			default: null,
		},
	},
	emits: ["update:selected"],
	setup(props, { slots, emit }) {
		const tabs = ref(
			slots.default().map((tab) => {
				return { ...tab.props };
			})
		);
		const isActive = reactive({
			name: props.selected,
		});
		provide("isActive", isActive);
		watch(
			() => props.selected,
			() => {
				isActive.name = props.selected;
			}
		);
		const selectTab = (selectedTab) => {
			emit("update:selected", selectedTab.name);
		};
		return { tabs, selectTab, isActive };
	},
};
</script>
<style lang="postcss" scoped>
.activeTab {
	@apply 
        bg-slate-900 
        border-2
        mr-0 
        rounded-l-none
        shadow-md
        border-b-0  
        border-t-gray-400
        border-l-gray-400
        border-r-gray-400
        border-gray-700  
        dark:text-green-400   
     !important;
}
.activeTabFirst {
	@apply border-l-0 rounded-l-none;
}
</style>