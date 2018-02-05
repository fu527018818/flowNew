<template>
    <div class="userDetailRight">
        <ul v-if="currentInfo"  class="basicDetails">
            <li>
                <el-row>
                    <el-col :span="5" class="listLeft module1">
                        促销敏感
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.sales_promotion}}
                    </el-col>
                </el-row>
            </li>
            <li class="dashed_line">
                <el-row>
                    <el-col :span="5" class="listLeft module1">
                        消费水平
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.consumption_grade}}
                    </el-col>
                </el-row>
            </li>
             <li class="userTag">
                <el-row  class="dashed_line">
                    <el-col :span="24" class="listLeft module1">
                        用户印象
                    </el-col>
                    <el-col :span="24">
                        <div>
                            <el-tag v-for="item in currentInfo.tag" :key="item"  type="info">{{item +'123dfvvdfvdfvfv3'}}</el-tag>
                        </div>
                    </el-col>
                </el-row>
            </li>
            <li>
                <el-row>
                    <el-col :span="5" class="listLeft">
                        会员
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.member_no}}
                    </el-col>
                </el-row>
            </li>
             <li>
                <el-row>
                    <el-col :span="5" class="listLeft">
                        生日
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.birthday}}
                    </el-col>
                </el-row>
            </li>
            <li>
                <el-row>
                    <el-col :span="5" class="listLeft">
                        手机
                    </el-col>
                    <el-col :span="19" class="listRight" v-if ="isIphone" style="color:#4198ff;height:54px">
                        {{formatPhone}} 
                        <el-button  class="lookIphone"  type="primary" @click="lookIphone">查看</el-button>
                    </el-col>
                    <el-col :span="19" class="listRight" style="color:#4198ff;height:54px" v-else>
                        {{currentInfo.phone}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        身高
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.height+'cm'}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        三围
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.waist}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        鞋码
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.height}}
                    </el-col>
                </el-row>
            </li>
            <li >
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        颜色
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.color_hoby}}
                    </el-col>
                </el-row>
            </li>
            <li class="dashed_line">
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        风格
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.clothes_style}}
                    </el-col>
                </el-row>
            </li>
            <li class="favorite_brand">
                <el-row class="dashed_line">
                    <el-col :span="24" class="listLeft module1">
                        品牌偏好
                    </el-col>
                    <el-row :gutter="40">
                        <el-col :span="5" v-for="item in currentInfo.favorite_brand" :key="item.id">
                            <div class="grid-content bg-purple">
                                <img :src="item.logo" :alt="item.name">
                            </div>
                        </el-col>

                    </el-row>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        职业
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.career}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        公司
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.company}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft module1">
                        所在地
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.area_str}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        故乡
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.hometown_str}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="5" class="listLeft">
                        邮箱
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.email}}
                    </el-col>
                </el-row>
            </li>
            <li class="dashed_line">
                 <el-row>
                    <el-col :span="5" class="listLeft module1">
                        是否孩子
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{currentInfo.has_children}}
                    </el-col>
                </el-row>
            </li>
            <li>
                 <el-row>
                    <el-col :span="24" class="listLeft module1">
                        备注
                    </el-col>
                    <el-col :span="24" class="listRight mg-30" style="word-wrap:break-word;">
                        {{currentInfo.memo}}
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script>
   import {mapState} from 'vuex';
    export default {
        name:"userDetailsInfo",
        data(){
            return{
                isIphone:true
            }
        },
        computed:{
            ...mapState({
                currentInfo:state=>state.user.currentInfo
            }),
             formatPhone() {
                     return this.currentInfo.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
                },
                level(){
                    return this.currentInfo.level * 1
                }
        },
        methods:{
            lookIphone(){
                this.isIphone = false;
           }
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