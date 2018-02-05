<template>
    <div class="dateEnterForm">
        <el-form v-if="currentInfo"  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="80px">
            <div>
                <el-form-item label="促销敏感" prop="sales_promotion" class="wh_350">
                    <el-input v-model.number="ruleForm.sales_promotion"></el-input>
                </el-form-item>
            </div>
             <div class="mline">
                 <el-form-item label="消费水平" prop="consumption_grade" class="wh_350">
                    <el-input v-model.number="ruleForm.consumption_grade"></el-input>
                </el-form-item>
             </div>
             <div class="impressionBox mline">
                 <div>
                     用户印象
                 </div>
                 <div>
                    <el-tag
                    :key="tag"
                    v-for="tag in ruleForm.tag"
                    type='info'
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                    </el-tag>
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加新标签</el-button>
                 </div>
             </div>
              <div class="mpd twoFont">
                <el-form-item label="会员" prop="member_no" class="wh_350">
                    <el-input v-model.number="ruleForm.member_no"></el-input>
                </el-form-item>
              </div>
              <div class="twoFont">
                     <el-form-item label="生日" prop="birthday" class="wh_350">
                            <el-date-picker
                                v-model="ruleForm.birthday"
                                type="date"
                                placeholder="选择日期时间"
                                value-format="yyyy-MM-dd"
                                >
                            </el-date-picker>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="手机" prop="phone" class="wh_350">
                        <el-input v-model.number="ruleForm.phone"></el-input>
                    </el-form-item>
                </div>
               <div class="twoFont">
                    <el-form-item label="身高" prop="height" class="wh_350">
                        <el-input v-model.number="ruleForm.height"></el-input>
                    </el-form-item>
                </div>
               <div class="twoFont">
                    <el-form-item label="三围" class="wh_350">
                        <el-col :span="7">
                            <el-form-item prop="bust">
                                <el-input v-model.number="ruleForm.bust"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="1" class="line">-</el-col>
                        <el-col :span="7">
                            <el-form-item prop="waist">
                                <el-input v-model.number="ruleForm.waist"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="1" class="line">-</el-col>
                        <el-col :span="7">
                            <el-form-item prop="hipline">
                                <el-input v-model.number="ruleForm.hipline"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="鞋码" prop="shoe_size" class="wh_350">
                        <el-input v-model.number="ruleForm.shoe_size"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="颜色" prop="color_hoby" class="wh_350">
                        <el-input v-model.number="ruleForm.color_hoby"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont mline">
                    <el-form-item label="风格" prop="clothes_style" class="wh_350">
                        <el-input v-model.number="ruleForm.clothes_style"></el-input>
                    </el-form-item>
                </div>
                <div class="brandBox mline">
                     <div>
                        品牌偏好
                    </div>
                    <div class="brand">
                        <div class="brand_list" v-for="(item,index) in ruleForm.favorite_brand" :key="item.id">
                            <i class="el-icon-circle-close" @click="delTag(index)"></i>
                            <img :src="item.logo" alt="">
                        </div>
                    </div>
                    <div class="addBrand">
                         <el-select v-model="selectBrand" placeholder="请选择">
                            <el-option
                            v-for="item in brandList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select><el-button plain class="btnAdd" @click="addBrand">添加</el-button>
                    </div>
                </div>
                 <div class="twoFont mpd">
                    <el-form-item label="职业" prop="career" class="wh_350">
                        <el-input v-model.number="ruleForm.career"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="公司" prop="company" class="wh_350">
                        <el-input v-model.number="ruleForm.company"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="学校" prop="school" class="wh_350">
                        <el-input v-model.number="ruleForm.school"></el-input>
                    </el-form-item>
                </div>
                <div class="threeFont">
                    <el-form-item label="所在地" >
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
                         <el-select  @change="changeCity" v-model="ruleForm.area2" placeholder="请输入市区">
                             <el-option v-for="(item,index) in cityAll" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                       </el-form-item>                         
                    </el-col>
                    <el-col :span="1" class="line">-</el-col>
                    <el-col :span="7">
                        <el-form-item prop="area3">
                         <el-select v-model="ruleForm.area3" placeholder="请输入区县">
                             <el-option v-for="(item,index) in districtAll" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                       </el-form-item>                         
                    </el-col>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="故乡">
                        <el-col :span="7">
                            <el-form-item prop="hometown1">
                                <el-select  @change="changeProvinceHome" v-model="ruleForm.hometown1" placeholder="请输入省份" v-if="provinceAll">
                                    <el-option v-for="(item,index) in provinceAllhometown" :key="index" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item> 
                        </el-col>
                        <el-col :span="1" class="line">-</el-col>
                        <el-col :span="7">
                            <el-form-item prop="hometown2">
                            <el-select  @change="changeCityHome" v-model="ruleForm.hometown2" placeholder="请输入市区">
                                <el-option v-for="(item,index) in cityAllhometown" :key="index" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>                         
                        </el-col>
                        <el-col :span="1" class="line">-</el-col>
                        <el-col :span="7">
                            <el-form-item prop="hometown3">
                            <el-select v-model="ruleForm.hometown3" placeholder="请输入区县">
                                <el-option v-for="(item,index) in districtAllhometown" :key="index" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>                         
                        </el-col>
                    </el-form-item>
                </div>
                <div class="twoFont">
                    <el-form-item label="邮箱" prop="email" class="wh_350">
                        <el-input v-model.number="ruleForm.email"></el-input>
                    </el-form-item>
                </div>
                <div class="mline">
                    <el-form-item label="是否孩子" prop="has_children" class="wh_350">
                        <el-input v-model="ruleForm.has_children"></el-input>
                    </el-form-item>
                </div>
                <div class="twoFont mpd">
                    <el-form-item label="备注" prop="memo" class="wh_350">
                        <el-input type="textarea" v-model="ruleForm.memo"></el-input>
                    </el-form-item>
                </div>
                <div>
                     <el-form-item class="submitbtn">
                        <el-button type="primary" @click="onSubmitEdit('ruleForm')">保存</el-button>
                    </el-form-item>
                </div>  
        </el-form> 
    </div>
