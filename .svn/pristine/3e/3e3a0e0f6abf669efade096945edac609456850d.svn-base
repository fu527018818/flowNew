<template>
    <div class="app">
         <main-nav :indexMenu="'/editNotice'"></main-nav>
          <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="titBox">
                        <div class="tit">
                            发布公告
                        </div>
                    </div>
                    <div class="formBox">
                           <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px">
                               <el-form-item label="公告标题" prop="title" class="wh_380">
                                    <el-input v-model="ruleForm.title"></el-input>
                                </el-form-item>
                                <el-form-item label="是否置顶" prop="flag">
                                    <el-radio-group id="editNotice" v-model="ruleForm.flag">
                                         <el-radio-button label="1">是</el-radio-button>
                                         <el-radio-button label="0">否</el-radio-button>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="发布时间" prop="publish_time" class="wh_380">
                                    <el-date-picker
                                        v-model="ruleForm.publish_time"
                                        type="datetime"
                                        placeholder="选择日期时间"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                       >
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="下架时间" prop="stop_time" class="wh_380">
                                    <el-date-picker
                                        v-model="ruleForm.stop_time"
                                        type="datetime"
                                        placeholder="选择日期时间"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        >
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="公告内容" prop="content">
                                    <el-input type="textarea" v-model="ruleForm.content"></el-input>
                                </el-form-item>
                                 <el-form-item class="submitbtn">
                                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                                </el-form-item>
                           </el-form>
                    </div>
                </div>
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
                ruleForm:{
                    title:"",
                    flag:"1",
                    publish_time:"",
                    stop_time:"",
                    content:""
                },
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
            if(this.$route.params.status){
                ls.set('edit',this.$route.params)
                if(this.$route.params.status =='add'){
                    this.ruleForm.publish_time = formatDate.getTodayHDS();
                    return
                }
                else if(this.$route.params.status=="edit"){
                       var data = ls.get('edit');
                    for(var key in this.ruleForm){
                        this.ruleForm[key] = data.curren[key]
                    }              
                    this.ruleForm.id = data.curren.id; 
                }
            }else{
                if(ls.get('edit').status=="add"){
                    this.ruleForm.publish_time = formatDate.getTodayHDS();
                    return
                }
                else if(ls.get('edit').status=="edit"){
                     var data = ls.get('edit');
                    for(var key in this.ruleForm){
                        this.ruleForm[key] = data.curren[key]
                    }              
                    this.ruleForm.id = data.curren.id;   
                }
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
.submitbtn {
    text-align: left;
    & .el-button.el-button--primary{
        width: 150px;
    }
}
</style>