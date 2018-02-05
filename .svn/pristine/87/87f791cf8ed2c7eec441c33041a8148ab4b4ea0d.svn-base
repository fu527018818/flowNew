<template>
    <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="100px">
                 <el-form-item label="店铺面积" prop="shop_area" class="wh_380">
                                <el-input v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                 <el-form-item label="店铺租金" prop="shop_rental_fee" class="wh_380">
                                <el-input v-model.number="ruleForm.shop_rental_fee"></el-input>
                 </el-form-item>
                 <el-form-item label="固资投入" prop="fixed_investment" class="wh_380">
                                <el-input v-model.number="ruleForm.fixed_investment"></el-input>
                 </el-form-item>
                <el-form-item label="员工薪资" prop="employee_salaries" class="wh_380">
                                <el-input v-model.number="ruleForm.employee_salaries"></el-input>
                </el-form-item>
                <el-form-item label="月业绩指标" prop="monthly_indicators" class="wh_380">
                                <el-input v-model.number="ruleForm.monthly_indicators"></el-input>
                </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </transition>
</template>

<script>
    import {mapState,mapGetters} from 'vuex';
    import {setShopMore} from '../../../api/global';
    export default {
        name:"moreInfo", //门店设置
        data(){
            return{
              ruleForm:{
                  shop_area:"",
                  shop_rental_fee:"",
                  fixed_investment:"",
                  employee_salaries:"",
                  monthly_indicators:""
              },
            rules:{
                shop_area:[
                       { required: true, message: '请输入店铺面积', trigger: 'blur' }
                ],
                shop_rental_fee:[
                     { type: 'number', required: true, message: '输入店铺租金', trigger: 'change' }
                ],
                fixed_investment:[
                     { type: 'number', required: true, message: '输入固资投入', trigger: 'change' }
                ],
                employee_salaries:[
                    { type: 'number', required: true, message: '输入员工薪资', trigger: 'change' }
                ],
                monthly_indicators:[
                    { type: 'number', required: true, message: '输入月业绩指标', trigger: 'change' }
                ]
            }
            }
        },
        computed:{
            ...mapState({
                shopInfo:state=>state.set.shopInfo
            }),
            ...mapGetters([
                'shop_list_current'
            ])
        },
        created(){
            this.moreInfoInit()
        
        },
        methods:{
            onSubmit(formName){
                 this.ruleForm.shop_id = this.shop_list_current;
                  this.$refs[formName].validate((valid)=>{
            if(valid){
              setShopMore(this.ruleForm).then(res=>{
                  if(res.status == 200){
                  this.$message({
                    showClose: true,
                    message:'保存成功',
                    type: 'success'
                 });
                 this.$emit('prentInit')
                }
                })
                }else{
                    return false;
                }
            })
            },
            moreInfoInit(){
                for(var key in this.ruleForm){
                    this.ruleForm[key] =this.shopInfo[key] * 1
                }
            }
        },
        watch:{
            shopInfo:function(val){
                console.log(val)
            }
        }

    }
</script>

<style scoped lang="scss">
    .el-form{
        & .line{
            text-align: center;
        }
       & .el-form-item.wh_380{
           width: 380px;
       }
       & .el-form-item:nth-child(5){
           width: 380px;
       }
        & .el-form-item:nth-child(6), & .el-form-item:nth-child(7){
           width: 600px;
       }
    }
    .submitbtn {
    text-align: left;
    & .el-button.el-button--primary{
        width: 150px;

    }
}
</style>