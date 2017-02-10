<template>
    <div>
        <transition name="showDateComponent">
        <div class="dateComponent" v-show="showDateComponent">
            <div class="dateHeader">
                <button class="button" icon="icon-first"
                        v-on:click.prevent.self="previousYearDate($event)"
                ></button>
                <button class="button" icon="icon-previous"
                        v-on:click.prevent.self="previousMonthDate($event)"></button>
                <div class="wrapper">
                    <button class="button year" v-on:click.stop="clickYear($event)">{{currentDate.getFullYear()}} 年
                    </button>
                    <button class="button date">{{currentDate.getMonth()+1}} 月</button>
                </div>
                <button class="button" icon="icon-next" v-on:click.prevent.self="nextMonthDate($event)"></button>
                <button class="button" icon="icon-last" v-on:click.prevent.self="nextYearDate($event)"></button>
            </div>
            <div class="dateContent">
                <table class="dateTable">
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                    <tr v-for="(value,key,index) in dataItem">
                        <td v-for="day in value" :wj_disabled="isDisable(day,index)">{{day.getDate()}}</td>
                    </tr>
                </table>
            </div>
        </div>
        </transition>
        <input type="text" placeholder="请选择日期" class="dateControl" v-on:click.prevent.self="showDateComponent =!showDateComponent">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                disableItem: new Map,
                dataItem: {0: []},
                currentDate: new Date(),
                showDateComponent:false
            }
        },
        methods: {
            clickYear(ele){
                ele.toElement.blur();
            },
            getCurrentMonth(today){
                let oneDay = 24 * 60 * 60 * 1000;
                let backTime = today.getTime();
                let advanceTime = today.getTime();
                let disableDayCount = today.getDay() + 8;
                backTime -= (24 * 60 * 60 * 1000) * disableDayCount;
                let count = 41;
                let backResultDate;
                let first = true;
                let row = 0;
                for (let i = 0; i <= count; i++) {
                    if (i < disableDayCount - 1) {
                        backTime += oneDay;
                        backResultDate = new Date(backTime);
                        this.disableItem.set(backResultDate, true);
                        if (i % 7 == 0) {
                            row++;
                        }
                        if (!this.dataItem[row]) {
                            this.dataItem[row] = [];
                        }
                        this.dataItem[row].push(backResultDate);
                    } else {
                        if (i % 7 == 0) {
                            row++;
                        }
                        if (!this.dataItem[row]) {
                            this.dataItem[row] = [];
                        }
                        if (first) {
                            this.dataItem[row].push(new Date(advanceTime));
                            first = false;
                        } else {
                            advanceTime += oneDay;
                            this.dataItem[row].push(new Date(advanceTime));
                        }
                    }
                }
                return this.dataItem;
            },
            isDisable(date){
                let nextMonth = date.getMonth();
                nextMonth = nextMonth == 0 ? 12 : nextMonth;
                let currentMonth = this.currentDate.getMonth();
                currentMonth = currentMonth == 0 ? 12 : currentMonth;
                if (date < this.currentDate) {
                    if (this.disableItem.get(date)) {
                        return "wj_disabled";
                    }
                }
                if (nextMonth > currentMonth) {
                    return "wj_white_disabled";
                }
            },
            nextMonthDate(ele){
                let date = this.currentDate;
                let nextMonth = date.getMonth() + 2;
                let year = date.getFullYear();
                year = nextMonth > 12 ? year + 1 : year;
                nextMonth = nextMonth > 12 ? nextMonth - nextMonth % 12 * 12 : nextMonth;
                let nextMonthDate = year + "-" + nextMonth + "-1";
                this.disableItem = new Map;
                this.dataItem = {0: []};
                this.getCurrentMonth(new Date(nextMonthDate));
                this.currentDate = new Date(nextMonthDate);
                ele.toElement.blur();

            },
            previousMonthDate(ele){
                let date = this.currentDate;
                let previousMonth = date.getMonth();
                let year = date.getFullYear();
                year = previousMonth == 0 ? year - 1 : year;
                previousMonth = previousMonth == 0 ? 12 : previousMonth;
                let nextMonthDate = year + "-" + previousMonth + "-1";
                this.disableItem = new Map;
                this.dataItem = {0: []};
                this.getCurrentMonth(new Date(nextMonthDate));
                this.currentDate = new Date(nextMonthDate);
                ele.toElement.blur();

            },
            nextYearDate(ele){
                let date = this.currentDate;
                let year = date.getFullYear() + 1;
                let nextMonth = date.getMonth() + 1;
                nextMonth = nextMonth > 12 ? nextMonth - nextMonth % 12 * 12 : nextMonth;
                let nextMonthDate = year + "-" + nextMonth + "-1";
                this.disableItem = new Map;
                this.dataItem = {0: []};
                this.getCurrentMonth(new Date(nextMonthDate));
                this.currentDate = new Date(nextMonthDate);
                ele.toElement.blur();

            },
            previousYearDate(ele){
                let date = this.currentDate;
                let year = date.getFullYear() - 1;
                let nextMonth = date.getMonth() + 1;
                nextMonth = nextMonth > 12 ? nextMonth - nextMonth % 12 * 12 : nextMonth;
                let nextMonthDate = year + "-" + nextMonth + "-1";
                this.disableItem = new Map;
                this.dataItem = {0: []};
                this.getCurrentMonth(new Date(nextMonthDate));
                this.currentDate = new Date(nextMonthDate);
                ele.toElement.blur();
            },
        },
        created(){
            this.getCurrentMonth(new Date());
            this.currentDate = new Date();
        },
        computed: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
