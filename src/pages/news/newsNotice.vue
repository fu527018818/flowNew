<template>
    <div class="app">
         <main-nav :indexMenu="'/main'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    export default {
        name:"newsNotice", //消息提示
        components:{mainNav}
    }
</script>

<style scoped class="scss">

</style>