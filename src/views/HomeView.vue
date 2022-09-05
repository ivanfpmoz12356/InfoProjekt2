<template>
  <v-container v-if="drinks">
      <v-row>
          <v-col cols="12">
              <v-text-field v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            :loading="isLoading"
                            @input="pretraga">
              </v-text-field>

          </v-col>

      </v-row>
      <v-row >
          <v-col v-for="drink in drinks"
                 :key="drink.strDrink"
                 cols="12"
                 md="3" 
                 >
              <v-card height="400" width="400" class="kokteli" >
                  <v-img float="left" class="image" fluid :src="drink.strDrinkThumb"></v-img>
                 <div >Naziv koktela: {{drink.strDrink}}</div> 
                 <div >{{drink.strInstructions}}</div>
              </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-pagination total-visible="4"
                            v-model="page"
                            :length="totalpages"></v-pagination>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>

  export default {
      name: 'HomeView',
      data() {
          return {
              drinks: [],
              page: 1,
              totalDrinks: 0,
              totalpages: 0,
              search: '',
              isLoading: false,
          }
      },
      created() {
          console.log('created')
          this.getData();
      },

      methods: {
          getData() {
              let api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
              return this.axios.get(api, {
                  params: {
                      'page': this.page,
                      'limit': 4,
                  }
              }).then((response) => {
                  console.log(response.data.drinks)
                  this.drinks = response.data.drinks
                  //this.totalDrinks = this.drinks.length
                  //this.total_pages=this.totalDrinks/4

              })
          },
          fetchEntriesDebounced() {
              clearTimeout(this._searchTimerId)
              this._searchTimerId = setTimeout(() => {
                  this.getData();
              }, 500)
          },
          searchEntries() {
              this.drinks = []
              this.page = 1
              this.fetchEntriesDebounced()
          },
          pretraga() {
              let api = "https://www.thecocktaildb.com/api/json/v1/1/search.php"
              return this.axios.get(api, {
                  params: {
                      's': this.search,
                  }
              }).then((response) => {
                  console.log(response.data.drinks)
                  this.drinks = response.data.drinks
                  this.totalDrinks = this.drinks.length
                  //this.totalpages=this.totalDrinks/4
                  //this.isLoading = false

              })
          }
      },
      watch: {
          page: function () {
              this.getData();
          },
          pretraga(val) {
              if (!val) {
                  return
              }
              this.isLoading = true
              this.searchEntries()
          }
      }
  }
</script>
<style>
  .image {
      width: 400px;
      height: 400px;
      margin-left: auto;
      margin-right: auto;
  }
.kokteli{
  padding-bottom:550px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>