<script setup>
  import { VButton } from './components/';
  import { Icons } from './components/';
  import { inputVue } from './components/';
  import { Modal } from './components/';
  import { inputDateRange } from './components/';
  import { selectVue } from './components/';
  import { tab,tabs } from './components/';
  import { alertVue } from './components/';
  import {ref,reactive} from 'vue';
  import { useDark, useToggle } from '@vueuse/core'
  const inputVal = ref('');
  const formFilter=reactive({
    tab:'tab1',
    select:'',
    from:'',
    to:'',
  });
  const open=ref(false);
  const open2=ref(false);
  const alert=ref(false);
  
  const isDark = useDark()
  const toggleDark = useToggle(isDark)	

</script>

<template>
  <main>
    <div class="flex justify-center">
        <div class="w-1/2">
          <p>BOTONES</p>
          <div class="flex ">
            <VButton
              class="m-1"
             @click="toggleDark()"
            >
                <div>
                  <Icons name="search"/>
                </div>
                <div>
                  Buscar           
                </div> 
             </VButton>
              <VButton
                class="h-auto m-1"
                color="green"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton> 
              <VButton
                class="h-auto m-1"
                color="blue"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton> 
              <VButton
                class="h-auto m-1"
                color="orange"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton> 
              <VButton
                class="h-auto m-1"
                color="purple"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton>     
              <VButton
                class="h-auto m-1"
                color="yellow"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton>
              <VButton
                class="h-auto m-1"
                color="gray"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton> 
              <VButton
                class="h-auto m-1"
                color="white"
              >
                  <div>
                    <Icons name="search"/>
                  </div>
              </VButton>
          </div>
            
             Estos iconos  -->
              <Icons name="mail" class="w-5 h-5 font-bold text-green-600">
              </Icons>   
              <Icons name="navigation_round" class="w-5 h-5 font-bold text-green-600">
              </Icons>
              <Icons name="arrows-up-down" class="w-5 h-5 font-bold">
              </Icons>
               <Icons name="map-pin" class="w-5 h-5 font-bold">
              </Icons>  
              <Icons name="map-pin_2" class="w-5 h-5 font-bold">
              </Icons> 
              <Icons name="device-phone-mobile" class="w-5 h-5 font-bold">
              </Icons>
              <Icons name="cog-6-tooth" class="w-3 h-3 font-bold">
  
              </Icons>
              son los de https://heroicons.com/
              <div class="flex">
                  <inputVue
                    v-model="inputVal"
                   
                    icon="x"
                    name="name"
                    label="Pruebas"
                    class="w-1/2"
                    :rules="[
                      (v) => !!v || 'Campo requerido',
                      (v) => (v && v.length <= 10) || 'Maximo 10 caracteres',
                    ]"
                    placeholder="Pruebas"
                    :btn="{
                        icon:'x',
                        class:'bg-red-500',
                        title:'Limpiar'
              }"
                  >
                  </inputVue> 
                  
                  <inputVue
                    v-model="inputVal"
                   
                    icon="x"
                    name="xssssxsxs"
                    label="Pruebas"
                    class="w-1/2"
                    :rules="[
                      (v) => !!v || 'Campo requerido',
                      (v) => (v && v.length <= 10) || 'Maximo 10 caracteres',
                    ]"
                    placeholder="Pruebas"
                    :btn="{
                        icon:'x',
                        class:'bg-red-500',
                        title:'Limpiar'
              }"
                  >
                  </inputVue>
                  <div class="w-1/4 h-20">
                    TEXT: {{inputVal}}
                  </div>
              </div>
              
              <button @click="alert=true">
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
        <div class="w-1/4">
          <p>SELECT</p>
  
           <selectVue
              :options="[
                { _id: '1', name: 'MASCULINO' },
                { _id: '2', name: 'FEMENINO' },
                { _id: '3', name: 'otros' },
              ]"
              :label="`Genero`"
              v-model="formFilter.select"
              placeholder="PILAS"
              :btn="{
                        icon:'x',
                        class:'bg-red-500',
                        title:'Limpiar'
              }"
              name_icon="switch-vertical"
              name="Genero"
              class="w-full"
            >
            </selectVue>
  
        </div>
        <div>
  
         
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
        <button @click="toggleDark()">
        Is Dark: {{ isDark }}
      </button>
    </div>
    <teleport to="body">
      <Modal
                title="pruebas"
                v-model:showing="open"
                size="md"
              >
                <template #body>
                    <div >
                      <h1>HOLA MUNDO </h1>
                      <div>
                        <button @click="open2=true">OPEN 2 </button>
                      </div>

                      
                    </div>
                </template>
      </Modal>
      <Modal
                title="pruebas"
                v-model:showing="open2"
                size="md"
              >
                <template #body>
                    <div class="flex">
                      <h1>HOLA MUNDO 22 </h1>
                    </div>
                </template>
      </Modal>
     <pre>{{ alert }}</pre>  
      <alertVue
        v-model:showing="alert"
        title="Alerta"
        message="HOLA ESTO ES PRUEBAS"
        type="success"
        
      ></alertVue>
    </teleport>
    
  </main>

</template>
<style>
html.dark{
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
