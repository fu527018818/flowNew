<template>
    <div>
        <div class="searchResult">
            <div class="searchResult">
                共找到{{userSearch.search_count}}个结果
            </div>
            <!-- 表单条件筛选 stat-->
                        <el-collapse-transition>
                            <div class="searchCondition" v-show="isFold">
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            性别
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.gender">
                                                <el-radio :label="''">全选</el-radio>
                                                <el-radio :label="'1'">男</el-radio>
                                                <el-radio :label="'0'">女</el-radio>
                                            </el-radio-group>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            上次到店
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.date" @change="radioCheckDate">
                                                <el-radio  :label="'全部'"></el-radio>
                                                <el-radio  :label="'今天'"></el-radio>
                                                <el-radio  :label="'昨天'"></el-radio>
                                                <el-radio  :label="'近七天'"></el-radio>
                                                <el-radio  :label="'本周'"></el-radio>
                                                <el-radio  :label="'上周'"></el-radio>
                                                <el-radio :label="'本月'"></el-radio>
                                                <el-radio  :label="'上月'"></el-radio> 
                                            </el-radio-group>
                                            <el-date-picker
                                                v-model="search.last_visit"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            累计消费
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                         <el-checkbox :indeterminate="isIndeterminate" v-model="checkAllBuy" @change="handleCheckAllChange">全选</el-checkbox>
                                            <el-checkbox-group v-model="search.total_consumption" @change="handleCheckedChange">
                                                <el-checkbox v-for="item in total_consumptionValue"  :label="item"  :key="item">{{item == 10000?item+'元以上':item + '元'}}</el-checkbox>
                                         </el-checkbox-group> 
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                        <div class="searchName">
                                            消费次数
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-checkbox :indeterminate="isIndeterminate_1" v-model="checkAllNum" @change="handleCheckAllNumChange">全选</el-checkbox>
                                            <el-checkbox-group v-model="search.consumption_sequence" @change="handleCheckedNumChange">
                                                <el-checkbox v-for="item in consumption_sequenceValue" :key="item" :label="item">{{item ==">10"? item +'次以上': item +"次"}}</el-checkbox>
                                            </el-checkbox-group>
                                    </el-col>
                                </el-row>
                                <el-row class="searchList">
                                    <el-col :span="3">
                                    <div class="searchName">
                                            是否是会员
                                        </div>
                                    </el-col>
                                    <el-col :span="21">
                                            <el-radio-group v-model="search.is_member">
                                                <el-radio :label="''"> 全选</el-radio>
                                                <el-radio :label="'1'">是</el-radio>
                                                <el-radio :label="'0'">否</el-radio>
                                            </el-radio-group>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-transition>
                        <!-- 表单条件筛选 end-->
                        <!-- 选中条件溢出到下面I really don't understand that this product is really fuck -->
                        <div class="manageSearch">
                            <el-row>
                                <el-col :span="3">
                                    <div class="conditionTit">
                                        筛选条件：
                                    </div>
                                </el-col>
                                <!-- 标签 -->
                                <el-col :span="15">  
                                        <div class="conditionTag">
                                            <el-tag 
                                            type="info" closable
                                            :disable-transitions="false"
                                            v-if="!search.gender==''&&search.gender.length > 0"
                                            @close="handleClose(search.gender,'search.gender')"
                                            >
                                            <span>性别：{{search.gender==1?'男':'女'}}</span>    
                                            </el-tag><el-tag 
                                            type="info"
                                            v-if="!search.last_visit==''&&search.last_visit.length > 0"
                                            >
                                                <span>上次到店：{{search.last_visit[0]+'至'+search.last_visit[1]}}</span>    
                                            </el-tag><el-tag
                                            type="info" 
                                            closable 
                                            v-if="!search.is_member==''&&search.is_member.length > 0"
                                            @close="handleClose(search.is_member,'search.is_member')"
                                            >
                                                <span>会员：{{search.is_member==1?'是':'否'}}</span> 
                                            </el-tag><el-tag 
                                            type="info" 
                                            closable
                                            v-if="search.total_consumption.length > 0 && typeof search.total_consumption =='object'"
                                            @close="handleClose(search.total_consumption,'search.total_consumption')"
                                            >
                                            累计消费： <span  v-for='item in search.total_consumption' :key="item">{{item + '元/'}}</span>    
                                            </el-tag><el-tag
                                            type="info" closable v-if="search.consumption_sequence.length > 0 && typeof search.consumption_sequence =='object'"
                                            @close="handleClose(search.consumption_sequence,'search.consumption_sequence')"
                                            >
                                            累计消费： <span  v-for='item in search.consumption_sequence' :key="item">{{ item + '次/'}}</span>    
                                            </el-tag>
                                        </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="searchBtn">
                                        <div @click="showColse">{{statusFold}}<i class="el-icon--right" v-bind:class="[isFold?'el-icon-arrow-up':'el-icon-arrow-down']"></i></div>
                                        <el-button type="primary" @click="submitBtn">
                                            筛选
                                        </el-button>
                                        <el-button type="primary" @click="closeSearch">
                                            清空
                                        </el-button>
                                    </div>
                                </el-col> 
                            </el-row>
                            <div>
                        </div>
                        <div class="manageTable">
                            <div class="tableBox"
                                 v-loading="loading"
                                element-loading-text="拼命加载中"
                                element-loading-background="rgba(255,255,255,0.5)"
                            >
                                <search-user-table></search-user-table>
                            </div>
                        </div>
                        <search-page :pageDate="pageDate"  @changePagesSearch="changePagesSearch">
                        </search-page>  
                </div>
                
        </div>
    </div>
