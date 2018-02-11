<template>
    <div class="app">
         <main-nav :indexMenu="'/photoAlbum'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <div class="tit">我的相册</div>
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'photoAlbumPicture'}">照片</router-link>
                                <router-link :to="{name:'photoAlbumRecording'}">录像</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="clearfix photoAlbumBox">

                      
                           <keep-alive>
                                <router-view >
                                     </router-view>
                           </keep-alive>
                      
                    </div>
                </div>
                <div class="contentFooter isMd6"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import mainNav from '../../components/MainNav';
    export default {
       name:"photoAlbum0", //相册
       components:{mainNav},
       methods:{
           ceshi(){

           }
       },
       created(){
           console.log(123)
       }
    }
</script>

<style scoped lang="scss">
  .photoAlbumBox{
       background-color:#ffffff;
       min-height:800px;
       padding: 0 28px;
  }
  
     .titCutBox{ 
   background-color:#ffffff;
   height: 68px;
   line-height: 66px;
   padding: 0 28px;
   overflow: hidden;
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
       padding: 0 36px;
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
</style>