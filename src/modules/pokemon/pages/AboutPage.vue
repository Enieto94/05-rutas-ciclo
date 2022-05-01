<template>
  <div>
    <h1>About page</h1>
    <h1>{{name}}</h1>
    <button @click="onchangeName">CLICK</button>
  </div>
  
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data(){
    return{
      name:'Edwin'
    }
  },
  methods: {
    onchangeName(){
      console.log('se le cambiará el nombre a melisa')
      this.name = 'Melissa'
      console.log(this.name)
      
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
    // Peticiones HTTP, validaciones o lo tomar segmeneto de url y validarlo, signo de interrogación QUERIE PARAMETERS ?CoSTO=100
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){},
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  activated(){
    console.log('activated')
  },
  deactivated(){
    console.log('desactivated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){},
  errorCaptured(){
    console.log('unomunted')
  },
  renderTracked(){
    console.log('renderTracked')
  },
  renderTriggered(){
    console.log('renderTriggered')
  },
}
</script>
