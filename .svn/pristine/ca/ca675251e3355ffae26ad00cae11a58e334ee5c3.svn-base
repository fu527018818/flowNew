<template>
    <div class="app">
         <main-nav :indexMenu="'/editPersonal'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <div class="tit">修改资料</div>
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'editPersonal'}">个人资料</router-link>
                                <router-link :to="{name:'editPassword'}">修改密码</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="dateForm">
                        <router-view></router-view>
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
            
        },
        created(){
           
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
.dateForm{
  min-height: 800px;
  background-color:#ffffff;
  padding: 60px 0 0 30px;
}
</style>