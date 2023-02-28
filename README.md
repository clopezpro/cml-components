# cml-components
My components, for create an ERP model in vue 3 in Ecuador

USE npm i cml-components 


In Vue.js  -> main.js file if you needs use in all your components

```import "cml-components/dist/style.css";```

and use components in funtion to needs 

```
import {
	inputDateRange,
	inputVue,
	Modal,
	selectVue,
	checkVue,
	tab,
	tabs,
	Icons,
} from "cml-components";

app.component("card-modal", Modal);
app.component("icon-vue", Icons);
app.component("inputVue", inputVue);
app.component("inputDateRangeVue", inputDateRange);
app.component("tabsVue", tabs);
app.component("tabVue", tab);
app.component("checkVue", checkVue);
app.component("selectVue", selectVue);
```

in Nuxt.js 
create file cml-components.js in folder /plugins and copy the last code










  
