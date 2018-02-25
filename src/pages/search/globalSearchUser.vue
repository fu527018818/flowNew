<template>
    <div class="app">
         <main-nav :indexMenu="'main'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="searchBox">
                        <div class="search">
                          <div class="f-input">
                            <input type="text" v-model="searchOrder"  @keyup.enter="searchIndent" v-on:blur="searchIndent"  validateevent="true"  :placeholder="search_current">
                          </div>
                            <span class="searchIcon" @click="searchIndent">
                                <i class="iconfont icon-serach"></i>
                            </span>
                        </div>
                    </div>
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <!-- <div class="tit">门店设置</div> -->
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'searchUser'}">搜客户</router-link>
                                <router-link :to="{name:'searchOrder'}">搜订单</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="searchSult">
                        <router-view @click="searchTirgger"></router-view>
                    </div>
                </div>
                <div class="contentFooter"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import {userManager,statisticsIndent}from '../../api/global';
    import {mapGetters} from 'vuex';
    import  searchUserTable from '../../components/search/searchUserTable.vue';
    export default {
        name:"globalSearchUser", //全局搜索
        components:{mainNav,searchUserTable},
        data(){
            return{
                searchOrder:"",
                search_current:"搜客户",
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            searchIndent(){
               if(this.$route.name=="searchUser"){
                   this.$router.push({name:'searchUser',query:{search:this.searchOrder,changeRoot:Math.random()}});
               }else if(this.$route.name=='searchOrder'){
                   this.$router.push({name:'searchOrder',query:{search:this.searchOrder,changeRoot:Math.random()}});
               }
           
            },//格式化日期格式
            globalSearchInit(){
                this.$router.push({name:'searchUser',query:{search:this.searchOrder,changeRoot:Math.random()}})
            },
            searchTirgger(){

            }
        },
        created(){
       
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if(to.path=='/search/order'){
                    vm.search_current = "搜订单";
                }else if(to.path=='/search/user'){
                    vm.search_current = "搜客户";
                }
            })
        },
        beforeRouteUpdate (to, from, next){
            if(to.path=='/search/order'){
                this.search_current = "搜订单";
            }else if(to.path=='/search/user'){
                this.search_current = "搜客户";
            }
            next()
        },
        watch:{
           
        }
    }
</script>

<style scoped lang="scss">
 .titCutBox{ 
   background-color:#ffffff;
   height: 68px;
   line-height: 68px;
   padding: 0 28px;
   & .titCut{
    border-bottom: solid 1px #cccccc;
     & .tit{
	   font-size: 18px;
	   font-weight: normal;
    	font-stretch: normal;
     color: #4d4d4d;
     padding-left: 2px;
   }
   &  .titCutRight a{
      display: inline-block;
       padding: 0 15px;
	     font-size: 14px;
	     font-weight: normal;
	     font-stretch: normal;
       color: #4c4c4c;
      &.router-link-active{
         color: #4198ff;
         position: relative;
         &:after{
            content:"";
            width:100%;
            height: 2px;
            position: absolute;
            background-color: #4198ff;
            bottom: 0;
            left: 0;
         }
       }
   }
  }
   
}
.searchBox{
        background-color: #ffffff;
        line-height: 77px;
        text-align: center;
    }
    .search{
            width: 450px;
            height: 30px;
            position: relative;
            display: inline-block;
            & >.f-input{
                line-height: 1px;
                 &>input{
                  vertical-align:middle;
                  display: table-cell;
                  border:0;
                  height:30px;
                  padding: 0;
                  width: 100%;
              
                  box-sizing: border-box;
                  background-color: #ffffff;
                  border: 1px solid #dcdfe6;
                  -webkit-appearance:none;
                  text-indent: 10px;
                  color: #4c4c4c;
                }
            }
           
           & .searchIcon{
               cursor: pointer;
               width:74px;
               height: 30px;
               display:inline-block;
               background-color: #4198ff;
               position: absolute;
               right: 0;
               top:0;
               & .icon-serach{
                 color: #ffffff;
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 font-size: 20px;
                 transform: translate(-50%,-50%);
                 line-height: 0;
               }
           }
        }
        .searchSult{
            background-color: #ffffff;
            clear: both;
            padding: 0 30px;
        }
</style>