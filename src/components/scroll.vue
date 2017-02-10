<template>
    <div class="wrapper" ref="wrap" v-on:mousedown="mousedown" v-on:mouseup="mouseup" v-on:mouseleave="mouseleave"
         v-on:touchstart="touchstart" v-on:touchend="touchend" v-on:touchmove="touchmove">
        <slot name="content"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                wrap: 0,
                mouseClientY: 0,
            }
        },
        created(){
            this.$nextTick(() => {
                this.wrap = this.$refs.wrap;
                this.wrap.style.userSelect = 'none';
                this.wrap.style.webkitUserSelect = 'none';
                this.wrap.style.mozUserSelect = 'none';
                this.wrap.style.msUserSelect = 'none';
                this.wrap.style.cursor = 'default';
            })
        },
        methods: {
            mousedown(mouse){
                this.mouseClientY = mouse.clientY;
                this.wrap.onmousemove = (mouse) => {
                    let mouveDistance = mouse.clientY - this.mouseClientY;
                    this.wrap.scrollTop += (mouveDistance * 0.1);
                }
            },
            mouseup(){
                this.wrap.onmousemove = null;
            },
            mouseleave(){
                this.wrap.onmousemove = null;
            },
            touchstart(mouse){
                this.mouseClientY = mouse.touches[0].clientY;
            },
            touchmove(mouse){
                let mouveDistance = mouse.touches[0].clientY - this.mouseClientY;
                this.wrap.scrollTop += (mouveDistance * 0.1);
            },
            touchend(){
                this.wrap.ontouchmove = null;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
