<template >

  <section class="src-componentes-http-client">
    <div class="jumbotron">
      <h2>Listado de usuarios</h2>
      <hr>
      <hr>
      <br>

     <button class="btn btn-primary my-3 mr-3" @click="getPostsXHRcb()">Pedir XHR (callback)</button>
    <button class="btn btn-primary my-3 mr-3" @click="getPostsXHRpromise()">Pedir XHR (promise)</button>
    <button class="btn btn-primary my-3 mr-3" @click="getPostsFetch()">Pedir Fetch</button>
    <button class="btn btn-primary my-3 mr-3" @click="getPostsAxios()">Pedir Axios</button>
     <button class="btn btn-danger my-3" @click="usuarios=[]">CLEAR</button>
     <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Tel</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.tel}} </td>
        </tr>
      </table>
      <h4 class="alert alert-primary">Se encontraron {{usuarios.length}} usuarios</h4>
    </div>
    <h4 v-else class="alert alert-danger text-center">No se encontraron usuarios</h4>
  </div>
    
  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
         url: "https://62864b8896bccbf32d72cdfe.mockapi.io/Usuarios",
        usuarios:[
        ],
      }
    },
    methods: {

      wrapperXHRpromise(){
        return new Promise((resolve, reject) => {
        const xhr= new XMLHttpRequest()
        xhr.open("get", this.url)
        xhr.addEventListener("load", () => {
          if (xhr.status == 200){
              let respueta = JSON.parse(xhr.response)
              resolve(respueta)
          }
          else{
            console.error("ERROR XHR CB (STATUS)", xhr.status)
            let error = {
              tittle: "ERROR XHR CB (STATUS)",
              status: xhr.status
            }
            reject(error)
          }
        })
        xhr.addEventListener("error", e => {
            console.error("ERROR XHR CB (AJAX)", e)
             let error = {
              tittle: "ERROR XHR CB (AJAX)",
              status: e
            }
            reject(error)
        })
        xhr.send()
        })
      
      },

       getPostsXHRcb(){
        const xhr= new XMLHttpRequest()
        xhr.open("get", this.url)
        xhr.addEventListener("load", () => {
          if (xhr.status == 200){
              let respueta = JSON.parse(xhr.response)
              this.usuarios = respueta
          }
          else{
            console.error("ERROR XHR CB (STATUS)", xhr.status)
          }
        })
        xhr.addEventListener("error", e => {
            console.error("ERROR XHR CB (AJAX)", e)
        })
        xhr.send()
      },

     async getPostsXHRpromise(){
        try{
       let respuesta = await this.wrapperXHRpromise()
       this.usuarios=respuesta
      } catch (error){
          console.log("Error XHRPROMISE", error)
      }
      },


      async getPostsFetch(){
         try{
        let response = await fetch(this.url)
        let respuesta = await response.json()
          this.usuarios=respuesta
        } catch(error){
       console.log("Error FETCH", error)
        }
      },

      async getPostsAxios(){
        try{
      let {data} = await this.axios(this.url)
      this.usuarios=data
      }catch(error){
         console.log("Error Axios", error)
      }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
   .jumbotron{
    background-color: olive;
    color: rgb(0, 0, 0);
  }

  hr{
    background-color: #bbb;
  }
</style>
