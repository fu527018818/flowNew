<template>
    <div class="userHelp">
         <!-- 页面头部导航 -->
        <main-nav :indexMenu="'/userHelp'"></main-nav>
        <div class="content">
            <div class="tit">
                <span>系统使用帮助</span>
            </div>
            <el-row class="user-body">
                <el-col :span="5">
                    <div class="user-left">
                        <div class="titList">
                           所有内容
                        </div>
                        <router-link  :to="{name:'helpSoftware'}" class="menuList" @click="toggle">
                           软件下载
                        </router-link>
                        <router-link :to="{name:'helpDoc'}" class="menuList">
                           帮助文档下载
                        </router-link>
                        <router-link :to="{name:'helpBrowser'}" class="menuList">
                           浏览器
                        </router-link>
                        <router-link :to="{name:'helpRelation'}" class="menuList">
                           联系方式
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="19">
                    <div class="user-right">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import MainNav from '../components/MainNav';
export default {
        name:"userHelp",
        components:{MainNav},
        data (){
            return {
              isActive:false
            }
        },
        methods:{
            toggle(){
                this.isActive = !this.isActive;
            }
        },
        watch:{
            '$route':function(){
                // this.currentPath = this.$route.name
                // console.log(this.currentPath)
            }
        },
        created(){
            // console.log(this.$route.name)
        }

    }
</script>

<style scoped lang="scss">
   @import '../../static/variable.scss';
    .userHelp{
        height: 100%;
    }
    .content {
        width: 1024px;
        margin: 0 auto;
        height: 100%;
        margin-top: 6px;
       & > .tit{
           width: 100%;
           height: 70px;
           line-height: 70px;
           font-family: MicrosoftYaHei;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #4d4d4d;
            background-color: $white;
            box-shadow:0 0 5px #ccc;
            & > span{
                padding-left: 30px;
            }
        }
    }
    .user-body{
        width: 100%;
        height: 100%;
        margin-top: 6px;
        & .el-col.el-col-5{
             height: 100%;
            padding-right: 3px;
            
        }
        & .el-col.el-col-19{
            height: 100%;
            padding-left: 3px;
        }
        & .user-left,& .user-right{
            width: 100%;
            height: 100%;
            background-color:$white; 
            box-shadow:0 0 5px #ccc;
            overflow: hidden;
        }
    .titList{
        display:inline-block;
        width: 100%;
        line-height: 40px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;
        padding-left: 39px;
        user-select: none;
    }
    .menuList{
        display:inline-block;
        width: 100%;
        line-height: 40px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;
        padding-left: 39px;
        &:hover{
            background-color: #4198ff;
            color: #ffffff;
        }
        &.router-link-active{
            background-color: #4198ff;
            color: #ffffff; 
        }
       }
    }
</style>