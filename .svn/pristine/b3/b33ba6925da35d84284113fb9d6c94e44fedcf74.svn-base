<template>
     <div class="titCutBox">
        <el-row>
            <el-col :span="6">
                <div class="">
                      <slot name="tit"></slot>
                </div>
            </el-col>
            <el-col :span="18">
            <div class="rightSearch">
                    <slot name="searchCon"></slot>
                    <div class="pagingBox">
                        <el-button @click="searchPages.current--&& goto()" :disabled="searchPages.current==1?true:false" size="mini" plain icon="el-icon-arrow-left"></el-button>
                            <input type="text" class="pagesNum" v-model="searchPages.current" v-on:blur="goto('goto')"  @keyup.enter="goto('goto')">
                        <el-button  @click="searchPages.current++&& goto()" :disabled ="searchPages.current==pageDate.tolPage?true:(pageDate.tolPage==0?true:false)" size="mini" plain> <i class="el-icon-arrow-right el-icon--right"></i></el-button>
                        <a @click="changPages"  class="tolPages">共<span>{{pageDate.tolPage}}</span>页</a>

                        <div v-if="isPages" class="changPageBox">
                            <span class="changCurrenPage">
                                <input type="text" v-model="searchPages.goPage">
                                <span class="advance" @click="goto('go')">Go</span>
                            </span>
                            <span class="eachPage">每页</span>
                            <el-select @change="goto" v-model="searchPages.limit"  id="indent">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value"
                                :label="item.label">
                                </el-option>
                            </el-select>
                            <img @click="changPages" class="cutShow" src="../../assets/img/cut_pages.png" alt="切换按钮">
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:"searchPage", //分页搜索组件
        props:['pageDate'],
        data(){
            return{
                isPages:false,
                currentPage3: 5,
                options: [{
                        value: 10,
                        label:10
                        }, {
                        value: 20,
                        label: 20
                        }, {
                        value:30,
                        label:30
                        }, {
                        value:40,
                        label:40
                        }, {
                        value:50,
                        label:50
                        }],
                searchPages:{
                    current:1,
                    limit:10,
                    goPage:""
                }
            }
        },
        methods:{
             changPages(){
          this.isPages = !this.isPages;
            },
            handleSizeChange(val){
                console.log(val)
            },
            handleCurrentChange(val){
                console.log(val)
            },
            goto(val){
              if(val=='go'){
                  if(this.searchPages.goPage > this.pageDate.tolPage){
                      this.$confirm('输入的页数不能大于'+this.pageDate.tolPage+'页,请重新输入?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                      })
                    .then(() => {
                         this.searchPages.goPage = ''
                     })
                    .catch(()=>{
                    })
                    return false;
                  }
                this.searchPages.current = this.searchPages.goPage;
              }
             else if(val=="goto"){
                   if(this.searchPages.current>this.pageDate.tolPage){
                     this.$confirm('输入的页数不能大于'+this.pageDate.tolPage+'页,请重新输入?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                      })
                    .then(() => {
                         this.searchPages.current='';
                     })
                    .catch(()=>{
                    })
                    return false;
                 }
              }
              this.$emit('changePagesSearch',this.searchPages)
            }
        },
        created(){
        }
    }
</script>

<style scoped lang="scss">
  .titCutBox{
        background-color: #ffffff;
        height: 77px;
        line-height: 77px;
     
    }
    .rightSearch{
        height:77px;
        text-align: right;
        padding-right:30px;
       
      & .pagingBox{
        display: inline-block;
        // margin-left:px;
        & .pagesNum{
            width: 28px;
            border: 1px solid #dcdfe6;
            height: 25px;
            position: relative;
            top:1px;
            text-align: center;
            font-size: 14px;
            letter-spacing: 0px;
            color: #808080;
        }
        & .el-button--mini, .el-button--mini.is-round{
            padding: 7px 10px;
            border-radius: 0;
        }
        & .el-icon-arrow-right.el-icon--right{
            margin:0;
        }
        & .tolPages{
                font-size: 14px;
                letter-spacing: 0px;
                color: #4c4c4c;
                cursor: pointer;
                text-decoration:underline;
        }
        & .changPageBox{
            height:77px;
            display: inline-block;
               padding-left:5px;
            & .changCurrenPage{
            position: relative;
            display: inline-block;
            height: 28px;
            line-height: 1;
            width: 78px;
            text-align: left;
            border: solid 1px #d2dce0;
            top:2px;
                & input{
                    width: 49px;
                    border: none;
                    height: 26px;
                    text-align: center;
                    // font-size: 14px;
                    color: #808080;
                }
             & .advance{
                 position: absolute;
                 right: 0;
                 top:50%;
                 transform: translate(0,-50%);
                 background-color: #4198ff;
                 padding: 9px 7px;
                 font-size: 12px;
                 cursor: pointer;
                letter-spacing: 0px;
                color: #ffffff;
                user-select: none;
                }
            }
            & .el-select{
             width: 60px;
             line-height: 1px;
        
            }
            & .el-input__inner{
                 height:30px!important;
             }
            & .cutShow{
                position: relative;
                top:9px;
                cursor: pointer;
            }
            & .eachPage{
                font-size: 14px;
                color: #4c4c4c;
                padding-left: 3px;
            }
        }
        }
    }
</style>