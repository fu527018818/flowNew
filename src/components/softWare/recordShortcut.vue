<template>
        <div class="shortCutBox">
            <div class="calendarBtn">
                <i class="iconfont icon-calendar" @click="CalendarBtn"></i>
                <div class="selectDate">
                    <el-date-picker
                        ref="selectdDate"
                        v-model="clearDate"
                        type="date"
                        @change="getChangeDate"
                        value-format="yyyy-M-d"
                        placeholder="选择日期"
                        :picker-options="pickerOptions"
                        >
                    </el-date-picker>
                </div>
               
            </div><ul class="shortcutDate">
                    <li v-for="(item,index) in shortcutList" :key="item"><span @click="selectShortcut(item,index)" :class="['exactDate',shortcutIndex==index?'active':'']">{{item.substr(5)}}</span></li>
            </ul>
             <div class="search" slot="searchCon">
                <div class="f-input">
                        <input type="text" v-model="searchFuzzy"  @keyup.enter="searchIndent"  validateevent="true" placeholder="输入小票号查询">
                </div>
                <span class="searchIcon" @click="searchIndent">
                    <i class="iconfont icon-serach"></i>
                </span>
             </div>
        </div>
</template>

<script>
    import formatDate from '../../assets/js/dateSelect'; 
    export default {
        name:"recordShortcut",
        props:{
            changeDate:{
                type:Function    //时间回调
            }
        },
        data(){
            return{
                clearDate:"", //清除时间
                currentDate:"",
                shortcutList:[], //快捷列表
                shortcutIndex:0,
                searchFuzzy:"",
                pickerOptions:{
                    disabledDate(time) {
                        return time.getTime() > Date.now() - 8.64e6;
                    }
                }
            }
        },
        methods:{
            //显示日历
            CalendarBtn(){
                this.date = "";
                this.$refs.selectdDate.focus();
            }, //选择时间
            getChangeDate(val){
               if(val){
                    this.shortcutList = [];
                    this.currentDate = val;
                    this.clearDate = "";
                    var eleArr = this.currentDate.split('-');
                    this.shortcutList =formatDate.getShortcutDate(eleArr[0]*1,eleArr[1]*1 -1,eleArr[2]*1);
                    this.$emit('changeDate', this.shortcutList[this.shortcutIndex]);
               }else{
                   return;
               }
            },
            selectShortcut(val,index){
                this.shortcutIndex=index;
                this.$emit('changeDate',val)
            },
            searchIndent(){

            }

        },
        created(){
             this.shortcutList =formatDate.getShortcutDate();
        }

    }
</script>

<style scoped lang="scss">
    .shortCutBox{
        height: 70px;
        line-height:70px;
        position: relative;
    }
    .calendarBtn{
        width: 41px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        z-index: 1000;
        & .iconfont.icon-calendar{
            font-size: 20px;
            position: relative;
            z-index: 1000;
            cursor: pointer;
            padding:21px 21px 21px 0;
        }
    }
    .shortcutDate{
            display: inline-block;
            position: absolute;
            & li{
                float: left;
                height: 70px;
                line-height: 70px;
                width: 55px;
                text-align: center;
                cursor: pointer;
                position: relative;
                margin-right:10px;
                .exactDate{
                    font-size: 14px;
                    display: block;
                    line-height: 20px;
                    position: absolute;
                    width: 100%;
                    top:50%;
                    transform:translate(0,-50%);
                    color: #4c4c4c;
                    user-select: none;
                   &.active{
                       background-color: #4198ff;
                       color: #ffffff;
                   }
                }
                
            }
        }
    .selectDate{
        position: absolute;
        top:0;
        left:0;
        z-index:0;
        opacity: 0;
        cursor: pointer;
    }
    .search{
            width: 250px;
            height: 30px;
            position: absolute;
            display: inline-block;
            right:0;
            top: 50%;
            transform: translate(0,-50%);
            .f-input{
                line-height: 1px;
                & input{
                    vertical-align:middle;
                    display: table-cell;
                    border:0;
                    height:30px;
                    padding: 0;
                    width: 196px;
                    box-sizing: border-box;
                    background-color: #ffffff;
                    border: 1px solid #dcdfe6;
                    -webkit-appearance:none;
                    text-indent: 10px;
                }
            }
           & .searchIcon{
               cursor: pointer;
               width:54px;
               height: 30px;
               display:inline-block;
               background-color: #4198ff;
               position: absolute;
               right: 0;
               top:0;
               & .icon-serach{
                 color: #ffffff;
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 font-size: 20px;
                 transform: translate(-50%,-50%);
                 line-height: 0;
               }
           }
        }
</style>