</template>

<script>
    import {mapGetters,mapState} from 'vuex';
    import {getCity,getBrandList,userEditData} from '../../../api/global';

    export default {
        name:"userEdit", //用户编辑
        data(){
            return{
              ruleForm:{
                  sales_promotion:"",
                  consumption_grade:"",
                  tag:[],
                  area1:"",
                  area2:"",
                  area3:"",
                  hometown1:"",
                  hometown2:"",
                  hometown3:"",
                  member_no:"",
                  birthday:"",
                  phone:"",
                  height:"",
                  shoe_size:"",
                  color_hoby:"",
                  clothes_style:"",
                  bust:"",
                  waist:"",
                  hipline:"",
                  favorite_brand:[],
                  career:"",
                  company:"",
                  school:"",
                  email:"",
                  has_children:"",
                  memo:""
              },
               provinceAll:"",
               cityAll:"",
               districtAll:"",
               defArea:"",
               provinceAllhometown:"",
               cityAllhometown:"",
               districtAllhometown:"",
               defAreahometown:"",
               inputVisible: false,
               inputValue: '',
               brandList: [],
               selectBrand: '', //当前选中要添加得品牌
               rules:{

              }  
            }
        },
        computed:{
            ...mapState({
                currentInfo:state=>state.user.currentInfo
            }),
            ...mapGetters([
                'shop_list_current'
            ])
        },
        methods:{
            handleClose(tag) {
                this.ruleForm.tag.splice(this.ruleForm.tag.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                this.ruleForm.tag.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            //省
            getProvince(id){
                getCity({
                    id:""
                }).then(res=>{
                   this.provinceAll = res.data.data.lists
                   this.provinceAllhometown =res.data.data.lists
                })
            },//市
            getCity(id,isWho){
                getCity({
                    id:id
                }).then(res=>{
                    if(isWho=="area"){
                          this.cityAll=res.data.data.lists
                    }
                    else if(isWho=="home"){
                        this.cityAllhometown=res.data.data.lists
                    }
                  
                })
                .catch(err=>{
                    console.log(err)
                })
            },//区
            getDistrict(id,isWho){
                getCity({
                    id:id
                }).then(res=>{
                    if(isWho=="area"){
                        this.districtAll=res.data.data.lists
                    }
                     else if(isWho=="home"){
                        this.districtAllhometown=res.data.data.lists
                    }
                    
                })
                .catch(err=>{
                    console.log(err)
                })
            },//改变省  area
             changeProvince(val){
                this.cityAll="";
                this.districtAll="";
                this.ruleForm.area2="";
                this.ruleForm.area3="";
                this.getCity(this.ruleForm.area1,'area');
            },//改变市 area
            changeCity(val){
                this.ruleForm.area3="";
                this.getDistrict(this.ruleForm.area2,'area');
            },//改变省 Home
            changeProvinceHome(){
                this.cityAllhometown="";
                this.districtAllhometown="";
                this.ruleForm.hometown2="";
                this.ruleForm.hometown3="";
                 this.getCity(this.ruleForm.hometown1,'home');
            },//改变市 Home
            changeCityHome(){
                this.ruleForm.hometown3="";
                this.getDistrict(this.ruleForm.hometown2,'home');
            }, //用户进入编辑初始化
            userEditInit(){

              
                if(this.currentInfo.area){
                     this.defArea = this.currentInfo.area.split(',');
                     
                }else{

                    this.defArea = ['', '', '']
                }
                if(this.currentInfo.defAreahometown){
                   
                    this.defAreahometown = this.currentInfo.hometown.split(',');
                }else{
                    this.defAreahometown=['', '', '']
                }
               
                this.getProvince();
                this.getCity(this.defArea[0],'area');
                this.getDistrict(this.defArea[1],'area');
                this.getCity(this.defAreahometown[0],'home');
                this.getDistrict(this.defAreahometown[1],'home');
                 for(var key in this.ruleForm){
                    this.ruleForm[key]=this.currentInfo[key]
                }
                this.ruleForm.area1 = this.defArea[0];
                this.ruleForm.area2 = this.defArea[1];
                this.ruleForm.area3 = this.defArea[2];
                this.ruleForm.hometown1 = this.defAreahometown[0];
                this.ruleForm.hometown2 = this.defAreahometown[1];
                this.ruleForm.hometown3 = this.defAreahometown[2];
               
            }, //添加品牌列表
            addBrand(){
                var self = this
                if(this.selectBrand){
                        if(this.ruleForm.favorite_brand.length>0){
                            this.ruleForm.favorite_brand.forEach(item=>{
                                if(item.id ==self.selectBrand){
                                     this.$message.error(item.name+'已经存在');
                                     self.selectBrand =""
                                     return false;
                                }
                            })
                            this.brandList.forEach(function(item){
                                    if(item.id ==self.selectBrand){
                                        self.ruleForm.favorite_brand.push(item)
                                    }
                            })
                            
                        }else{
                            console.log(123)
                             this.brandList.forEach(function(item){
                                    if(item.id ==self.selectBrand){
                                        self.ruleForm.favorite_brand.push(item)
                                    }
                            })
                        }
                  
                }else{
                  this.$message.error('请选择'); 
              }
              console.log(self.ruleForm.favorite_brand)
            },
            delTag(index){
                this.ruleForm.favorite_brand.splice(index,1);
            },
            onSubmitEdit(formName){
               this.$refs[formName].validate((valid)=>{
                   if(valid){
                     this.ruleForm.shop_id = this.shop_list_current;
                     this.ruleForm.member_id = this.currentInfo.id;
                     this.ruleForm.area = this.ruleForm.area1+','+this.ruleForm.area2+','+this.ruleForm.area3
                     this.ruleForm.hometown = this.ruleForm.hometown1+','+this.ruleForm.hometown2+','+this.ruleForm.hometown3
                      userEditData(this.ruleForm).then(res=>{
                          if(res.data.status ==200){
                              this.$emit('parentInit')
                              this.$router.push({name:"userDetailsInfo"});
                          }
                      }) 
                   }
               })
            }
        },
        created(){
            getBrandList({}).then(res=>{
                this.brandList = res.data.lists;
            })
            if(this.currentInfo){
                this.userEditInit()
            }
        },
        watch:{
            currentInfo:function(val){
                this.userEditInit()
            }
        }
    }
</script>

<style scoped lang="scss">
    .dateEnterForm{
        padding: 30px  30px 0 60px;
       & .el-form-item.wh_350{
           width: 350px;
       }
       & .mline{
           border-bottom: 1px dashed #cccccc;
       }
       & .mpd{
           padding-top: 20px;
       }
       & .impressionBox{
           text-align: left;
           padding-bottom:20px;
           &>div:nth-child(1){
               color: #606266;
               font-size: 14px;
               line-height: 53px;
               padding-left: 12px;
           }
           & >div:nth-child(2){
               max-height:100px;
           }
       }
    }
    .el-tag + .el-tag {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .brandBox{
        text-align: left;
        padding-bottom:20px;
      & > div:nth-child(1){
           color: #606266;
            font-size: 14px;
            line-height: 53px;
            padding-left: 12px;
      }
      & .brand{
          display: flex;
          padding-bottom: 30px;
          & .brand_list{
              position: relative;
              z-index: 1;
            &  .el-icon-circle-close{
                color: #ef6542;
                position: absolute;
                font-size:12px; 
                right: -6px;
                top: -6px;
                z-index:10;
                cursor: pointer;
            }
              width:80px;
              height: 40px;
              margin: 0 10px;
              & > img{
                  width: 100%;
                  height: 100%;
              }
          }
      }
    & .addBrand{
        padding-left: 12px;
        line-height: 40px;
        & .btnAdd{
            margin-left: 2px;
        }
    }
  }
   .submitbtn {
    text-align: right;
    & .el-button.el-button--primary{
        width: 150px;

    }
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
}
</style>