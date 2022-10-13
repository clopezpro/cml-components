<script setup>
  import { VButton } from './components/';
  import { Icons } from './components/';
  import { inputVue } from './components/';
  import {ref} from 'vue';
  const inputVal = ref('');
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
                  name_icon="adjustments"
                  placeholder="pruebas"
                  label="pruebas"
                  :btn="{
                    active: true,
                    name_icon: 'plus',
                    title: 'pruebas',
                  }"
            
                >
                </inputVue>
                <div class="w-1/2">
                  TEXT: {{inputVal}}
                </div>
            </div>
      </div>
  </div>
  
</template>
