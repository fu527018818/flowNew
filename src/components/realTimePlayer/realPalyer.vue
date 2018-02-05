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
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" @timeupdate="onTimeupdate">
        </video-player>
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
                src: 'http://182.61.53.175:80/hls/test2.m3u8'
                }],
                poster: '',
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
            console.log(this.$refs)
        },
        mounted(){   
                // var SBtn = this.player.controlBar.addChild(`button`);
                // SBtn.addClass('abcd');
                // SBtn.setAttribute('id', 'fs');
                // SBtn.on('click', this.abcd);
                //设备号
                var tesn = this.player.controlBar.addChild(`button`);
                 tesn.addClass('tesn')
                $('.tesn').append('<div>设备：309c230f9c3c</div>').css({
                    width:"auto",
                    padding:"0 10px",
                })
                //播放器 实时
                var isRealTime = this.player.controlBar.addChild(`button`);
                 //在自定义的全屏button中添加id属性
                var  $isRealTime = this.dynamicID('isRealTime')
                isRealTime.setAttribute('id', $isRealTime);
                $('#'+$isRealTime).append('<div>'+'实时'+'</div>').css({
                      marginRight:"5rem"
                })
                //播放暂停按钮
                console.log(this.player.controlBar.addChild('playToggle'))
                //高清
                var highDefinition = this.player.controlBar.addChild(`button`);
                var $highDefinition = this.dynamicID('highDefinition');
                highDefinition.setAttribute('id', $highDefinition);
                highDefinition.on('click',this.changeKiss);
                $('#'+$highDefinition)
                .append('<button class="highDefinition">高清</button><ul class="cutHighDefinition listSelect"><li>高清</li><li>流畅</li></ul>')
                .css({
                    position:"relative",
                    fontSize:"12px"
                })
                .find('.cutHighDefinition')
                .css({
                    width:"40px",
                    lineHeight:"30px",
                    background:"rgba(0,0,0,0.8)",
                    position:"absolute",
                    top:"-60px",
                    left:"50%",
                    transform:"translate(-50%,0)",
                    transition:"all 2s linear",
                    zIndex:"1"
                })
                .find('li')
                .hover(function(){
                    $(this).css({backgroundColor:"#4198ff"})

                },function(){
                      $(this).css({background:"rgba(0,0,0,0.8)"})
                })

                //截图
                var screenshot = this.player.controlBar.addChild(`button`);
                var $screenshot = this.dynamicID('screenshot');
                screenshot.setAttribute('id', $screenshot);
                $('#'+$screenshot).append('<i class="iconfont icon-icon--"></i>').find('.iconfont.icon-icon--').css({
                    fontSize:"22px"
                })
                //录像
                var VCR = this.player.controlBar.addChild(`button`);
                var $VCR = this.dynamicID('VCR');
                VCR.setAttribute('id', $VCR);
                $('#'+$VCR).append('<i class="iconfont icon-luzhi"></i>').find('.iconfont.icon-luzhi').css({
                    fontSize:"22px"
                })
                //  this.playerOptions.autoplay = true; 
                this.player.play()
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
            // console.log('currentTime', e.cache_.currentTime)
            },
            changeKiss(event){
                    var $currentEle = $(event.target)
                    if($currentEle.context.nodeName =="LI"&&$currentEle.parent().hasClass('listSelect')){

                    }
               
            },
            abcd(){
                console.log(333)
            },
            ceshi(event){
                console.log(event)
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
          background-color: #000000;
          position: absolute;
          bottom:0;
          z-index: 10;
          opacity: 0.8;
          color: #ffffff;
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
          }
        }
        .cutDefinition{
            font-size: 12px;
            position: relative;
             .selectDefin{
                position: absolute;
                box-sizing: content-box;
                left: 0;
                top:-80px;
                background: rgba(0, 0, 0,0.8); 
                 & > li{
                    box-sizing: content-box;
                    padding: 0 10px;
                    opacity: 1;
                    cursor: pointer;
                    &:hover{
                        background-color: red;
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