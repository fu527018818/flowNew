<template>
   <!-- 首页导航 -->
   <div class="dataEnter">
        <main-nav></main-nav>
        <div class="content">
          <div class="titCutBox">
              <el-row class="titCut">
                  <el-col :span="3">
                     <div class="tit">数据录入</div>
                  </el-col>
                  <el-col :span="21" class="titCutRight">
                     <router-link :to="{name:'posEnter'}">post数据</router-link>
                     <router-link :to="{name:'posBuy'}">支出</router-link>
                  </el-col>
              </el-row>
          </div>
            <div class="dateForm">
                 <router-view></router-view>
            </div>
        </div>
        <div class="contentFooter"></div>
   </div>
</template>

<script>
import MainNav from "../components/MainNav";
export default {
  name: "dataEnter",
  components: { MainNav },
  data() {
    return {
     
    };
  },
  methods: {
  },
  created() {}
};
</script>

<style scoped lang="scss">
@import "../../static/variable.scss";
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
.content {
  width: 1024px;
  margin: 0 auto;
  height: 969px;
  margin-top: 6px;
}
.dateForm{
  height: 800px;
  background-color:#ffffff;
  padding: 60px 0 0 30px;
}



</style>