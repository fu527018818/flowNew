<template>
     <div class="userDetailRight">
         <ul v-if="currentInfo" class="basicDetails">
              <li>
                <el-row>
                    <el-col :span="5" class="listLeft module1">
                        累计消费
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{'￥'+ currentInfo.total_consumption}}
                    </el-col>
                </el-row>
            </li>
             <li>
                <el-row>
                    <el-col :span="5" class="listLeft module1">
                        上次消费
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{'￥'+ currentInfo.last_order_time}}
                    </el-col>
                </el-row>
            </li>
            <li class="dashed_line">
                <el-row>
                    <el-col :span="5" class="listLeft module1">
                        客单价
                    </el-col>
                    <el-col :span="19" class="listRight">
                        {{'￥'+ currentInfo.unit_price}}
                    </el-col>
                </el-row>
            </li>
         </ul>
         <div class="stepBox">
             <div class="steplistBox" v-for="item in order_list" :key="item.shop_id">
                  <div class="stepTit">
                      {{item.name}}
                  </div>
                  <ul class="status-list">
                      <li v-for="(childIt,index) in item.lists" :key="index">
                          <el-row>
                              <el-col :span="5" class="step_date">
                                  <div>{{childIt.date_name}}</div>
                                  <div class="hour">{{childIt.date_hour}}</div>
                              </el-col>
                              <el-col :span="13" class="step_order">
                                  <div>{{childIt.shop_name}}</div>
                                  <div>消费金额：￥{{childIt.price}}</div>
                                  <div>订单号：{{childIt.order_no}}</div>
                                  <div>购买商品<span>(2件)：</span>半价连衣裙，短款卫衣</div>
                              </el-col>
                              <el-col :span="6" class="step_manager">
                                  <div>
                                      收银员：白菜
                                  </div>
                                  <div>
                                      接待人：胡萝卜
                                  </div>
                              </el-col>
                          </el-row>
                      </li>
                  </ul>
             </div>
            
         </div>
      </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:"userDetailsConsume", //消费记录
        data(){
            return{

            }
        },
        computed:{
            ...mapState({
                  currentInfo:state=>state.user.currentInfo
            }),
         order_list(){
             var newList = [];
              if(this.currentInfo){
                   var order_list =  this.currentInfo.order_list
                    for (var k in order_list) {
                    var item = order_list[k];
                    var monthKey = item.datetime.substr(0, 4) + "年" + item.datetime.substr(5, 2) + "月";
                    if (newList[monthKey] === undefined) {
                        newList[monthKey] = [];
                    }
                    item.date_hour = item.datetime.split(' ')[1];
                    item['date_name'] = item.datetime.substr(5, 2) + "月" + item.datetime.substr(8, 2) + "日";
                    newList[monthKey].push(item)
                    
                }
                var result = [];
                for (var key in newList) {
                    result.push({"name" : key, "lists":newList[key]});	
                    }
                return result;
              }else{
                  return "";
              }
         }   
        },
        created(){
       
        },
        watch:{
           order_list:function(val){
               console.log(val)
           } 
        }
    }
</script>
<style scoped lang="scss">
     .userDetailRight{
        padding: 30px  30px 0 60px;
         & .basicDetails li {
              &:last-child{
                padding-bottom: 30px!important;
            }
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
    .stepBox{
        text-align: left;
        padding-top: 9px;
        & .steplistBox{
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #4c4c4c;
            & .stepTit{
            font-size: 14px;
            line-height: 53px;
             padding-bottom: 10px;
            }
            & .status-list{
                & li{
                    border-left:1px solid #cccccc;
                    padding-left: 9px;
                    position: relative;
                    padding-bottom: 40px;
                    &:before{
                        content: '';
                        border: 3px solid #ff6648;
                        background-color: #ff6648;
                        display: inline-block;
                        width: 5px;
                        height: 5px;
                        border-radius: 5px;
                        position: absolute;
                        left: -6px;
                    }
                    &:last-child{
                        border: none;
                    }
                  & .step_date{
                      .hour{
                          color: #808080;
                          font-size: 12px;
                      }
                  }
                  & .step_order{
                      & >div:nth-child(1){
                          padding-left:20px;
                          color: #808080;
                          font-size: 12px;
                          position: relative;
                          &::before{
                              content: "";
                              background:url('../../../assets/img/location.png') no-repeat;
                              width:12px;
                              height:17px;
                              position: absolute;
                              left:2px;
                          }
                      }
                      & > div:nth-child(4){
                           color: #808080;
                          font-size: 12px;
                      }
                  }
                }
            }
        }
    }
    .dashed_line {
  border-bottom: 1px dashed #cccccc;
}
</style>