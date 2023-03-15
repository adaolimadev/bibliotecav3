<template>
    <div class="mt-10">
      <v-data-table
        :headers="headers"
        :items="livros"
        :items-per-page="5"
        class="elevation-2"
      >
      <template v-slot:top>
        <v-toolbar flat >
          <v-toolbar-title>LIVROS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical ></v-divider>
        <router-link to="/cadlivro">
          <v-btn
              color="primary"
              dark
              class="mt-1"
          >
            <v-icon class="mr-1">mdi-book-plus-musltiple</v-icon>
              Novo Livro
            </v-btn>
        </router-link>
        </v-toolbar>
      </template>
      <template v-slot:[`item.acao`]="{ item }">
        <router-link :to="{ name: 'editlivro', params: {id: item.id} }">
          <v-btn small color="blue lighten-1">
            <v-icon size="big" > mdi-pencil-outline</v-icon>
          </v-btn>
        </router-link>
        <v-btn small color="red lighten-1" class="ml-2" @click="deleteLivro(item.id)" >
          <v-icon size="big"> mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'TableLivro',
  data () {
    return {
      headers: [
        { text: '#', value: 'id', aling: 'start', sortable: 'false' },
        { text: 'Título', value: 'titulo', align: 'center' },
        { text: 'Autor', value: 'autor', align: 'center' },
        { text: 'Editora', value: 'editora', align: 'center' },
        { text: 'Ano', value: 'ano', align: 'center' },
        { text: 'Gênero', value: 'genero', align: 'center' },
        { text: 'Editar / Excluir', value: 'acao', align: 'center' }
      ],
      livros: []
    }
  },
  methods: {
    async getLivros () {
      const req = await fetch('http://localhost:3000/livros')
      const res = await req.json()
      this.livros = res
    },
    async deleteLivro (id) {
      console.log('Clicou no deletar! id: '.id)
      const req = await fetch(`http://localhost:3000/livros/${id}`,
        { method: 'DELETE' })

      const res = await req.json()

      console.log(res)
      this.getLivros()
    }
  },
  mounted () {
    this.getLivros()
  }

}
</script>
