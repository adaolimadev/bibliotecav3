<template>
    <div>
        <v-container class="col-md-6 mt-4" id="container-cad">
            <h1>EDITAR LIVRO </h1>
            <div id="app" class="mt-4 ml-12 mr-12">
        <form>
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
            v-model="genero"
            :items="items"
            label="Gênero"
            required
        ></v-select>

        <v-row
            justify="space-around"
            class="mt-4 mb-2"
        >
        <v-btn
            tile
            color="primary"
            @click="atualizarLivro()"
        >
            <v-icon left>
            mdi-pencil
            </v-icon>
            Alterar
        </v-btn>
        <router-link to="/listlivro/">
          <v-btn
              tile
              color="error"
          >
              <v-icon left>
              mdi-close
              </v-icon>
              Cancelar
          </v-btn>
        </router-link>
        </v-row>
        </form>
    </div>
        </v-container>
    </div>
</template>
<script>

export default {
  name: 'EditLivro',
  data () {
    return {
      // preencher com as informações do Objeto
      idLivro: '',
      titulo: '',
      autor: '',
      editora: '',
      ano: '',
      genero: '',
      items: ['Ação', 'Aventura', 'Comédia', 'Drama', 'Romance', 'Suspense']
    }
  },
  methods: {
    async carregarLivro (id) {
      // busca o livro com o id passado por parametro
      const req = await fetch(`http://localhost:3000/livros/${id}`)
      const res = await req.json()
      // preenche o form com o objeto 'res' no caso o livro que veio do json
      this.titulo = res.titulo
      this.autor = res.autor
      this.editora = res.editora
      this.ano = res.ano
      this.genero = res.genero
    },
    async atualizarLivro () {
      const upLivro = {
        titulo: this.titulo,
        autor: this.autor,
        editora: this.editora,
        ano: this.ano,
        genero: this.genero
      }
      const dataJson = JSON.stringify(upLivro)
      const req = await fetch(`http://localhost:3000/livros/${this.idLivro}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
      })
      const res = await req.json()
      console.log(`Mandou objeto: ${res}`)
      this.$router.push('/listlivro')
    }
  },
  mounted () {
    // Faz a atribuição do ID livro que vem por parametro da rota
    this.idLivro = parseInt(this.$route.params.id)
    console.log(`Chegou o ID: ${this.idLivro}`)

    this.carregarLivro(this.idLivro)
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
#container-cad{
    background-color: whitesmoke;
    border-radius: 10px;
}
</style>
