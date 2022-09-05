<template>
  <v-container>
    <v-row>
      <v-col
        ><v-card height="auto">
          <v-row justify="center"> <h1>Prijavite se i dodajte komentar i ocjenu:</h1> </v-row>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col cols="12">
              <v-text-field
                solo
                v-model="username"
                :rules="nameRules"
                label="Korisničko ime"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                solo
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                :rules="passwordRules"
                label="Lozinka"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark v-bind="attrs" v-on="on"> Login </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Dodavanje ocjene koktela</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-file-input
                            accept="image/*"
                            label="Dodajte sliku"
                          ></v-file-input>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Upišite vaše ime"
                            required
                          ></v-text-field>
                          <v-text-field
                            label="Upišite ime koktela"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <h2>Upišite vašu ocjenu i komentar:</h2>
                          <v-textarea
                            background-color="grey"
                            color="Black"
                            label="Ocjena i komentar"
                            clearable
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="
                        dialog = false;
                        nedodano = true;
                      "
                    >
                      Zatvori
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="
                        dialog = false;
                        dodanaOcjena = true;
                      "
                    >
                      Dodaj
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-form>
          <v-row justify="center">
            <v-alert
              dense
              color="teal lighten-3"
              dark
              dismissible
              v-model="dodanaOcjena"
              >Uspješno dodana ocjena i komentar!</v-alert
            >
          </v-row>
          <v-row justify="center">
            <v-alert
              dense
              color="red darken-4"
              dark
              dismissible
              v-model="nedodano"
              >Odgođeno dodavanje recenzije!</v-alert
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      username: "",
      password: "",
      valid: true,
      loginAlert: false,
      nameRules: [(v) => !!v || "Upišite vaše korisničko ime!"],
      passwordRules: [(v) => !!v || "Upišite lozinku!"],
      dialog: false,
      dodanaOcjena: false,
      nedodano: false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    };
  },
};
</script>