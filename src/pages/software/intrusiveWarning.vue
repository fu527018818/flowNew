<template>
    <div class="app">
         <main-nav :indexMenu="'/software/intrusiveWarning'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    这里是侵入警告
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import mainNav from '../../components/MainNav';
    export default {
       name:"intrusiveWarning",
       components:{mainNav}
    }
</script>

<style scoped lang="scss">

</style>