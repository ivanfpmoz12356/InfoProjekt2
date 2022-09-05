<template>
  <v-app id="inspire">
    <v-app-bar app color="gray" dark>

      <v-spacer></v-spacer>

            <v-row>
                <v-btn
                  v-for="link in links"
                  :key="link.text"
                  text
                  :to="link.path"
                >
                  <v-icon></v-icon>
                  {{ link.text }}
                </v-btn>
            </v-row>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation app
        overlay-opacity=".75"
        v-model="drawer"
        temporary
        color="primary"
        dark>
        <v-btn @click="toFacebook()">
          <v-icon color="indigo darken-2" >mdi-facebook</v-icon>
        </v-btn>

        <v-btn @click="toInstagram()">
          <v-icon color="pink accent-3">mdi-instagram</v-icon>
        </v-btn>

        <v-btn @click="toTwitter()">
          <v-icon color="cyan lighten-2">mdi-twitter</v-icon>
        </v-btn>

        <v-btn @click="toYouTube()">
          <v-icon color="red darken-1">mdi-youtube</v-icon>
        </v-btn>
      </v-bottom-navigation>
  </v-app>
  
</template>

<script>
export default {
  name: "App",

  data: () => ({
    group: null,
    links: [
      {
        text: "Kokteli",
        path: "/",
      },
      {
        text: "INFO",
        path: "/info",
      },
      {
        text: "Ocjena i komentar",
        path: "/komentar",
      },

    ],
    icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-twitter',
        'mdi-youtube',
      ],
    }),
    methods: {
      toFacebook: function(){
        window.open('https://www.facebook.com/fpmoz.ba')
      },
       toInstagram: function(){
        window.open('https://www.instagram.com/fpmoz.mostar/?hl=hr')
      },
       toTwitter: function(){
        window.open('https://twitter.com/SVE_Mostar')
      },
       toYouTube: function(){
        window.open('https://www.youtube.com/channel/UCXSNb2zfyNe6O-uh-YCtgOg')
      },
    }
  }
</script>