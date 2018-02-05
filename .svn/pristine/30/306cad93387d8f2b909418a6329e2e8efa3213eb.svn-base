<template>
    <div class="notifyRealListBox">
        <div class="notifyCotent">
             <el-row class="titBox">
                 <el-col :span="12">
                     <div class="left">
                         您有新客到...
                     </div>
                 </el-col>
                 <el-col :span="12">
                     <div class="right">
                         <i class="iconfont icon-close" @click="goto"></i>
                     </div>
                 </el-col>
             </el-row>
             <el-row :gutter="6" class="notifyUserList" v-if="newGuest">
                 <el-col class="listBox" :span="4" v-for="(item,index) in newGuest" :key="index">
                     <div class="list">
                         <img :src="item.avatar" alt="人物头像">
                         <div class="des">
                             {{item.real_name +'-'+(item.gender=="1"?"男":"女")+'-'+item.age+'岁'}}
                         </div>
                    </div>
                 </el-col>
             </el-row>
             <div class="notifyDot">
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
        </div>
    </div>
</template>

<script>
    import {getNewguest}from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"notifyRealList", //实时推送用户列表
        data(){
            return{
              newGuest:""
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            goto(){
                this.$router.go(-1)
            },
            newGuestInit(){
                getNewguest({
                    shop_id:this.shop_list_current
                })
                .then(res=>{
                    var data = res.data
                    if(data.status=="200"){
                         this.newGuest = data.data.lists
                    }
                })
            }
        },
        created(){
            this.newGuestInit()
        }

    }
</script>

<style scoped lang="scss">
    .notifyRealListBox{
        height: 100%;
        & .notifyCotent{
            height:100% ;
            width: 1024px;
            margin:0 auto;
            background-color:#ffffff;
            padding: 0 31px;
        }
    }
    .titBox{
        line-height: 52px;
        padding: 91px 0;
        & .left{
            font-size: 40px;
            letter-spacing: 2px;
            color: #4c4c4c;
        }
        & .right{
            text-align: right;
            & .icon-close{
                  font-size: 40px;
                  color: #4c4c4c;
            }
          
        }
    }
    .notifyUserList{
        & .listBox{
            margin-bottom: 20px;
        }
        & .list{
            height:191px;
            border: solid 1px #d3dde0;
            & img{
                width: 100%;
                height: 152px;
            }
            & .des{
                    text-align: center;
                    font-size: 14px;
                    letter-spacing: 0px;
                    color: #4c4c4c;
                    line-height: 33px;
            }
        }
      
    }
      .notifyDot{
          margin-top: 60px;
            & span{
                display: inline-block;
                width: 14px;
                height: 14px;
                background-color: #4c4c4c;
                border-radius: 50%;
            }
            & span:nth-child(2){
                margin: 0 6px;
            }
        }
</style>