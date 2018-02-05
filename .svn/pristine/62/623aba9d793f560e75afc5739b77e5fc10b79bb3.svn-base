<template>
      <div class="dateSearchBox">
                        <el-row>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                <el-form :inline="true" id="selAreaForm">
                                    <el-form-item :label="tit" v-if="tit">
                                        <el-select v-if="isShowId"  @change="changeShop" v-model="list_current" id="selArea" placeholder="请选择门店">
                                            <el-option v-for="item in shop_list" :key="item.id" :label="item.shop_name" :value="item.id"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    </el-form>
                                </div>
                            </el-col>
                            <el-col :span="16" >
                                <div class="grid-content bg-purple" v-if="isShowDate">
                                    <el-radio-group v-model="cutDate" size="small" id="cut_date"  @change="radioCheckDate">
                                        <el-radio-button label="today">今天</el-radio-button>
                                        <el-radio-button label="yesterday">昨天</el-radio-button>
                                        <el-radio-button label="recent">近期</el-radio-button>
                                        <el-radio-button label="thisWeek">本周</el-radio-button>
                                        <el-radio-button label="thisMonth">本月</el-radio-button>
                                    </el-radio-group>
                                    <el-date-picker
                                                id="selectDate"
                                                @change="seachDate"
                                                v-model="last_visit"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                    </el-date-picker>
                                    <router-link :to="{name:'posEnter'}" type="primary" class="el-button el-button--primary" id="dataEntering">数据录入</router-link>
                                </div>
                                 <slot name="selectDate"></slot>
                            </el-col>
                </el-row>
        </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
            props:['tit','isShowDate','isShowId'],
            data(){
                return{
                    list_current:"",
                    last_visit:[],
                    cutDate:"today"
                }
            },
            computed:{
                  ...mapGetters([
                    'shop_list',  //店铺列表
                    'shop_list_current'
                ])
            },
            methods:{
                //切换店铺
            changeShop(val){
                this.$store.commit('CUT_SHOP_LIST_CURRENT',val);
                 this.$store.dispatch('getNotificationStatus',{
                    shop_id:this.shop_list_current
                })
                this.$emit('seachtrigger',{start:this.last_visit[0],end:this.last_visit[1]});
               
               
            }, //切换快捷日期
            radioCheckDate(val){
                var self = this;
                this.$store.dispatch('cut_date',val).then(res=>{
                        this.last_visit=[res.start,res.end];
                        this.$emit('seachtrigger',res);
                })
            }, //切换选择器日期
            seachDate(val){
                  console.log(val)
            }
        },
        created(){
            // console.log(this.tit)
            },
        mounted(){
            this.list_current = this.shop_list_current;
            //  初始化时为当天；
             this.$store.dispatch('cut_date',this.cutDate).then(res=>{
                        this.last_visit=[res.start,res.end];
                        this.$emit('seachtrigger',res);
                })
        }
        
    }
</script>

<style scoped lang="scss">
     .dateSearchBox{
        width: 100%;
        height: 80px;
        line-height: 80px;
        background-color: #ffffff;
        &   .el-form-item{
                margin: 0;
            }
        & .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange{
            right:129px!important;
        }
        #dataEntering{
         position: absolute;
         right:31px;
         top: 50%;
         transform: translate(0,-50%);
         padding: 10px 10px;
        }
        #cut_date{
            margin-left: 155px;
            & .el-radio-button__inner{
               color: #808080;
            }
        }
}
 .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
    width: 206px!important;
    position: absolute!important;
    top:50%;
    transform: translate(0,-50%);
  }
</style>