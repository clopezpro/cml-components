import { reactive, watch,onMounted } from "vue";
import dayjs from "dayjs/esm/index.js";
const	getYears=()=> {
				let date = new Date();
				let year = date.getFullYear() + 1;
				let anio_start = 2020;
				let years = [];
				for (let i = anio_start; i <= year; i++) {
					years.push(i);
				}
				return years;
}
const	getMonths=()=> {
				return Array.from({ length: 12 }, (e, i) => {
					return {
						number: i ,
						name: new Date(null, i + 1, null)
							.toLocaleDateString("es", {
								month: "long",
							})
							.toUpperCase(),
					};
				});
}
const dateRange= (todaySet=false) => {
		let years = getYears();
		let months = getMonths();
		const dates = reactive({
			today: false,
			year: null,
			month: null,
			from: null,
			to: null,
		});
        const setDateToday=()=>{
				var dateHoyStr = `${dayjs().format("YYYY-MM-DD")}`;
				dates.from = dateHoyStr;
				dates.to = dateHoyStr;
                dates.year = dayjs().format("YYYY");    
                dates.month = dayjs().format("D");    
        }
		onMounted(()=>{
			if (todaySet) {
				dates.today = true;
				setDateToday();
			}
		});
        watch(() => dates.year, () => {
			if (dates.today == true) {
				return;
			}
			console.log(dates.year);

			if(dates.year==null){
				dates.month = null;
				dates.from = null;
				dates.to = null;
				return;
			}
			if (!dates.month) {
				dates.from = dates.year + `-01-01`;
				dates.to = dates.year + `-12-31`;
			} else {
				dates.from = dates.year + `-${(dates.month+1).toString().padStart(2, 0)}-01`;
				var d = new Date(dates.year, dates.month + 1, 0); 
				dates.to =dates.year +`-${(dates.month + 1).toString().padStart(2, 0)}-${d.getDate()}`;
			}
            dates.today=false;
		});  
        watch(() => dates.today, () => {
			if (dates.today) {
				setDateToday();
			}else{
				dates.year=null;
				dates.month=null;
				dates.from=null;
				dates.to=null;
			}
		});  
        watch(() => dates.month, () => {
			if(dates.today ==true){
				return;
			}
			if (!dates.year) {
				dates.year = dayjs().format("YYYY");
			} 
			if(!dates.month){
				dates.from = dates.year + `-01-01`;
				dates.to = dates.year + `-12-31`;
				return;
			}
		
			let from = dayjs()
				.set("year", dates.year)
				.set("month", dates.month)
				.set("date", 1);

				
			dates.from=from.format("YYYY-MM-DD")
			
			dates.to = from.add(1, "month").format("YYYY-MM-DD");
			
            dates.today = false;
		});
		return { years, months, dates };
	}
export { dateRange };
