<template>
     <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="当前密码" prop="old_password" class="wh_380">
                                <el-input type="password" v-model="ruleForm2.old_password"></el-input>
                 </el-form-item>
                <el-form-item label="密码" prop="pass" class="wh_380">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" class="wh_380">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="submitForm('ruleForm2')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </transition>
</template>

<script>
    import {modifyPassword} from '../../api/global';
    import md5 from 'js-md5';
    export default {
        data() {
     var validateOldPass = (rule,value,callback)=>{
         if (value === '') {
          callback(new Error('请输入当前密码密码'));
        }
        function check(str) { var cnt = 0; if (/[a-zA-Z]+/.test(str)) cnt++;  if (/[0-9]+/.test(str)) cnt++; if (/_+/.test(str)) cnt++; if (cnt < 2) return false; return /^\w{6,20}$/.test(str);}
         if(!check(value)){
             callback('密码为6到20位数字与字母组合或下划线');
         }
        callback();

     } 
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            function check(str) { var cnt = 0; if (/[a-zA-Z]+/.test(str)) cnt++;  if (/[0-9]+/.test(str)) cnt++; if (/_+/.test(str)) cnt++; if (cnt < 2) return false; return /^\w{6,20}$/.test(str);}
            if(!check(value)){
                callback('密码为6到20位数字与字母组合或下划线');
            }
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          function check(str) { var cnt = 0; if (/[a-zA-Z]+/.test(str)) cnt++;  if (/[0-9]+/.test(str)) cnt++; if (/_+/.test(str)) cnt++; if (cnt < 2) return false; return /^\w{6,20}$/.test(str);}
            if(!check(value)){
                callback('密码为6到20位数字与字母组合或下划线');
            }
          callback();
        }
      };
      return {
        ruleForm2: {
          old_password:"",
          pass: '',
          checkPass: '',
        },
        rules2: {
          old_password:[
              { validator: validateOldPass, trigger: 'change' } 
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            modifyPassword({
                old_password:md5(this.ruleForm2.old_password),
                new_password:md5(this.ruleForm2.pass)
            })
            .then(res=>{
                console.log(res)
                var self = this 
                if(res.status==200){
                     this.$message({
                        message: '修改密码成功,请重新登录',
                        type: 'success'
                    });
                    setTimeout(function(){
                        self.$store.commit('REMOVE_TOKEN');
                        self.$router.push({name:"loginPwd"});
                    },2000)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
.el-radio__inner{
    border-radius:100%;
}
</style>