<template>
     <div class="userDetailRight">
         <ul v-if="currentInfo" class="basicDetails">
              <li>
                <el-row>
                    <el-col :span="24" class="listLeft module1">
                        交流建议
                    </el-col>
                    <el-col :span="24" class="listRight">
                        
                    </el-col>
                </el-row>
            </li>
            <li>
                <el-row style="line-height:30px">
                    <el-col :span="5" class="listLeft module1">
                        建议1
                    </el-col>
                    <el-col :span="19" class="listRight">
                        重点推荐促销力度
                    </el-col>
                </el-row>
            </li>
            <li class="dashed_line">
                <el-row  style="line-height:30px">
                    <el-col :span="5" class="listLeft module1">
                        建议2
                    </el-col>
                    <el-col :span="19" class="listRight">
                        重点推荐食品安全
                    </el-col>
                </el-row>
            </li>
         </ul>
         <ul class="basicDetails">
             <li>
                <el-row>
                      <el-col :span="24" class="listLeft module1">
                        促销建议
                    </el-col>
                </el-row>
            </li>
            <li class="suggestBox">
                <div>
                    <img src="../../../assets/img/user/suggest1.png" alt="">
                </div>
                <div>
                     <img src="../../../assets/img/user/suggest2.png" alt="">
                </div>
            </li>
         </ul>
      </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:"userDetailsPromotion",//促销建议
        data(){
            return{

            }
        },
        computed:{
            ...mapState({
                  currentInfo:state=>state.user.currentInfo
            })
        },
        created(){
       
        }
    }
</script>
<style scoped lang="scss">
     .userDetailRight{
        padding: 30px  30px 0 60px;
         & .basicDetails li {
        width: 100%;
        line-height: 54px;
        &:last-child{
            padding-bottom: 38px;
        }
        & .listLeft {
        font-size: 14px;
        letter-spacing: 30px;
        color: #4c4c4c;
        text-align: left;
        &.module1 {
            letter-spacing: 1px;
            position: relative;
        }
            }
            & .listRight {
            font-size: 14px;
            color: #808080;
            position: relative;
            text-align: left;
            & .lookIphone {
                position: absolute;
                left:150px;
                top: 50%;
                transform: translate(0, -50%);
            }
            }
            &.favorite_brand{
            & .el-row{
                margin: 0!important;
            }
            &  .grid-content {
                    height: 40px;
                    line-height: 40px;
                    margin-top: 10px;
                    & img {
                        width: 100%;
                        height: 100%;
                    }
                    }
            } 
            &.favorite_brand .dashed_line {
            padding-bottom: 49px;
            }
            &.userTag .dashed_line {
            padding-bottom: 20px;
            & .el-tag {
                margin: 0 4px;
            }
            }
            // &.promotion_proposal .promotion_proposal_list .grid-content.bg-purple {
            //   text-align: center;
            //   & img {
            //     width: 267px;
            //     height: 120px;
            //   }
            // }
            &.userManager {
            padding-top: 10px;
            padding-bottom: 100px;
            height: 53px;
            & .avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
            }
            & .userName {
                padding-left: 44px;
                & > em {
                font-size: 14px;
                color: #808080;
                }
            }
            }
        }
    }
    .dashed_line {
  border-bottom: 1px dashed #cccccc;
}
</style>