</template>

<script>
    import getDate from '../../assets/js/dateSelect';
    import searchPage from 'components/statistic/searchPage';
    import searchUserTable from '../../components/search/searchUserTable.vue'
    import formatBg from '../../assets/js/formatterbg';
    import {mapState,mapGetters} from 'vuex'
    const  total_consumptionValue = ['0','1-999','1000-1999','2000-4999','5000-10000','10000']
    const  consumption_sequenceValue = ['0','1','2-4','5-10','>10']
    export default {
        name:"searchUser", //搜客户
        components:{searchUserTable,searchPage},
        data(){
            return{
                loading: true,
                statusFold:'收起',
                searchFuzzy:"",
                pageDate:"",
                lists:"",
                checkAllNum:false,
                checkAllBuy: false,
                isFold:true,
                page:"1",
                limit:"10",
                search:{
                    gender:'',
                    date:"全部",
                    last_visit:[],
                    total_consumption:[], //累计消费
                    consumption_sequence:[], //消费次数
                    is_member:"",
                    search:""
                },
                isIndeterminate:true,
                isIndeterminate_1:true,
                total_consumptionValue :total_consumptionValue,
                consumption_sequenceValue:consumption_sequenceValue
            }
        },
        computed:{
            ...mapState({
                userSearch:state=>state.search.userSearch
            }),
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
             radioCheckDate(val){
                 switch (val){
                     case '全部':
                           this.formatShowDate(getDate.getAllDate())
                     break;
                     case '今天':
                           this.formatShowDate(getDate.getToday())
                     break;
                     case '昨天':
                           this.formatShowDate(getDate.getYesterdayDate())
                     break;
                     case '本周':
                           this.formatShowDate(getDate.getWeekDate())
                     break;
                     case '上周':
                           this.formatShowDate(getDate.getUpWeekDate())
                     break;
                     case '本月':
                           this.formatShowDate(getDate.getMonthDate())
                     break;
                     case '上月':
                           this.formatShowDate(getDate.getLastMonthDate())
                     break;
                     case '近七天':
                           this.formatShowDate(getDate.getToday())
                     break;
                 }
            },
            formatShowDate(obj){
                this.search.last_visit = [];
                for(var key in obj){
                    this.search.last_visit.push(obj[key])
                }
            },
             handleClose(tag,val){
                switch(val){
                    case 'search.gender':
                        this.search.gender = "";
                    break;
                    case'search.date':
                        this.search.date = "";
                    break;
                    case 'search.service_user':
                        this.search.service_user="";
                    break;
                    case 'search.total_consumption':
                      this.search.total_consumption=[]
                    break;
                    case 'search.consumption_sequence':
                        this.search.consumption_sequence=[]
                    break;
                    case 'search.is_user':
                        this.search.is_user = []
                    break;
                }
            },
             handleCheckAllChange(val) {
                    this.search.total_consumption = val ? total_consumptionValue:[];
                    this.isIndeterminate = false;
            },
            handleCheckedChange(value) {
                    let checkedCount = value.length;
                    this.checkAllBuy = checkedCount === this.total_consumptionValue.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.total_consumptionValue.length;
            }, 
            handleCheckAllNumChange(val){
                    this.search.consumption_sequence = val ? consumption_sequenceValue:[];
                    this.isIndeterminate_1 = false;
            },
            handleCheckedNumChange(value){
                    let checkedCount = value.length;
                    this.checkAllNum = checkedCount === this.consumption_sequenceValue.length;
                    this.isIndeterminate_1 = checkedCount > 0 && checkedCount < this.consumption_sequenceValue.length;
            },
            closeSearch(){
                 var search = this.search;
                for(var key in search){
                      console.log(search[key])
                    if(key=="last_visit"||key=="total_consumption"||key=="consumption_sequence"){
                            search[key] = [];
                    }
                    else if(key=="date"){
                        search[key]="今天"
                     
                    }else{
                        search[key]= '';
                    }
                }
                this.radioCheckDate('今天')
            },
            submitBtn(){
                this.searchUserInit(true)
            },
            showColse(){
                this.isFold = !this.isFold;
                if(this.isFold==true){
                        this.statusFold="收起"
                    }else{
                        this.statusFold="展开"
                    }
            },
            changePagesSearch(val){
                 this.limit = val.limit;
                 this.page = val.current;
                 this.searchUserInit(true);
            },
            searchUserInit(val){
                var self = this;
                this.loading = true;
                var data = {
                    shop_id:this.shop_list_current,
                    search:{
                        search:''||this.$route.query.search,
                        gender:this.search.gender,
                        last_visit:this.search.last_visit,
                        total_consumption:this.search.total_consumption,
                        consumption_sequence:this.search.consumption_sequence,
                        is_member:this.search.is_member
                    },
                    page:this.page,
                    limit:this.limit
                }
                if(val){
                    delete data.search.search
                }
                this.$store.dispatch('globalSearchUser',data).then(res=>{
                    if(res.status==200){
                        var info = res.data.data;
                        this.pageDate = formatBg.formatPageDate(info.limit,info.page,info.search_count)
                        setTimeout(function(){
                             self.loading = false
                        },500)
                    }
                })
            }
        },
         created(){
              this.radioCheckDate('全部');
              this.searchUserInit();
        },
        watch:{
            $route(){
                this.searchUserInit();
            }
        }
    }
