<template>
 <div class="dateShowBox">
       <div class="dateSearchBox">
           <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                    <el-form :inline="true" id="selAreaForm">
                        <el-form-item label="今日动态">
                            <el-select  @change="changeShop" v-model="list_current" id="selArea" placeholder="请选择门店">
                                <el-option v-for="item in shop_list" :key="item.id" :label="item.shop_name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="16" class="mainRight">
                    <div class="grid-content bg-purple">
                        <!-- <router-link :to="{name:'posEnter'}" type="primary" class="el-button el-button--primary" id="dataEntering">数据录入</router-link> -->
                    </div>
                </el-col>
          </el-row>
       </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data(){
            return {
                value6:"",
                list_current:"",
         
            }
        },
        computed:{
            ...mapGetters([
                'shop_list',  //店铺列表
                'shop_list_current'
           ]),
           ...mapState({
               chart:state =>state.main.chart   //初始化时数据为空，异步加载的数据
           })
        },
        methods:{
            changeShop(val){
                this.$store.dispatch('cut_shop_list_current',val);
                //切换门店时公告切换
                this.$store.dispatch('notice_list',{shop_id:this.shop_list_current,is_publish:1})
                this.$emit('mainInit',val);
                //消息状态
                this.$store.dispatch('getNotificationStatus',{
                    shop_id:this.shop_list_current
                })
            },
            toStatistics(val){
                this.$router.push({name:val,params:{val}})
            }
        },
        created (){
            this.list_current = this.shop_list_current
        }
    }
</script>

<style scoped lang="scss">
    .dateShowBox{
      width: 1024px;
      height: 80px;
      background-color: rgba(255, 255, 255, 1);
      margin-top: 6px;
      -webkit-box-shadow: 0 0 1px #ccc;
      -moz-box-shadow: 0 0 1px #ccc;
      box-shadow: 0 0 1px #ccc;
}
.dateSearchBox{
    width: 100%;
    height: 80px;
    line-height: 80px;
    & .grid-content.bg-purple{
        height: 80px;
        line-height: 80px;
        position: relative;
    }
}
.el-form-item{
    margin: 0;
}
// .shortcutBox{
//     display: inline-block;
//     width: 175px;
//     height:80px;
//     margin-left: 130px;
//     margin-right: 24px;
//     position: relative;
//     & >div:nth-child(1){
//         width:100%;
//         height: 21px;
//         line-height: 21px;
//         background-color: rgba(242, 242, 242, 1);
//         position: absolute;
//         top:50%;
//         transform: translate(0,-50%);
//         display: flex;
//         & div{
//             flex-grow:1;
//             font-size: 12px;
//             font-weight: normal;
//             font-style: normal;
//             font-stretch: normal;
//             line-height: 20px;
//             letter-spacing: 0.7px;
//             color: #808080;
//             text-align: center;
//             cursor: pointer;
//         }
//     }
// }
// #dataEntering{
//     position: absolute;
//     right:20px;
//     top: 50%;
//     transform: translate(0,-50%);
//     padding: 10px 10px;
// 	border-radius: 2px;
// }
.shortcutBtn .tab{
    background-color: #48a7ff;
    color: #ffffff!important;
}
</style>