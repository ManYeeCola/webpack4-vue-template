<template>
    <div>
        <span>头部</span>
        <router-link to="/component">跳转链接component</router-link>
        <router-view></router-view>
        <footer>底部</footer>
    </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style>
@import "./common/style/common.css"

</style>