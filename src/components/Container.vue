<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- 저번시간에 만든 거 -->
        <div v-if="isStep(0)">
          <Post v-for="(row, i) in postdata" :key="i" :row="row" :i="i"/>
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="isStep(1)">
          <div :class="`${filterData} upload-image`" :style="{backgroundImage: `url(${imageData})`}"></div>
          <div class="filters">
            <FilterBox v-for="(row) in filterArray" :key="row" :imageData="imageData" :row="row">
              {{row}}
              <!-- <template v-slot:a>data1</template> -->
            </FilterBox>
          </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="isStep(2)">
          <div :class="`${filterData} upload-image`" :style="{backgroundImage: `url(${imageData})`}"></div>
          <div class="write">
            <textarea @input="setContent($event)" class="write-box">write!</textarea>
          </div>
        </div>

        <div v-if="isStep(3)">
          <MyPage :one="1"/>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "Container",
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  data() {
    return {
      filterArray: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    };
  },
  props: {
    postdata: Array,
    step: Number,
    imageData: String,
    filterData: String,
  },
  methods: {
    isStep(i) {
      return this.step === i;
    },
    setContent(e) {
      this.$emit("setContent", e.target.value);
    },
  },
};
</script>

<style>
  .upload-image{
    background-color: cornflowerblue;
    background-size : cover;
    width: 100%;
    height: 450px;
  }
  .filters{
    overflow-x:scroll;
    white-space: nowrap;
  }
  /* .filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
  } */
  .filters::-webkit-scrollbar {
    height: 5px;
  }
  .filters::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  .filters::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
  }
</style>
