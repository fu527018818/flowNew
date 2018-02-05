<template>
    <div class="app">
        <main-nav :indexMenu="'/personnel/staffReview'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'职员审核'"  @seachtrigger="seachtrigger"></search-date>
                     <staff-table :lists="lists" @changeStatus="changeStatus"></staff-table>
                </div>
                <div class="contentFooter"></div>
            </div>
        </div>    
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import searchDate from '../../components/statistic/searchDate';
    import staffTable from '../../components/personnel/staffTable.vue';
    import {personnelStaff} from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"staffReview", //职员管理
        components:{mainNav,searchDate,staffTable},
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
                this.staffReviewInit();
            },
            staffReviewInit(){
                personnelStaff({
                    shop_id:this.shop_list_current,
                    limit:1000,
                    page:1
                })
                .then(res=>{
                   this.lists = res.data.data.lists;
                })
            },
            changeStatus(){
                this.staffReviewInit();
            }
        },
        created(){
            this.staffReviewInit();
        }
    }
</script>

<style scoped>

</style>