<template>
    <!-- <div class="app">
         <div class="playBg" >
             <img v-if="false" src="../../assets/img/software/ly_ai_logo.png" alt="">
         </div>
         <video class="video" @click="ceshi">
            <source src="http://182.61.53.175:80/hls/test2.m3u8" type="video/mp4">
        </video>
        <div class="controlBar">
            <span class="tesn_tit">设备号:1232323</span>
            <ul class="BarRight">
                <li>
                    <i v-if="false" class="iconfont icon-bofang"></i>
                    <i class="iconfont icon-zanting"></i>
                </li>
                <li class="cutDefinition">
                    <span>高清</span>
                    <ul class="selectDefin">
                        <li>流畅</li>
                        <li>清晰</li>
                    </ul>
                </li>
                <li>
                    <i class="iconfont icon-icon--"></i>
                </li>
                <li>
                    <i class="iconfont icon-quanping"></i>
                </li>
            </ul>
        </div>
    </div> -->
    <div class="app">
        <video-player 
        class="vjs-custom-skin" 
        ref="videoPlayer" 
        :options="playerOptions" 
        @ready="onPlayerReadied" 
        @timeupdate="onTimeupdate"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @error="errorCut($event)"
        @click="ceshi"
        >
        </video-player>
        <div class="controlBar">
            <span class="tesn_tit">设备号:1232323</span>
            <ul class="BarRight">
                <li>
                    <i v-if="false" class="iconfont icon-bofang"></i>
                    <i class="iconfont icon-zanting"></i>
                </li>
                <li class="cutDefinition">
                    <span>高清</span>
                    <ul class="selectDefin">
                        <li>流畅</li>
                        <li>清晰</li>
                    </ul>
                </li>
                <li>
                    <i class="iconfont icon-icon--"></i>
                </li>
                <li>
                    <i class="iconfont icon-quanping"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"realPalyer",
        data(){
            return{
               currentTech:"html5",
               cutHighDefinition:"",
               playerOptions: {
                overNative: false,
                autoplay: false,
                controls: true,
                sourceOrder: true,
                techOrder : ['html5'],
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                sources: [{
                withCredentials: false,
                type: 'application/x-mpegURL',
                src: 'http://video.dianliubao.com:8080/hls/00e070747d47.m3u8'
                }],
                poster:'',
                controlBar:false,
                // {
                //     playToggle:false,  //开关
                //     // volumePanel:{   //声音控制器
                //     //     inline: false,
                //     //     vertical:true
                //     // },
                //     volumePanel:false,
                //     currentTimeDisplay:false,//当前时间
                //     timeDivider:false,
                //     durationDisplay:false,
                //     progressControl:{  // 进度条
                //         SeekBar:{}
                //     },
                //     progressControl:false,
                //     liveDisplay:false,
                //     remainingTimeDisplay:false,
                //     customControlSpacer:false,  //当前时间
                //     playbackRateMenuButton:false,
                //     chaptersButton:false,
                //     descriptionsButton:false,
                //     subtitlesButton:false,
                //     captionsButton:false,
                //     audioTrackButton:false,
                //     fullscreenToggle:true, // 全屏
                //     muteToggle: false //禁音按钮
                //   }
                }
            }
        },
        computed:{
            player () {
               return this.$refs.videoPlayer.player
            }
        },
        created(){
            
        },
        mounted(){
            //错误机制
          this.player.play()
          $(this.player.el_).hover(
              ()=>{
                  $(this.player.el_).parent().parent().find('.controlBar').addClass('show')
              },()=>{
                 $(this.player.el_).parent().parent().find('.controlBar').addClass('hide')
              }
          )
        $(this.player.el_.parentElement.parentElement).find('.controlBar').hover(
            ()=>{
               $(this).css({
                     opacity:"1"
                 })
            },
            ()=>{
                console.log
            }
        )
        },
        methods:{
            onPlayerReadied () {
                if (!this.initialized) {
                    this.initialized = true
                    this.currentTech = this.player.techName_
                }
            },
            dynamicID($Id){
                return $Id + parseInt(Math.random()*10000+123)
            }, 
            onTimeupdate (e) {
                // console.log(e.cache_.currentTime)
            // console.log('currentTime', e.cache_.currentTime)
            }, //播放
            onPlayerPlay(){
                // console.log(123)
            },//暂停
            onPlayerPause(){
                // console.log(123)
            },
            onPlayerPlaying(){
                // console.log('开始播放')
            },
            onPlayerWaiting(){
                // console.log('在等待')
            },
            ceshi(){
                // console.log(123)
            }
        }
    }
</script>

<style scoped lang="scss">
 
    .app{
        position: relative;
        & .video{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 9;
        }
        .playBg{
            height:100%;
            width: 100%;
            background-color:#4c4c4c;
            position:absolute;
            top: 0;
            & >img{
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .controlBar{
          height: 40px;
          width: 100%;
          line-height: 40px;
          background: rgba(43, 51, 63,0.7);
          position: absolute;
          bottom:0;
          z-index: 10;
          color: #ffffff;
          transition:visibility 1s opacity 1s;
          opacity:0;
            &.show{
                opacity: 1;
                visibility:visible;
            }
            &.hide{
                opacity: 0;
                visibility:hide;
            }
          & .tesn_tit{
              font-size: 12px;
              padding: 0 20px 0 12px;
          }
          & .BarRight{
              float: right;
              & >li{
                  float: left;
                  line-height: 40px;
                  height: 40px;
                  padding: 0 10px;
                 
                  & .iconfont{
                      font-size: 18px;
                  }
              }
              .iconfont.icon-icon--{
                  font-size:20px;
              }
          }
        }
        .cutDefinition{
            font-size: 12px;
            position: relative;
            cursor: pointer;
             .selectDefin{
                position: absolute;
                box-sizing: content-box;
                left: 0;
                top:-80px;
                background: rgba(43, 51, 63,0.7); 
                 & > li{
                    box-sizing: content-box;
                    padding: 0 10px;
                    opacity: 1;
                    cursor: pointer;
                    &:hover{
                        background-color:#4198ff;
                    }
                 }
                 
            }
        }
    }
    .video-player.vjs-custom-skin{
        width: 100%;
        height: 100%;
    }
</style>