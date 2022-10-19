<!-- eslint-disable max-len -->
<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{backgroundImage: `url(${row.userImage})`}"></div>
                <span class="profile-name">{{row.name}}</span>
            </div>
                <div
                    :class="`${row.filter} post-body`"
                    :style="{backgroundImage: `url(${row.postImage})`}"
                    @click="$store.commit('likePost', i)">
                    </div>
                <div class="post-content">
                <p>{{$store.state.postdata[i].likes}} Likes</p>
                <p><strong>{{row.name}}</strong> {{row.content}}</p>
            <p class="date">{{row.date}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    row: Object,
    i: Number,
  },
};
</script>

<style>
    @import url(../assets/vuepost.css);
</style>
