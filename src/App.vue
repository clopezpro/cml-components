<script setup>
  import { VButton } from './components/';
  import { Icons } from './components/';
  import { inputVue } from './components/';
  import { Modal } from './components/';
  import { inputDateRange } from './components/';
  import { selectVue } from './components/';
  import { tab,tabs } from './components/';
  import {ref,reactive} from 'vue';
  const inputVal = ref('');
  const formFilter=reactive({
    tab:'tab1',
    select:'',
    from:'',
    to:'',
  });
  const open=ref(false);
</script>

<template>
  <div class="flex justify-center">
      <div class="w-1/2">
          <VButton
          
          >My Button</VButton
        >
            <Icons name="adjustments">
    
            </Icons>
    
            <div class="flex">
                <inputVue
                  v-model="inputVal"
                  name="pruebas"
                  type="text"
                  class="w-1/2"
                  placeholder="pruebas"
               
                 
            
                >
                </inputVue>
                <div class="w-1/2">
                  TEXT: {{inputVal}}
                </div>
            </div>
            <Modal
              title="pruebas"
              v-model:showing="open"
              size="md"
            >
              <template #body>
                  <div class="flex">
                    <h1>HOLA MUNDO </h1>
                  </div>

              </template>
            </Modal>
            <button @click="open=true">
              openModal 
            </button>

            <inputDateRange
										:todayInit="false"
										v-model:from="formFilter.from"
										v-model:to="formFilter.to"
									/>
                  <pre>
                    {{formFilter}}
                  </pre>
      </div>
      <div>

        <selectVue
						:options="[
							{ _id: '1', name: 'MASCULINO' },
							{ _id: '2', name: 'FEMENINO' },
							{ _id: '3', name: 'otros' },
						]"
						:label="`Genero`"
						v-model="formFilter.select"
						name_icon="switch-vertical"
						name="Genero"
						class="w-full"
					>
					</selectVue>
          	<tabs v-model:selected="formFilter.tab">
                <tab name="tab1">
                  <div class="flex">
                    <h1>HOLA MUNDO </h1>
                  </div>
                </tab> 
                <tab name="tab2">
                  <div class="flex">
                    <h1>HOLA MUNDO sssssss</h1>
                  </div>
                </tab>
            </tabs>
      </div>

  </div>
  
</template>
