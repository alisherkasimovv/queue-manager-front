import logo from  '~@/../src/img/logo.jpg'
<template>
  <v-app id="inspire" >
    <v-main class = "body_all">
      <v-container
          class="fill-height"
          fluid
      >
          <v-row><img class = "logo" src='~@/../src/img/logo.png' alt="this"/>

           <div class="fullTime">{{ date }}</div>
           <div class="fullDate">{{ time }}</div>
          </v-row>
        <v-row
            justify="center"
        >
            <v-card v-for="item in doctorList" :key="item.id" outlined class="ma-3 doctor__card" min-width="15%" @click="queue(item.id)" elevation="4">
              <v-card-title class="text-h3">{{ item.specialization }}</v-card-title>
              <!--- <v-card-text>{{ item.description }}</v-card-text>-->
            </v-card>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <img class = "logo__ticket" src='~@/../src/img/chek.png'/>

        <v-card-text>
          <p class = "our__number">Ваш номер очереди:</p>
          <p class="info__counter">{{ info.counter }}</p>
          <p class="info__docSpec">{{ info.docSpec }}</p>
          <p class="gmc__text">Благодарим за то, что вибрали Global Medical Center!</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Yopish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Customer',
    data() {
      return {
        doctorList: [],
        info: {
          docSpec: '',
          time: '',
          counter: 0
        },
        dialog: false,
        date: "",
        time: ""
      }
    },
    created() {
      axios.get("http://localhost:9090/doctor/get")
      .then(response => {
        this.doctorList = response.data.data.doctors;
      });
      setInterval(this.getNow, 1000);
    },
    methods: {
      queue: function(id) {
        axios.get(`http://localhost:9090/queue/${id}`)
        .then(response => {
          this.info = {
            docSpec: response.data.data.doctor.specialization,
            time: response.data.data.currentOrderDate,
            counter: response.data.data.queueCounter
          }
          this.dialog = true;
        });

        this.dialog = setInterval(() => {
          this.dialog = false;
        }, 3000);
      },
      getNow: function () {
        const today = new Date();
        const date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.date = date;
        this.time = time;
      }
    }

  };
</script>

<style scoped>
.container.fill-height {
  background-image: url('~@/../src/img/fon.png');
}
.v-application .text-h3 {
      font-size: 25px!important;
      justify-content: center;
      font-weight: 900;
      line-height: 0; 
      min-height: 75px;
}

.doctor__card {
  width: 23%!important;
}
.logo {
  width: 24%;
}
.fullDate {
     position: absolute;
    right: 27px;
    color: #fff;
    font-size: 53px;
    font-weight: 300;
    top: 94px;
}

.fullTime {
      position: absolute;
    right: 27px;
    color: #fff;
    font-size: 80px;
    font-weight: 800;
}
.logo__ticket {
  width: 40%;
}
.our__number {
      font-size: 30px;
    color: black;
    justify-content: center;
    text-align: center;
    margin-top: 4px;
}
.info__counter {
    font-size: 120px;
    color: #000000;
    text-align: center;
    padding-top: 58px;
    font-weight: 900;
}

.info__docSpec {
      font-size: 53px;
    text-align: center;
    padding-top: 49px;
    font-weight: 900;
    color: black;
}
.gmc__text {
      text-align: center;
    margin-top: 35px;
    color: black;
    font-weight: 500;
    line-height: 1.2; 
    font-size: 30px;
}
.doctor__card:hover {
   background-image: linear-gradient(yellow, red);
   color: #fff; 
   box-shadow: inset 0px 0px 20px 10px rgba(0,0,0,0.6);
}
.v-application .elevation-4 {
      box-shadow: 0px 5px 4px -1px rgba(0, 0, 0, 0.5), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
}
.theme--light.v-sheet--outlined {
  border: 0;
}
</style>
  