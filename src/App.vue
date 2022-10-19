<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step += 1">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <button @click="more">더보기</button>

  <h4>안녕 {{$store.state.age}}</h4>
  <button @click="changeAge(10)">btn</button>
  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <p>{{name}} {{age}}</p> -->

  <Container
    :postdata="postdata"
    :step="step"
    :imageData="imageData"
    :filterData="filterData"
    @setContent="contentData = $event"
    />
<!--
  <button @click="changeStep(0)">버튼0</button>
  <button @click="changeStep(1)">버튼1</button>
  <button @click="changeStep(2)">버튼2</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
import Container from "./components/Container.vue";
import postdata from "./postdata";

export default {
  name: "App",
  data() {
    return {
      postdata,
      btnClick: 0,
      step: 3,
      imageData: "",
      contentData: "write",
      filterData: "",
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on("fire", (d) => {
      this.filterData = d;
    });
  },
  components: {
    Container,
  },
  computed: {
    ...mapState(["name", "age"]),
  },
  methods: {
    ...mapMutations(["setMore", "changeAge"]),
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.btnClick}.json`)
        .then((result) => {
          this.postdata.push(result.data);
          this.btnClick += 1;
        })
        .catch((err) => console.log(err));
    },
    changeStep(i) {
      this.step = i;
    },
    upload(e) {
      const image = e.target.files;
      if (image[0].type.indexOf("image") !== -1) {
        const url = URL.createObjectURL(image[0]);
        this.imageData = url;
        this.step = 1;
      }
    },
    publish() {
      const myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageData,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.contentData,
        filter: this.filterData,
      };
      this.postdata.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
  @import url(./assets/app.css);
</style>
