<template>
    <div class="app">
         <main-nav :indexMenu="'/editInterFace'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titBox">
                        <div class="tit">
                            {{curId?"编辑店铺":'新增店铺'}}
                        </div>
                    </div>
                    <div class="formBox">
                           <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px">
                               <el-form-item label="店铺名称" prop="title" class="wh_380">
                                    <el-select v-model="ruleForm.title" placeholder="请选择" style="width:300px">
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="APPID" prop="title" class="wh_380">
                                    <el-input v-model="ruleForm.title"></el-input>
                                </el-form-item>
                                <el-form-item label="KEY" prop="title" class="wh_380">
                                    <el-input v-model="ruleForm.title"></el-input>
                                </el-form-item>
                                
                                 <el-form-item class="submitbtn">
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                                </el-form-item>
                           </el-form>
                    </div>
                </div>
                <div class="contentFooter isMd6"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav.vue';
    import formatDate from '../../assets/js/dateSelect';
    import {editEditWrite} from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"edit", //修改-新增-下架
        components:{mainNav},
        data(){
            return{
                curId:null,
                ruleForm:{
                    title:"",
                    flag:"1",
                    publish_time:"",
                    stop_time:"",
                    content:""
                },
                options:[
                    {
                    value: '选项1',
                    label: '枫多士'
                    }, {
                    value: '选项2',
                    label: '阿维得'
                    }
                ],
                rules:{
                   title:[
                       { required: true, message: '请输入', trigger: 'blur' }
                   ],
                   flag:[
                       { required: true, message: '请输入', trigger: 'blur' }
                   ],
                   publish_time:[
                        { required: true, message: '请选择上架日期', trigger: 'change' }
                   ],
                   stop_time:[
                        {  required: true, message: '请选择下架日期', trigger: 'change' }
                   ],
                   content:[
                       { required: true, message: '请输入公告内容', trigger: 'blur' }
                   ]
                }
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            onSubmit(formName){
                 this.ruleForm.shop_id = this.shop_list_current;
                 this.$refs[formName].validate((valid)=>{
                     if(valid){
                          editEditWrite(this.ruleForm).then(res=>{
                                if(res.status ==200){
                                    this.$message({
                                        message: '保存成功',
                                        type: 'success'
                                        });
                                    this.$router.push({name:"newNotice"}); 
                                }
                         })
                     }
                 })
            }
        },
        created(){
            if (this.$route.params.id) {
                this.curId = this.$route.params.id;
            }
        }
    }
</script>

<style scoped lang="scss">
    .titBox{
	font-size: 18px;
	letter-spacing: 1px;
    color: #4d4d4d;
    background-color: #ffffff;
    padding:0 30px;
    & .tit{
        padding:30px 0 20px 0;
        border-bottom: 1px solid #cccccc;
    }
}
.formBox{
    min-height: 800px;
    background-color: #ffffff;
    padding: 60px 30px;
}
.el-form{
        & .line{
            text-align: center;
        }
       & .el-form-item.wh_380{
           width: 380px;
       }
       & .el-form-item:last-child{
           width: 600px;
       }
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 100%!important;
    }
    .areasize{
           width: 600px;
    }
.submitbtn {
    text-align: left;
    & .el-button.el-button--primary{
        width: 150px;
    }
}
</style>