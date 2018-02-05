<template>
    <div class="dataListBox" v-if="chart">
        <el-row :gutter="10" class="dataList" >
            <el-col :span="6" >
                    <div class="grid-content bg-purple" @click="goto({name:chart.turnover.name,url:'orderDetail'})">
                        <div>{{chart.turnover.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18">{{chart.turnover.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover.compare_rate+'%'}}<i :class="['iconfont',chart.turnover.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                        <div id="marking" v-bind:style="'width:'+ chart.turnover.completion+'%'"></div>
                    </div>  
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.total_people.name,url:'orderDetail'})">
                        <div>{{chart.total_people.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.total_people.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.total_people.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.total_people.is_rise=='1'?'':'rise_down']">
                            {{chart.total_people.compare_rate+'%'}}<i :class="['iconfont',chart.total_people.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple"  @click="goto({name:chart.turnover_count.name,url:'orderDetail'})">
                        <div>{{chart.turnover_count.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.turnover_count.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover_count.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover_count.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover_count.compare_rate+'%'}}<i :class="['iconfont',chart.turnover_count.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.turnover_rate.name,url:'statisticsRefer'})">
                        <div>{{chart.turnover_rate.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.turnover_rate.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover_rate.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover_rate.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover_rate.compare_rate+'%'}}<i :class="['iconfont',chart.turnover_rate.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.unit_price.name,url:'statisticsRefer'})">
                        <div>{{chart.unit_price.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.unit_price.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.unit_price.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.unit_price.is_rise=='1'?'':'rise_down']">
                            {{chart.unit_price.compare_rate+'%'}}<i :class="['iconfont',chart.unit_price.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.joint_rate.name,url:'statisticsRefer'})">
                        <div>{{chart.joint_rate.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.joint_rate.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.joint_rate.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.joint_rate.is_rise=='1'?'':'rise_down']">
                            {{chart.joint_rate.compare_rate+'%'}}<i :class="['iconfont',chart.joint_rate.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.new_guest_contribution.name,url:'orderDetail'})">
                        <div>{{chart.new_guest_contribution.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.new_guest_contribution.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.new_guest_contribution.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.new_guest_contribution.is_rise=='1'?'':'rise_down']">
                            {{chart.new_guest_contribution.compare_rate+'%'}}<i :class="['iconfont',chart.new_guest_contribution.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple" @click="goto({name:chart.old_guest_contribution.name,url:'orderDetail'})">
                        <div>{{chart.old_guest_contribution.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.old_guest_contribution.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.old_guest_contribution.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.old_guest_contribution.is_rise=='1'?'':'rise_down']">
                            {{chart.old_guest_contribution.compare_rate+'%'}}<i :class="['iconfont',chart.old_guest_contribution.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {};
  },
  computed: {},
  created() {
      
  },
  methods:{
    goto(val){
       this.$emit('goto',val)
    }
  },
  watch: {
    chart: function(val) {
        // console.log(val);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/css/chartlist.scss';
</style>