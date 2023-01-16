<template>
	<!-- <pre>
		{{ icon }}
	</pre> -->
	<svg
		:xmlns="icon.xmlns || `http://www.w3.org/2000/svg`"
		:viewBox="icon.viewBox || `0 0 24 24` "
		:stroke-width="icon.strokeWidth || `1.5`"
		class="icon"
		:class="[getStyleClasses(), getStyleClassesPrse()]"
		role="img"
		:stroke="icon.currentColor || `currentColor`"
		:fill="icon.fill ||  `none`"
	>		
		<path v-for="(path, index) in icon.paths || []"
			:key="index"
			:d="path.path || path"
			:viewBox="path.viewBox || `0 0 24 24`"
			:stroke-linecap="path.strokeLinecap || `round`"
			:stroke-linejoin="path.strokeLinejoin || `round`"
			:stroke-width="path.strokeWidth || `2`"

		>

		</path>
		<line
			v-for="(line, index) in icon.lines || []"
			:key="index"
			:x1="line.x1"
			:y1="line.y1"
			:x2="line.x2"
			:y2="line.y2"
		/>
		<polygon
			v-for="(points, index) in icon.polygon || []"
			:key="index"
			:points="points.points || points"
			:stroke-width="points.strokeWidth || `2` "
		/>
	</svg> 
	
</template>

<script>
import icons from "./icons.json";
import { ref } from "vue";

export default {
	name: "AppIcon",
	props: {
		name: { type: String, default: "heart" },
		size: { type: String, default: "normal" },
		class: { type: String, default: "" },
		color: String,
		title: String,
		desc: String,
	},
	setup(props, context){
		const icon=ref(icons[props.name] || icons["heart"]);

		const getStyleClasses=()=> {
			if (getStyleClassesPrse() == "") {
				return [props.size, props.color].map((val) => val && `is-${val}`);
			} else {
				return "";
			}
		}
		const getStyleClassesPrse=()=> {
			return props.class;
		}
		return {
			icon,
			getStyleClasses,
			getStyleClassesPrse
		}
	},

};
</script>
<style lang="postcss" scoped>
.icon {
	@apply inline-block ;
}
.icon.is-large {
	@apply h-20 w-20;
}
.icon.is-medium {
	@apply h-14 w-14;
}
.icon.is-normal {
	width: 1.2em;
	height: 1.2em;
}
.icon.is-small {
	width: 1em !important;
	height: 1em !important;
}
.icon.is-tiny {
	width: 0.8em;
	height: 0.8em;
}
/* colors */
.icon.is-primary,
.icon.is-blue {
	fill: #2196f3;
}
.icon.is-success,
.icon.is-green {
	fill: #4caf50;
}
.icon.is-danger,
.icon.is-red {
	fill: #f44336;
}
.icon.is-warning,
.icon.is-orange {
	fill: #ff9800;
}
</style>
