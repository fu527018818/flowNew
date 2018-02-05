<template>
    <div class="app">
        <main-nav :indexMenu="'/userDetails'"></main-nav>
        <div class="contentBox"  v-slim-scroll>
          <div class="contentBox_child">
            <div class="content">
                <div class="detailsTitBox">
                    <div class="detailsTit">
                        客户详情
                    </div>
                </div>
                <div class="userDetailBox">
                    <el-row class="userDetail">
                        <!-- 详情左侧 start -->
                        <el-col :span="9" class="userDetailLeft">
                            <datail-left></datail-left>
                        </el-col>
                        <!-- 详情左侧 end -->
                        <!-- 详情右侧  start-->
                        <el-col :span="15" class="userDetailRight">
                            <div class="rightBox">
                                <div class="rightMenu">  
                                    <!-- 切换路由 -->
                                    <el-radio-group id="userCut" v-model="is_menus" @change="changeMenu">
                                        <el-radio-button label="userDetailsInfo">客户信息</el-radio-button>
                                        <el-radio-button label="userDetailsConsume">消费记录</el-radio-button>
                                        <el-radio-button label="userDetailsServe">到店记录</el-radio-button>
                                        <el-radio-button label="userDetailsPortrait">客户肖像</el-radio-button>
                                        <el-radio-button label="userDetailsPromotion">促销建议</el-radio-button>
                                    </el-radio-group>  
                                </div>
                                <router-view @parentInit="parentInit" ref="changeEditr"></router-view>
                            </div>
                        </el-col>
                        <!-- 详情右侧 end-->
                       
                    </el-row>
                    <div class="operationBox">
                        <el-row class="operation">
                            <el-col :span="12">
                                <div class="cutPage">
                                    <el-button @click="currentPage--&& goto()"  size="mini" plain icon="el-icon-arrow-left"></el-button>
                                     <el-button  @click="currentPage++&& goto()" size="mini" plain> <i class="el-icon-arrow-right el-icon--right"></i></el-button>
                                </div>
                                
                            </el-col>
                            <el-col :span="12" class="compile">
                                 <el-button v-show="EditCut" @click="CutEdit" type="primary">{{'编辑'}}</el-button>
                            </el-col>
                        </el-row>
                    </div>
                 </div>
                 </div>
                 
                <div class="contentFooter"></div>
            </div>
        </div>
        <!-- 点击查看大图 -->
        <!-- <div class="shadow">
            <div class="">
                <img src="http://libface.gz.bcebos.com/309c230f9c3c//2018//01//10/7121c3d3a4047a3f_1515573255.52.jpg" alt="">
            </div>
        </div> -->
    </div>
</template>

<script>
import MainNav from "../components/MainNav";
import datailLeft from '../components/user/userDetails/detailLeft';
import {mapGetters} from 'vuex';
export default {
  name: "userDetails",
  components: { MainNav,datailLeft},
  data() {
    return {
      is_menus:"userDetailsInfo",
      user_current:"",
      currentPage:"1",
      EditCut:true
    };
  },
  methods: {
    lookIphone() {
      this.isIphone = false;
    },
    parentInit(){
        this.EditCut = true;
        this.$store.dispatch('userDetailInit',{
            shop_id:this.shop_list_current,
            member_id:this.user_current
        }).then(res=>{
            console.log(res)
        })
    },
    changeMenu(val) {
      // 菜单val值不变
      this.EditCut = true;
      this.$router.push({ name: val,params:{id:this.user_current}});
    },
    CutEdit(){
            this.EditCut =false;
            this.$router.push({ name:'userEdit',params:{id:this.user_current}});
    }
  },
  computed: {
       ...mapGetters([
           'shop_list_current'
       ])
  },
  created() {
       this.user_current =  this.$route.params.id;
       this.parentInit()
      if(this.$route.name=="userEdit"){
          this.EditCut = false;
          this.is_menus = "userDetailsInfo";
      }else{
            this.EditCut = true;
            this.is_menus = this.$route.name
      }
     ;

  },
  goto(){

  }
};
</script>

<style scoped lang="scss">
.detailsTitBox{
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 10px;
  & .detailsTit {
        font-size: 18px;
        height: 65px;
        line-height: 70px;
        letter-spacing: 1px;
        color: #4d4d4d;
        margin: 0 30px;
        border-bottom: 1px solid #cccccc;
        background-color: #ffffff;
  }
}

.userDetailBox {
    background-color: #ffffff;
  & .userDetail {
    width: 100%;
    & .userDetailLeft {
      padding: 0 30px;
    }
  }
}

/**details right start**/
.userDetailRight {
  & .rightBox {
    text-align: center;
    & .rightMenu {
      margin-top: 29px;
      user-select: none;
    }
  }
}
/** details right END**/
.dashed_line {
  border-bottom: 1px dashed #cccccc;
}
.el-radio-button__inner{
    padding:12px 31px!important;
}
.operationBox{
    & .operation{
        line-height: 77px;
        & .cutPage{
            padding-left: 30px;
        }
        & .compile{
            text-align: right;
            padding-right:30px;
        }
    }
}
.el-button+.el-button{
    margin-left: 0;
}
.el-icon-arrow-right.el-icon--right{
    margin: 0;
}
.el-button.el-button--primary{
    padding: 12px 60px!important;
}
.shadow{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.7);
    position:absolute;
    top: 0;
    z-index: 2;
}
</style>