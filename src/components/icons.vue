<template >

  <svg
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="icon "
    :class="[getStyleClasses(),getStyleClassesPrse()]"
    role="img"
    stroke="currentColor"
    fill="none"
  >

    <title>{{ title || name }}</title>
    <desc v-if="desc">{{ desc }}</desc>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  v-for="(path,index) in getPath()" :key="index" :d="path" />
    <line v-for="(line,index) in getLines()" :key="index" :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" />
  </svg>
</template>

<script>
import icons from './icons.json';

export default {
  name: "AppIcon",
  props: {
    name: {type:String,default:'heart'},
    size: {type:String,default:'normal'},
    class: {type:String,default:''},
    color: String,
    title: String,
    desc: String,
  },
  methods: {
    getPath() {
      if(!icons[this.name]){
        return icons["heart"].paths;
      }
      return icons[this.name].paths || [];
    },
    getLines() {
       if(!icons[this.name]){
        return []
      }
      return icons[this.name].lines || [];
    },
    getStyleClasses() {
      if(this.getStyleClassesPrse()==""){
        return [this.size, this.color].map(val => val && `is-${val}`);
      }else{
        return '';
      }
    },
     getStyleClassesPrse() {
      return this.class;
    },
  },
};
</script>

<style lang="postcss">
/* default */
/* .icon {
  fill: currentColor;
} */

/* sizes */
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
  fill: #2196F3
}
.icon.is-success,
.icon.is-green {
  fill: #4CAF50
}
.icon.is-danger,
.icon.is-red  {
  fill: #F44336
}
.icon.is-warning,
.icon.is-orange {
  fill: #FF9800
}
</style>