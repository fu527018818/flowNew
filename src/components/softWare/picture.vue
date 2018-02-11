<template>
    <div>
        <div class="stepBox">
             <div class="steplistBox" v-for="item in lists" :key="item.date">
                  <div class="stepTit">
                      {{item.date}}
                  </div>
                  <ul class="status-list">
                      <li v-for="ele in item.lists" :key="ele.id">
                          <el-row>
                              <el-col :span="3" class="step_date">
                                  <div>{{ele.date}}</div>
                              </el-col>
                              <el-col :span="21" class="step_order">
                                  <el-row class="pictureBox">
                                       <el-col :span="4" class="pictureChild">
                                           <div class="pictureChildImg">
                                               <img src="http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg" alt="">
                                           </div>
                                       </el-col>
                                       <el-col :span="4" class="pictureChild">
                                           <div class="pictureChildImg">
                                               <img src="http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg" alt="">
                                           </div>
                                       </el-col>
                                       <el-col :span="4" class="pictureChild">
                                           <div class="pictureChildImg">
                                               <img src="http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg" alt="">
                                           </div>
                                       </el-col>
                                  </el-row>
                              </el-col>
                          </el-row>
                      </li>
                  </ul>
             </div>
         </div>
    </div>
</template>

<script>
    import {getPictureList} from '../../api/global';
    export default {
        name:"picture0", //照片
        data(){
            return{
                lists:[]
            }
        },
        methods:{
            pictureInit(){
                getPictureList({
                    limit:"10000",
                    page:"1"
                })
                .then(res=>{
                    if(res.data.status=="200"){
                        this.lists = res.data.data.lists
                        console.log(this.lists)
                    }
                })
            }
        },
        created(){
           this.pictureInit();
        }
    }
</script>

<style scoped lang="scss">
        .pictureChild{
            margin-right: 20px;
            .pictureChildImg{
                height: 100px;
                & > img{
                    width: 100%;
                    height: 100%;
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
                    // padding-bottom: 40px;
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
                
                  & .step_order{
                      & >div:nth-child(1){
                          padding:30px 0;
                          color: #808080;
                          position: relative;
                        
                      }
                  }
                }
            }
        }
    }
</style>