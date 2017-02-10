<template>
    <div class="buttons">
        <div class="row">
            <button type="button" class="button">Button</button>
            <button type="button" class="button oval">Button</button>
            <button type="button" class="button leaf">Button</button>
        </div>
        <div class="row">
            <button type="button" class="button primary">Button</button>
            <button type="button" class="button character">Button</button>
            <button type="button" class="button disabled">Button</button>
        </div>
        <div class="row">
            <button type="button" class="button success">Button</button>
            <button type="button" class="button warning">Button</button>
            <button type="button" class="button danger">Button</button>
            <button type="button" class="button info">Button</button>
        </div>
        <div class="row">
            <button type="button" btn="primary" icon="home"></button>
            <button type="button" btn="primary" icon="pencil"></button>
            <button type="button" btn="primary" icon="dillar"></button>
            <button type="button" btn="primary" icon="undo"></button>
            <button type="button" btn="primary" icon="checkmark1"></button>
        </div>
        <div class="row">
            <button type="button" btn="primary" icon="redo"></button>
            <button type="button" btn="primary" icon="plus"></button>
            <button type="button" btn="primary" icon="minus"></button>
            <button type="button" btn="primary" icon="cross"></button>
            <button type="button" btn="primary" icon="arrow-right"></button>
            <button type="button" btn="primary" icon="arrow-left"></button>
        </div>
        <div class="row">
            <button type="button" btn="primary" ><i icon="spinner1"></i></button>
            <button type="button" btn="primary" ><i icon="spinner2"></i></button>
            <button type="button" btn="primary"><i icon="spinner3"></i></button>
            <button type="button" btn="primary" ><i icon="spinner4"></i></button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "v-button",
        data(){
            return {
                msg: "show"
            }
        },
        created(){
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
