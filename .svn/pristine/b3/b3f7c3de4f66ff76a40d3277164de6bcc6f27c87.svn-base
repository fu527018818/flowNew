<template>
    <transition name="fade" mode="in-out">
                    <div class="dateEnterForm">
                        <el-form ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px" @submit.native.prevent>
                            <el-form-item label="录入方式" prop="type">
                                    <el-select v-model="ruleForm.type" placeholder="请选择录入方式" size="100%" @change="change">
                                        <el-option  label="按天" value="天"></el-option>
                                        <el-option  label="按小时" value="小时"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="选择时间" prop="input_time">
                                     <el-date-picker
                                        v-model="ruleForm.input_time"
                                        :type="dateType"
                                        placeholder="选择日期时间"
                                        :value-format="formatDate"
                                        >
                                </el-date-picker>                
                                </el-form-item>
                                <el-form-item label="营业总额" prop="price">
                                    <el-input v-model.number="ruleForm.price"></el-input>
                                </el-form-item>
                                <el-form-item label="交易笔数" prop="fixture_count">
                                    <el-input v-model.number="ruleForm.fixture_count"></el-input>
                                </el-form-item>
                                <el-form-item label="销售件数" prop="sales_count">
                                    <el-input v-model.number="ruleForm.sales_count"></el-input>
                                </el-form-item>
                                <el-form-item label="商品成本" prop="cost_price">
                                    <el-input v-model.number="ruleForm.cost_price"></el-input>
                                </el-form-item>
                                <el-form-item class="submitbtn">
                                    <el-button type="primary"  @click="onSubmit('ruleForm')">保存</el-button>
                                </el-form-item>
                    </el-form>  
                </div>             
    </transition>
</template>

<script>
  import {statisticsWrite} from '../../api/global'
  import {mapGetters} from 'vuex'
    export default {
         name:'postEnter',//数据录入
         data(){
             return {
                  dateType:'date',
                  formatDate:'yyyy-MM-dd',
                  ruleForm:{
                  price: "",
                  type: "",
                  input_time: "",
                  cost_price: "",
                  sales_count: "",
                  fixture_count: "" //成交笔数
                   },
                   rules:{
                       type:[
                           { required: true, message: '请选择录入方式', trigger: 'change' }
                       ],
                       price:[
                            { type: 'number', required: true, message: '营业额为数字', trigger: 'change' }
                       ],
                       cost_price:[
                            { type: 'number', required: true, message: '营业额为数字', trigger: 'change' }
                       ],
                       sales_count:[
                            { type: 'number', required: true, message: '营业额为数字', trigger: 'change' }
                       ],
                       fixture_count:[
                            { type: 'number', required: true, message: '营业额为数字', trigger: 'change' }
                       ],
                       input_time:[
                           { required: true, message: '请选择时间', trigger:'change'}
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
             change(value) {
                 if(value=="天"){
                     this.dateType = 'date';
                     this.formatDate ='yyyy-MM-dd';
                 }
                 else if(value=="小时"){
                     this.dateType='datetime';
                     this.formatDate="yyyy-MM-dd HH:mm:ss"
                 }           
        },
    onSubmit(formName) {
         this.ruleForm.shop_id=this.shop_list_current;
         this.$refs[formName].validate((valid)=>{
             if(valid){
                     statisticsWrite(this.ruleForm).then(res=>{
                          if(res.data.status == 200){
                             this.$message({
                            showClose: true,
                             message:'保存成功',
                             type: 'success'
                      });
                 }else{
                this.$message({
                    showClose: true,
                    message:res.data.message,
                    type: 'warning'
                 }); 
                 }
                   })
             }else{
                 console.log('error submit!!');
                return false;
             }
         })
         
    }
         }
    }
</script>

<style scoped lang="scss">
      .titCutBox{
   background-color:#ffffff;
   height: 68px;
   line-height: 68px;
   padding: 0 28px;
   & .titCut{
    border-bottom: solid 1px #cccccc;
     & .tit{
	   font-size: 18px;
	   font-weight: normal;
    	font-stretch: normal;
     color: #4d4d4d;
     padding-left: 2px;
   }
   &  .titCutRight div{
      display: inline-block;
       padding: 0 15px;
	     font-size: 14px;
	     font-weight: normal;
	     font-stretch: normal;
	     color: #4c4c4c;
   }
  }
   
}
.content {
  width: 1024px;
  margin: 0 auto;
  height: 969px;
  margin-top: 6px;
}
.dateForm{
  height: 800px;
  background-color:#ffffff;
  padding: 60px 0 0 30px;
}
.dateEnterForm {
  background-color: #ffffff;
  width: 430px;
  position: relative;
  & .el-form {
    position: absolute;
    top: 0;
  }
}
.dateEnterForm .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.submitbtn {
  text-align: left;
  & .el-button.el-button--primary{
    padding: 12px 60px;
  }
}
</style>