</script>

<style scoped lang="scss">
    .searchResult{
	font-size: 12px;
    color: #808080;
    line-height: 30px;
    }
       .manageSearch{
        background-color: #ffffff;
        line-height:42px;
        padding:20px 0;
         &  .conditionTit{
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;

        }
        &  .conditionTag{
        width: 100%;
        height: 100%;
        }
        & .searchBtn{
        line-height: 77px;
        font-family: MicrosoftYaHeiLight;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        cursor: pointer;
        user-select: none;
        & > div:nth-child(1){
            color: #808080;
            font-size: 14px;
            display: inline-block;
            margin: 0 10px;
        }
        }
    }
    .searchCondition{
        width:100%;
        background-color: #ffffff;
        transition: all 1.5s inherit;
        box-sizing: border-box!important;
       & .searchList{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #cccccc;
        overflow: hidden;
       & .searchName{
           font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #808080;
       }
    }
    }
   .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
       width: 240px;
} 
    .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange{
        margin-left: 40px;
        position:relative;
        top:0px;
    }
    .el-checkbox-group{
        display: inline-block!important;
        margin-left: 30px!important;
    }
    .manageTable{
        width: 100%;
        height: auto;
        background-color: #ffffff;
        margin-top: 6px;
    }
    .el-tag--info{
            margin-right: 12px;
            border-radius: 0;
            border: 0;
        }
</style>