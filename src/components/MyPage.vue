<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" />
        <div v-for="row in follower" :key="row.id">
            <div class="post-header">
                <div class="profile" :style="{backgroundImage: `url(${row.image})`}"></div>
                <span class="profile-name">{{row.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {
  onMounted, ref, toRefs,
} from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  setup(props) {
    const follower = ref([]);
    const { one } = toRefs(props);
    console.log(one.value);

    const store = useStore();
    console.log(store.state.name);

    // watch(one, () => {
    //     one??
    // })

    // console.log(computed(() => follower.value.length).value);

    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        follower.value = result.data;
      });
    });
    // 검색 결과에 따라 follower를 수정하여 검색기능 개발

    return { follower };
  },
  data() {
    return {

    };
  },
};
</script>

<style>

</style>
