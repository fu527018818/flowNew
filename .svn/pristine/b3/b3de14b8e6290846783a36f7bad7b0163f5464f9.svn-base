<template>
    <div class="app">
        <main-nav :indexMenu="'/personnel/staffReview'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'职员审核'"  @seachtrigger="seachtrigger">
                         <div slot="page">
                             <search-page :pageDate="pageDate" @changePagesSearch="changePagesSearch"></search-page>
                         </div>
                     </search-date>
                     <staff-table ref="stafftable" :lists="lists" @changeStatus="changeStatus"></staff-table>
                </div>
                <div class="contentFooter isMd6"></div>
            </div>
        </div>    
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import searchDate from '../../components/statistic/searchDate';
    import staffTable from '../../components/personnel/staffTable.vue';
    import searchPage from '../../components/statistic/searchPage'
    import formatterBg from '../../assets/js/formatterbg'
    import {personnelStaff} from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"staffReview", //职员管理
        components:{mainNav,searchDate,staffTable,searchPage},
        data(){
            return {
               lists:"",
               page:1,
               limit:10,
               pageDate:"",
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
                if(this.$refs.stafftable){
                    this.$refs.stafftable.loading = true;
                }
                personnelStaff({
                    shop_id:this.shop_list_current,
                    limit:this.limit,
                    page:this.page
                })
                .then(res=>{
                   var data = res.data
                   this.lists = data.data.lists;
                   this.pageDate = formatterBg.formatPageDate(data.data.limit,data.data.page,data.data.total_count);
                   setTimeout(()=>{if(this.$refs.stafftable){
                        this.$refs.stafftable.loading = false;
                    }},500);
                },err=>{
                    setTimeout(()=>{if(this.$refs.stafftable){
                        this.$refs.stafftable.loading = false;
                    }},500);
                })
            },
            changeStatus(){
                this.staffReviewInit();
            },
             changePagesSearch(val){
                this.page = val.current;
                this.limit = val.limit;
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