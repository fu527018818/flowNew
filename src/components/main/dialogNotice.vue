<template>
    <el-dialog
        id="dialogNotice"
        title="系统公告"
        
        :visible.sync="dialogVisible"
        v-if="notice_title"
        :before-close="handleClose">
            <el-collapse v-model="activeNames"  v-slim-scroll>
                <el-collapse-item id="ceshi" :name="index" v-for="(item,index) in notice_title" :key="item.id">
                    <template slot="title">
                        <span class="noticeTit">
                            <img v-if="item.flag=='1'?true:false" class="status" src="../../assets/img/noticeFlag.png">
                            {{item.title}}
                        </span>
                        <span style="float:right;padding-right:76px;">{{item.publish_time}}</span>
                    </template>
                    <div class="noticeContent">{{item.content}}</div>
                </el-collapse-item>
            </el-collapse>
</el-dialog>
</template>
<script>
    import {mapState,mapGetters} from 'vuex';
    export default {
        data(){
            return{
                 dialogVisible: true,
                 activeNames: [0]
            }
        },
    computed:{
        ...mapState({
            notice_title:state=>state.main.notice_title
        }),
        ...mapGetters([
            'shop_list_current'
        ])
    },
    methods: {
            handleClose(done) {
                    done();
            },
            showNotice(){
                this.dialogVisible= true;
            }
      },
      created(){
          this.$store.dispatch('notice_list',{shop_id:this.shop_list_current,is_publish:1})
      }
    }
</script>

<style scoped lang="scss">
    #dialogNotice{
    overflow: hidden;
    }
    .noticeTit{
        display: inline-block;
        position: relative;

        .status{
            position: absolute;
            right:-30px;
            top:5px;
        }
    }
    .noticeContent{
        text-indent: 2em;
    }

</style>