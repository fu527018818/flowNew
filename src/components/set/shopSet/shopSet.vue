<template>
    <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px">
                <el-form-item label="门店ID" prop="id" class="wh_380">
                                <el-input v-model="ruleForm.id" disabled></el-input>
                 </el-form-item>
                 <el-form-item label="门店名称" prop="shop_name" class="wh_380">
                                <el-input v-model="ruleForm.shop_name"></el-input>
                 </el-form-item>
                 <el-form-item label="门店电话" prop="telephone" class="wh_380">
                                <el-input v-model="ruleForm.telephone"></el-input>
                 </el-form-item>
                 <el-form-item label="负责人" prop="manager" class="wh_380">
                                <el-input v-model="ruleForm.manager"></el-input>
                 </el-form-item>
                <el-form-item label="联系电话" prop="manager_phone" class="wh_380">
                                <el-input v-model="ruleForm.manager_phone"></el-input>
                </el-form-item>
                <el-form-item label="门店地址" >
                    <el-col :span="7">
                        <el-form-item prop="area1">
                            <el-select  @change="changeProvince" v-model="ruleForm.area1" placeholder="请输入省份" v-if="provinceAll">
                                <el-option v-for="(item,index) in provinceAll" :key="index" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item> 
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="7">
                        <el-form-item prop="area2">
                         <el-select prop="area2" @change="changeCity" v-model="ruleForm.area2" placeholder="请输入市区">
                             <el-option v-for="(item,index) in cityAll" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                       </el-form-item>                         
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="7">
                        <el-form-item prop="area3">
                         <el-select prop="area3" v-model="ruleForm.area3" placeholder="请输入区县">
                             <el-option v-for="(item,index) in districtAll" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                       </el-form-item>                         
                    </el-col>
                 </el-form-item>
                 <el-form-item label="" prop="address">
                        <el-input type="textarea" v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="introduction">
                        <el-input type="textarea" :rows="7" v-model="ruleForm.introduction"></el-input>
                </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </transition>
</template>

<script>
    import {mapState} from 'vuex';
    import {getCity,setShopBasic} from '../../../api/global';
    import {mapGetters} from 'vuex';

    export default {
        name:"shopSet", //门店设置
        data(){
            return{
              ruleForm:{
                  shop_name:"",
                  telephone:"",
                  manager:"",
                  manager_phone:"",
                  area1:"",
                  area2:"",
                  area3:"",
                  address:"",
                  introduction:"",
                  id:""
              },
            provinceAll:"",
            cityAll:"",
            districtAll:"",
            defArea:"",
            rules:{
                shop_name:[
                    { required: true, message: '请输入门店名称', trigger: 'blur' }
                ],
                manager:[
                     { required: true, message: '请输入门店名称', trigger: 'blur' }
                ],
                area1:[
                     { required: true, message: '请选择', trigger: 'blur' }
                ],
                 area2:[
                     { required: true, message: '请选择', trigger: 'blur' }
                ],
                 area3:[
                     { required: true, message: '请选择', trigger: 'blur' }
                ],
                address:[
                    { required: true, message: '请输入详细地址', trigger: 'blur' }
                ],
                introduction:[
                     { required: true, message: '请输入简介', trigger: 'blur' }
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
            if(this.shopInfo){
                this.shopSetInit();
            }
        },
        methods:{
            onSubmit(formName){
                    this.ruleForm.shop_id = this.shop_list_current;
                    this.ruleForm.area=this.ruleForm.area1+','+this.ruleForm.area2+','+this.ruleForm.area3
                    this.$refs[formName].validate((valid)=>{
                        if(valid){
                            setShopBasic(this.ruleForm)
                            .then(res=>{
                                    if(res.status == 200){
                                    this.$message({
                                        showClose: true,
                                        message:'保存成功',
                                        type: 'success'
                                    });
                                    this.$emit('prentInit'); 
                                }
                            })
                        }
                    })
            },
            shopSetInit(){
                this.defArea = this.shopInfo.area.split(',');
                this.getProvince();
                this.getCity(this.defArea[0]);
                this.getDistrict(this.defArea[1]);
                for(var key in this.ruleForm){
                    this.ruleForm[key] = this.shopInfo[key]
                }
                this.ruleForm.area1 = this.defArea[0];
                this.ruleForm.area2 = this.defArea[1];
                this.ruleForm.area3 = this.defArea[2];
            },
            //省
            getProvince(id){
                getCity({
                    id:""
                }).then(res=>{
                    console.log(res)
                   this.provinceAll = res.data.data.lists
                })
            },//市
            getCity(id){
                getCity({
                    id:id
                }).then(res=>{
                    this.cityAll=res.data.data.lists
                })
                .catch(err=>{
                    console.log(err)
                })
            },//区
            getDistrict(id){
                getCity({
                    id:id
                }).then(res=>{
                    this.districtAll=res.data.data.lists
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            changeProvince(val){
                this.cityAll="";
                this.districtAll="";
                this.ruleForm.area2="";
                 this.ruleForm.area3="";
                this.getCity(this.ruleForm.area1);
            },
            changeCity(val){
                this.ruleForm.area3="";
                this.getDistrict(this.ruleForm.area2);
            },
        },
        watch:{
            shopInfo:function(val){
                this.shopSetInit()
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
       & .el-form-item:nth-child(6){
           width: 500px;
       }
        & .el-form-item:nth-child(7),& .el-form-item:nth-child(8){
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