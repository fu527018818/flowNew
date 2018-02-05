<template>
    <div class="noticeBox">
    <el-row>
        <el-col :span="4">
            <div class="grid-content bg-purple neticeTit">
                <i class="iconfont icon-notice"></i>
                系统公告
            </div>
        </el-col>
        <el-col :span="16" class="noticeContent" style="height:45px;">
             <marquee v-if="notice_title">
                {{notice_title}}
            </marquee>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple neticeMore" @click="viewMore">
                查看更多
            <i class="iconfont icon-more"></i>
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                notice_title:state=>{
                       if(state.main.notice_title==''){
                           return false
                       }else{
                            var list ='';
                           state.main.notice_title.forEach(function(item){
                                 list += item.title +' ';
                            })
                            return list;
                       }
                        
                   
                }
            })
        },
        methods:{
            viewMore(){
                this.$emit('viewMore')
            }
        },
        created(){
           
        }
    }
</script>

<style scoped>
 .noticeBox{
    width: 100%;
    height: 45px;
    background-color: rgba(255, 255, 255, 1);
    line-height: 45px;
    -webkit-box-shadow: 0 0 1px #ccc;
    -moz-box-shadow: 0 0 1px #ccc;
    box-shadow: 0 0 1px #ccc;
 }
 .noticeBox .grid-content.bg-purple,.noticeContent marquee{
    display: inline-block;
    height: 45px;
    line-height: 45px;
    font-family: ﻿MicrosoftYaHei;
    font-size: 12px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: 0.7px;
    color: #4d4d4d;
 
 }
 .noticeContent marquee{
     font-size: 15px;
 }
 .neticeTit{
    margin-left: 20px;
    user-select: none;
 }
 .neticeTit .iconfont.icon-notice{
     color: rgba(255, 102, 72, 1);
     font-size: 14px;
 }
 .neticeMore .iconfont.icon-more{
     font-size: 13px;
 }
 .neticeMore{
     float: right;
     margin-right: 17px;
    cursor: pointer;
 }
</style>