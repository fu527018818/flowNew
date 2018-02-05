<template>
    <div class="app">
        <main-nav :indexMenu="'/personnel/personnelAdmin'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-date :isShowDate="false" :isShowId="true" :tit="'职员管理'"  @seachtrigger="seachtrigger">
                         <div slot="page">
                             <search-page :pageDate="pageDate" @changePagesSearch="changePagesSearch"></search-page>
                         </div>
                     </search-date>
                     <admin-table ref="admintable" :lists="lists" @changeStatus="changeStatus"></admin-table>
                </div>
                <div class="contentFooter isMd6"></div>
            </div>
        </div>    
    </div>
</template>
<script>
    import mainNav from '../../components/MainNav';
    import searchDate from '../../components/statistic/searchDate';
    import searchPage from '../../components/statistic/searchPage'
    import formatterBg from '../../assets/js/formatterbg'
    import adminTable from '../../components/personnel/adminTable.vue';
    import {personnelAdmin} from '../../api/global'
    import {mapGetters} from 'vuex';
    export default {
        name:"personnelAdmin", //职员管理
        components:{mainNav,searchDate,adminTable,searchPage},
        data(){
            return {
              lists:"",
              pageDate:"",
              page:1,
              limit:10
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
                if(this.$refs.admintable){
                    this.$refs.admintable.loading = true;
                }
                 personnelAdmin({
                     shop_id:this.shop_list_current,
                     page:this.page,
                     limit:this.limit
                 })
                 .then(res=>{
                     var data = res.data
                     if(data.status=="200"){
                        this.pageDate = formatterBg.formatPageDate(data.data.limit,data.data.page,data.data.total_count);
                        this.lists = res.data.data.lists;
                        setTimeout(()=>{if(this.$refs.admintable){
                            this.$refs.admintable.loading = false;
                        }},500);
                    }
                    
                 },err=>{
                     setTimeout(()=>{if(this.$refs.admintable){
                        this.$refs.admintable.loading = false;
                    }},500);
                 })
            },
            changeStatus(){
                this.adminInit();
            },
            changePagesSearch(val){
                this.page = val.current;
                this.limit = val.limit;
                this.adminInit();
            }
        },
        created(){
           this.adminInit()
        }
    }
</script>

<style scoped lang="scss">

</style>