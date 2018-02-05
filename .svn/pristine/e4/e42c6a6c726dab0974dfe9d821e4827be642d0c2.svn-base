<template>
    <div class="app">
         <main-nav :indexMenu="'/messageList'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="tit">
                        消息通知
                    </div>
                    <div class="allNotifyBox" v-slim-scroll>
                        <div class="warningBox" v-for="item in warning" :key="item.te_sn">
                            <div class="warnTit" >
                                <el-row>
                                    <el-col :span="12" class="warnLeft">
                                        <div>
                                                {{item.data.title}}
                                        </div>
                                    </el-col>
                                        <el-col :span="12" class="warnRight">
                                            {{item.add_datetime}}
                                        </el-col>
                                </el-row>
                                <el-row class="warnContent">
                                        <el-col :span="4">
                                            <div class="conImg">
                                                <img :src="item.data.avatar" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="16" class="conDes">
                                            <div>
                                                <div>
                                                    <span class="desLeft">侵入人员：</span><span class="desRight">{{item.data.real_name}}</span>
                                                </div>
                                                <div>
                                                    <span class="desLeft">时间：</span><span class="desRight">{{item.data.request_datetime}}</span>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="4" class="warnBtn">
                                            <div class="submitbtn">
                                                <el-button type="primary">查看监控</el-button>
                                            </div>
                                        </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class="bindingBox" v-for="(item,index) in bind" :key="item.index">
                            <div class="warnTit">
                                <el-row>
                                    <el-col :span="12" class="warnLeft">
                                        <div>
                                                {{item.data.title}}
                                        </div>
                                    </el-col>
                                        <el-col :span="12" class="warnRight">
                                            {{item.add_datetime}}
                                        </el-col>
                                </el-row>
                                <el-row  class="bindBox">
                                    <el-col :span="15" class="conDes">
                                        <div>
                                            <div>
                                                <span class="desLeft">申请人员：</span><span class="desRight">{{item.data.real_name}}</span>
                                            </div>
                                            <div>
                                                <span class="desLeft">加入门店：</span><span class="desRight">{{item.data.shop_name}}</span>
                                            </div>
                                            <div>
                                                <span class="desLeft">申请时间：</span><span class="desRight">{{item.data.request_datetime}}</span>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="9" class="passBtn">
                                        <div>
                                            <el-button :disabled="item.data.is_complete=='1'?true:false" type="primary" @click="bindIdea(item,'1')">同意</el-button>
                                        </div>
                                        <div>
                                            <el-button :disabled="item.data.is_complete=='1'?true:false" type="danger" @click="bindIdea(item,'0')">不同意</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class="passBox" v-for="item in notify" :key="item.type">
                            <div class="warnTit">
                                <el-row>
                                    <el-col :span="12" class="warnLeft">
                                        <div>
                                            {{item.data.title}}
                                        </div>
                                    </el-col>
                                        <el-col :span="12" class="warnRight">
                                            {{item.add_datetime}}
                                        </el-col>
                                </el-row>
                                <el-row class="notifyBox">
                                    <el-col :span="24" class="conDes">
                                        <div>
                                            <div>
                                                <span class="desLeft">加入门店：</span><span class="desRight">{{item.data.bind_shop}}</span>
                                            </div>
                                            <div>
                                                <span class="desLeft">申请时间：</span><span class="desRight">{{item.data.bind_datetime}}</span>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import {messageList,editStaffApply}from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"messageList", //消息通知列表
        components:{mainNav},
        data(){
            return{
                warning:[],
                bind:[],
                notify:[],
                allNotify:""
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        created(){
            this.messageInit()
        },
        methods:{
            formatType(data){
                this.warning=[];
                this.notify=[];
                this.bind=[];
                data.forEach(item=>{
                    if(item.type=="warning"){
                        this.warning.push(item);
                    }
                    else if(item.type=="bind"){
                        this.bind.push(item);
                        
                    }
                    else if(item.type=="notify"){
                        this.notify.push(item)
                    }
                })
            },
            messageInit(){
                messageList({
                    shop_id:this.shop_list_current,
                    limit:10000
                }).then(res=>{
                    if(res.data.status=="200"){
                        this.formatType(res.data.data.lists)
                    }
                    
                }
                )
            },
            bindIdea(ele,index){
                editStaffApply({
                    shop_id:ele.shop_id,
                    user_id:ele.user_id,
                    apply:index,
                    id:ele.id
                })
                .then(res=>{
                    if(res.data.status=="400"){
                             this.$confirm( res.data.message+'q?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                                }).then(() => {
                                    return 
                                }).catch(() => {  
                                    return
                                });
                    }
                    if(res.data.status=="200"){
                        this.messageInit()
                    }
                   
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .tit{
        line-height: 77px;
        background-color: #ffffff;
        font-size: 18px;
        letter-spacing: 1px;
        color: #4d4d4d;
        padding-left: 30px;
        box-shadow: 0px 0px 6px 0px 
        #d2dce0;
        margin-bottom: 6px;
    }
    .warningBox,.bindingBox,.passBox{
        margin: 6px 0;
        background-color:#ffffff;
        &:first-child{
            margin-top: 0px;
        }
    }
    .warnTit{
       padding:0 30px;
       & > div:nth-child(1){
           height:52px;
           line-height:60px;
           overflow: hidden;
           border-bottom: 1px solid #cccccc;
           & .warnLeft{
               & div{
                   width: 100%;
                   height: 1px;
               }
            font-size: 16px;
            letter-spacing: 1px;
            color: #4d4d4d;
 
           }
           & .warnRight{
            font-size: 12px;
            text-align: right;
            letter-spacing: 0px;
            color: #808080;
            padding-right:15px;
        }
       }
    .warnContent{
        height: 217px;
        padding-top: 17px;
        background-color: #ffffff;
        & .conImg{
            width: 140px;
            height: 140px;
            padding-top: 20px;
            & img{
                width: 100%;
                height: 100%;
            }
        }
    
      & .warnBtn{
          height: 100%;
          position: relative;
           & .submitbtn {
                    position: absolute;
                    top:50%;
                    transform:translate(0,-50%);
                    vertical-align:middle;
                    text-align: left;
                    & .el-button.el-button--primary{
                        width: 150px;

                }
            }
      }
    }
    }
      .conDes{
          & > div:nth-child(1){
              padding-top: 20px;
              & >div{
                  margin: 10px 0;
              }
              & .desLeft{
                  	font-family: MicrosoftYaHei;
                    font-size: 16px;
                    letter-spacing: 1px;
                    color: #4c4c4c;
                    width: 100px;
                    display:inline-block;
                    text-align: right;
              }
              & .desRight{
                  font-family: MicrosoftYaHei;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #808080;
              }
          }
      }
      .bindBox{
          padding-bottom:30px;
          & .passBtn{
              text-align: right;
              & .el-button--primary{
                  padding: 12px 60px!important;
                  margin-top: 30px;
                  margin-bottom: 16px;
              }
              & .el-button--danger{
                  padding: 12px 53px!important;
              }
          }
      }
    .allNotifyBox{
        padding-bottom: 200px;
        max-height: 1000px;
        overflow: hidden;
    }
</style>