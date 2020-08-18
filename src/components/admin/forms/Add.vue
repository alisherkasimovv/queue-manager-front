<template>
  <v-dialog v-model="dialog" persistent max-width="600px">

    <template v-slot:activator="{ on }">
      <v-btn class="ma-2" outlined color="green" v-on="on">
        <v-icon>mdi-plus</v-icon>
        Yangi doktor qo'shish
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">Yangi yo'nalish qo'shish formasi</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="8" xs="12">
                <v-text-field
                    v-model="newSpecialization"
                    label="Yo'nalish nomi"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="12" xs="12">
                <v-textarea
                    clearable
                    clear-icon="mdi-cancel"
                    label="Tavsifi"
                    v-model="newDescription"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="dialog = !dialog">Close</v-btn>
        <v-btn color="green" text @click="saveDoctor">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'Add',
    data () {
      return {
        newSpecialization: "",
        newDescription: "",
        dialog: false
      }
    },
    methods: {
      saveDoctor: function () {
        const product = {
          specialization: this.newSpecialization,
          description: this.newDescription,
        };

        axios.post("http://localhost:9090/doctor/save", product);

        this.dialog = !this.dialog;

        this.newDescription = "";
        this.newSpecialization = "";
        this.$router.go();
      }
    }
  };
</script>

<style scoped>

</style>
