<template>
     <div>
        <v-container class="col-md-10 mt-4" id="container-list">
            <h1>LISTA DE LIVROS</h1>
            <TableLivro/>
        </v-container>
    </div>
</template>

<script>
import TableLivro from '../components/TableLivro.vue'
export default {
  components: {
    TableLivro
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
#container-list{
    background-color: whitesmoke;
    border-radius: 10px;
}
</style>
