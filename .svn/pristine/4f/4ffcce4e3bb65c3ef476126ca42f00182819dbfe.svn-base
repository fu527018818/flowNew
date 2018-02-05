<template>
    <div class="app">
        <main-nav :indexMenu="'/personnel/personnelAdmin'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'职员管理'"  @seachtrigger="seachtrigger"></search-date>
                     <admin-table :lists="lists" @changeStatus="changeStatus"></admin-table>
                </div>
                <div class="contentFooter"></div>
            </div>
        </div>    
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import searchDate from '../../components/statistic/searchDate';
    import adminTable from '../../components/personnel/adminTable.vue';
    import {personnelAdmin} from '../../api/global'
    import {mapGetters} from 'vuex';
    export default {
        name:"personnelAdmin", //职员管理
        components:{mainNav,searchDate,adminTable},
        data(){
            return {
              lists:""
            }
        },
        computed:{
           ...mapGetters([
               'shop_list_current'
           ])
        },
        methods:{
            seachtrigger(){
                this.adminInit();
            },
            adminInit(){
                 personnelAdmin({
                     shop_id:this.shop_list_current,
                     page:1,
                     limit:1000
                 })
                 .then(res=>{
                     this.lists = res.data.data.lists;
                 })
            },
            changeStatus(){
                this.adminInit();
            }
        },
        created(){
           this.adminInit()
        }
    }
</script>

<style scoped>

</style>