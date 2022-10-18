<template>
	<div class="flex mb-2 mt-2 items-end justify-center max-w-20 dark:border ">
		<div class="md:w-1/5 ">
			<div class="flex justify-center">
				<select
					class=" flex-1 form_input-select"
					name="years"
					v-model="dates.year"
					:disabled="dates.today"
					:title="dates.today ? 'No se puede cambiar el año POR EL CHEK HOY' : ''"
				>
					<option :value=null>AÑO</option>
					<option :value="year" v-for="year in years" :key="year">
						{{ year }}
					</option>
				</select>
				<checkVue class="flex-1" label="HOY?" v-model="dates.today" />
			</div>
			<div class="block " >
				<select
					class="w-full form_input-select  mt-1 "
					name="months"
					v-model="dates.month"
					:disabled="dates.today"
					:title="dates.today ? 'No se puede cambiar el mes POR EL CHEK HOY' : ''"
				>
					<option :value=null>MES</option>
					<option :value="month.number" v-for="month in months" :key="month">
						{{ month.name }}
					</option>
				</select>
			</div>
		</div>
		<div class="dark:bg-dark-2 bg-gray-200 rounded-md mr-1">
			<label class="flex align-middle text-xs ml-1 dark:text-gray-200">{{label_from}}</label>
			<input
				@input="(event) => $emit('update:from', event.target.value)"
				class="form_input input_date w-ful  h-full md:py-2 md:px-4 md:text-md text-xs ml-1"
				v-model="dates.from"
				type="date"
				name="FECHA_DESDE"
				placeholder="FECHA REGISTRO"
			/>
		</div>
		<div class="dark:bg-dark-2 bg-gray-200 rounded-md">
			<label class="flex align-middle text-xs ml-1 dark:text-gray-200">{{label_to}}</label>
			<input
				@input="(event) => $emit('update:to', event.target.value)"
				class="form_input input_date  h-full md:py-2 md:px-4 md:text-md text-xs ml-1"
				v-model="dates.to"
				type="date"
				name="FECHA_HASTA"
				placeholder="FECHA REGISTRO"
			/>
		</div>	
	</div>
</template>
<script>
import { onMounted, watch } from "vue";
import  checkVue  from "./checkVue.vue";
import { dateRange } from "../use/utilityDate.js";
export default {
	name: "inputDateVue",
	components: { checkVue },
	props: {
		todayInit:{default:false},
		label_from: { type: String, default: "Fecha desde" },
		label_to: { type: String, default: "Fecha hasta" },
		from:{default:null},
		to:{default:null},
	},
    emits:['update:from','update:to'],
	setup(props,{emit}) {
        const { years, months, dates } = dateRange(props.todayInit);
        onMounted(()=>{
            emit('update:from',dates.from);
            emit('update:to',dates.to);
        })
        watch(() => dates.from, () => {
			emit('update:from',dates.from);
		});
        watch(() => dates.to, () => {
			emit('update:to',dates.to)
		});
        return {years,months,dates}
	},
};
</script>
