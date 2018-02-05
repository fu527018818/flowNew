<template>
    <div class="app">
         <main-nav :indexMenu="'/shopSetChild'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <div class="tit">门店设置</div>
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'shopSetChild'}">门店设置</router-link>
                                <router-link :to="{name:'moreInfo'}">更多信息</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="dateForm">
                        <router-view @prentInit="prentInit"></router-view>
                    </div>
                </div>
                 <div class="contentFooter"></div>
            </div>
          </div>
    </div>
</template>
<script>
    import mainNav from '../../components/MainNav';
    import {mapGetters} from 'vuex';
    export default {
        name:"shopSet", //设置门店页面
        components:{mainNav},
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            prentInit(){
                console.log(123)
                this.setInit()
            },
            setInit(){
                 this.$store.dispatch('getShopInfo',{
                        shop_id:this.shop_list_current
                })
            }
        },
        created(){
           this.setInit()
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
            bottom: -1px;
            left: 0;
         }
       }
   }
  }
   
}
.dateForm{
  min-height: 800px;
  background-color:#ffffff;
  padding: 60px 0 0 30px;
}
</style>