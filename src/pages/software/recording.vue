<template>
    <div class="app">
        <main-nav :indexMenu="'/software'"></main-nav>
        <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                      <search-date :isShowDate="false" :tit="'监控'" :isShowId="true" @seachtrigger="seachtrigger">
                          <div slot="softWare" class="softWareBox">
                               <el-dropdown 
                                  style="line-height:1px;vertical-align: middle;" 
                                  @visible-change="changeDrop"
                                  placement="top"
                                  >
                                    <span class="el-dropdown-link">
                                        <img v-if="isDrop" src="../../assets/img/software/default/iphone.png" alt="">
                                        <img v-else src="../../assets/img/software/glide/iphone.png" alt="">
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>联系人：韩梅梅</el-dropdown-item>
                                        <el-dropdown-item>电话：0592-909090</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown><el-button type="primary" @click="$router.go(-1)" class="goBack">返回</el-button>
                          </div>
                      </search-date>
                      <div class="realTimeBox">
                          <div class="playerBox clearFix">
                              <real-player ref="realPlayer" :lists="currentVideo"  :bAutoPlay="true"
                              @uploadImg="uploadImg" 
                              @playerCb="playerCb"
                              @pauseCb ="pauseCb"
                              @stopCb ="stopCb"
                              @updateCb ="updateCb">
                              </real-player>
                          </div>
                           <record-shortcut @changeDate="changeDate" ></record-shortcut>
                          <div class="timeBarBox">
                              <time-bar ref="timeBar"
                              @sendTime="selectBarTime" 
                              :bToday="isToday" 
                              :startTime="currentScroll"
                              ></time-bar>
                          </div>
                      </div>
                </div>
                 <div class="contentFooter isMd6"></div>
            </div>
        </div>
        <el-dialog
            title="截图预览"
            :visible.sync="showBigHeader"
            width="40%"
            :before-close="handleClose"
            center>
            <img class="bigHeader" :src="screenshotUrl" alt="">
             <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible">上传到相册</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import MainNav from '../../components/MainNav';
