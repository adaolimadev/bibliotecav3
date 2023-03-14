<template>
    <div id="app" class="mt-4 ml-12 mr-12">
        <form @submit.prevent="createLivro()">
        <v-text-field
            v-model="titulo"
            label="Título"
            required
        ></v-text-field>

        <v-text-field
            v-model="autor"
            label="Autor"
            required
        ></v-text-field>

        <v-text-field
            v-model="editora"
            label="Editora"
            required
        ></v-text-field>

        <v-text-field
            v-model="ano"
            label="Ano"
            required
        ></v-text-field>

        <v-select
            :items="items"
            label="Gênero"
        ></v-select>

        <v-row
            justify="space-around"
            class="mt-4 mb-2"
        >
        <v-btn
            tile
            color="primary"
            type="submit"
        >
            <v-icon left>
            mdi-check
            </v-icon>
            Cadastrar
        </v-btn>
        <v-btn
            tile
            color="error"
        >
            <v-icon left>
            mdi-close
            </v-icon>
            Cancelar
        </v-btn>
        </v-row>
        </form>
    </div>
</template>

<script>
export default {
  name: 'FormLivro',
  data () {
    return {
      items: ['Ação', 'Aventura', 'Comédia', 'Drama', 'Romance', 'Suspense'],
      titulo: '',
      autor: '',
      editora: '',
      genero: '',
      ano: ''
    }
  },
  methods: {
    async createLivro () {
      const dataLivro = {
        titulo: this.titulo,
        autor: this.autor,
        editora: this.editora,
        ano: this.ano
      }
      const jsonLivro = JSON.stringify(dataLivro)

      const req = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonLivro
      })
      const res = await req.json()
      console.log('Mandou para o server:')
      console.log(res)
    },
    async limparCampos () {
      this.titulo = ''
      this.autor = ''
      this.editora = ''
      this.ano = ''
    }
  }
}
</script>

<style scoped>
</style>
