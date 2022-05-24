<template>

<section class="src-componentes-formulario-av">
     <div class="jumbotron">
      <h2>Ingreso usuario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <validate tag="div">
        <label for="nombre">Nombre</label>
          <input 
          type="text"
          id="nombre"
          name="nombre"
          class = "form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"  
          required 
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
           no-espacios
           />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">Requiere como min {{nombreMinLength}} caracteres</div>
            <div slot="" class="alert alert-danger mt-1">Requiere como max {{nombreMaxLength}} caracteres</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios </div>
          </field-messages>
        </validate>
        <br>
         <validate tag="div">
        <label for="edad">Edad</label>
          <input 
          type="number"
          id="edad"
          name="edad"
          class = "form-control"
          autocomplete="off"
          v-model.number="formData.edad" 
          required 
          :min="edadMin"
          :max="edadMax"
           />
    
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">Edad minima es {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger mt-1">Edad maxima es {{edadMax}} años</div>
          </field-messages>
        </validate>
        <br>
        <validate tag="div">
        <label for="email">Email</label>
          <input 
          type="email"
          id="email"
          name="email"
          class = "form-control"
          autocomplete="off"
          v-model.trim="formData.email" 
          required 
           />
    
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no valido</div>
          </field-messages>
        </validate>
        <br>
    
    
        <button class="btn-btn-sucess my-3" :disabled="formState.$invalid">Enviar</button>
      </vue-form>
      
      </div>

      <h3>Listado de usuarios registrados:</h3>
      <br>


      <div v-if="usuarios.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          
          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-warning">No hay usuarios ingresados</h4>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{}, 
        formData:this.getInicialData(),
        nombreMinLength:5,
        nombreMaxLength:15,
        edadMin:18,
        edadMax:120,
        usuarios:[],
 
      }
    },
    methods: {
       getInicialData(){
      return{
          nombre: " ",
          edad: " ",
          mail: " "
      }
       },
  
    enviar(){
      let usuario = {...this.formData}
      console.log(usuario);
      this.usuarios.push(usuario)
      this.formData=this.getInicialData()
      this.formState._reset()
      }
       
  
  },
    computed: {
  
       
    }
}


</script>

<style scoped lang="css">
  /* .src-componentes-formulario-av {

  } */
  .jumbotron{
    background-color: olive;
    color: black;
  }

  hr{
    background-color: #bbb;
  }
  pre{
    color:white
  }
</style>