import searchDate from '../../components/common/searchDate';
import TimeBar from '../../components/common/timeBar';
import realPlayer from '../../components/realTimePlayer/realPalyer';
import recordShortcut from '../../components/softWare/recordShortcut';
import {dataURLtoBlob,upload} from '../../assets/js/uploadImg';
import {mapGetters} from 'vuex';
import {getVideoPlayBack} from '../../api/global';
import dateSelect from '../../assets/js/dateSelect';
    export default {
        name:"recording", //录像
        components:{MainNav,searchDate,realPlayer,TimeBar,recordShortcut},
        data(){
            return{
                isDrop:true,
                showBigHeader:false,
                screenshotUrl:"",
                currentVideo:"",
                date:"",
                startScroll:0,   //视频开始时间
                currentScroll:0, //视频当前时间
                slice:"12.00",
                isToday:true,
                rulerSlideEle:null
            }
        },
        computed:{
             ...mapGetters([
               'userInfo',
               'shop_list_current',
               'secret',
               'token'
           ])
        },
        methods:{
            changeDrop(isDrop){
                this.isDrop = !isDrop
            }, //切换店铺时默认放回上级页面
            seachtrigger(val){
                if(typeof val==="object"&&!val.length){
                    this.$router.go(-1);
                }
            }, //截图图片上传
            uploadImg(imgUrl){
               this.screenshotUrl = imgUrl;
               this.showBigHeader = true;
                },
                handleClose(done){
                    done();
                    this.screenshotUrl = "";
                    
                }, //上传图片
                dialogFormVisible(){
                    var file = dataURLtoBlob(this.screenshotUrl);
                    upload(
                         '/utils/upload',
                            file,
                            this.token,
                            this.userInfo.id,
                            this.secret,
                            'images'
                    ).then(res=>{
                            this.showBigHeader = false;
                            this.$message({
                                message:'图片已上传到相册',
                                type: 'success'
                                });
                            this.screenshotUrl = "";
                    })
                    .catch(err=>{
                        this.$message.error(err);
                    })
                }, //尺子滑动结束后时间回调
                selectBarTime(data){
                    if (!data) {
                        return;
                    }
                    this.slice = this.two_char(data.hour) + '.'+ this.two_char(data.min);

                    this.getVideoPlay();
                }, //快捷时间切换回调
                /**
                 * 改变日期
                 */
                changeDate(val){
                    //判断日期是否当天
                    if(dateSelect.getToday().start ==val){
                        this.isToday=true;

                        var now = new Date();                    //当前日期     
                        var nowHour = now.getHours();         //得到小时
                        var nowMinute = now.getMinutes(); //得到分钟
                        this.slice = this.two_char(nowHour) + '.'+ this.two_char(nowMinute);
                    }else{
                        this.isToday=false;
                        
                        //默认从0点开始播放
                        this.slice = this.two_char(0) + '.'+ this.two_char(0);
                    }
                                        

                    this.date = val;
                    //获取新视频
                    this.getVideoPlay();
                }, //获取录像地址
                /**
                 * 请求视频数据
                 */
                getVideoPlay(){
                    //先暂停视频再请求
                    this.$refs.realPlayer.player.pause();
                    getVideoPlayBack({
                        client_id:1,
                        shop_id:this.currentVideo.shop_id,
                        user_id:this.userInfo.id,
                        device_id:this.currentVideo.id,
                        te_sn:this.currentVideo.te_sn,
                        date:this.date,
                        slice:this.slice.replace(':','.')
                    }).then(res=>{
                        if(res.data.status=="200"){
                            var ele = this.slice.split('.');
                            this.currentVideo.te_rtsp_0 = res.data.data.url;
                            this.currentVideo.te_rtsp_1 = res.data.data.url;
                            this.$refs.realPlayer.playAddSrc();
                            this.startScroll = this.currentScroll = this.$refs.timeBar.formatTimeToDate(ele[0],ele[1],0);
                        }
                    })
                },
                two_char(n){
                    return n >= 10 ? n : '0' + n;
                },
                /**
                 * 播放计时更新
                 */
                rulerSlide(){

                },//播放回调
                /**
                 * 视频播放回调
                 */
                playerCb(){

                }, //播放回调
                /**
                 * 视频停止回调
                 */
                stopCb(){

                },
                /**
                 * 视频暂停回调
                 */
                pauseCb(){
                    console.log(3333,this.$refs.realPlayer.player.currentTime())
                }, //清楚尺子滑动定时器
                /**
                 * 更新
                 */
                updateCb(data){
                    //console.log(555,data,this.$refs.realPlayer.player.currentTime())
                    this.currentScroll = this.startScroll + parseInt(this.$refs.realPlayer.player.currentTime());
                }
            },
            created(){
                this.date = dateSelect.getToday().start;
                //穿透过来后获取视频地址
                if(this.$route.params.currentVideo){
                    this.currentVideo =this.$route.params.currentVideo;
                    ls.set('currentVideo',this.currentVideo)
                }else{
                    this.currentVideo = ls.get('currentVideo')
                }
            },
            mounted(){
                this.startScroll = this.currentScroll = this.$refs.timeBar.countMaxEndTime();
            },
            beforeDestory() {
            }
        }
</script>

<style scoped lang="scss">
    .softWareBox{
        text-align: right;
        padding-right:21px;
        & .el-dropdown{
            padding:0 10px;
        }
        & .img_mid{
            vertical-align: middle;
            padding: 0 10px;
        }
    }
    .goBack{
        padding:12px 5px;
        border-radius: 0;
        margin:0 10px;
    }

     .realTimeBox{
        width: 1024px;
        min-height: 1200px;
        margin-top:6px;
        background-color: #ffffff;
        padding: 25px;
        box-sizing:border-box;
    }
    .playerBox{
       height:575px;
    }
    .bigHeader{
        width: 100%;
        display:inline-block;
    }
    .timeBarBox{
        padding:0 20px;
    }
</style>