<template>
    <div class="col-lg-12 col-sm-12">
        <div id='main'>
            <div class="col">
                <vue-typer
                    :text='["안녕하세요.\n유태선입니다."]'
                    :repeat='infinity'
                    initial-action='typing'
                    :suffle='true'
                    :pre-type-delay='1500'
                    :type-delay='200'
                    :pre-erase-delay='1500'
                    :erase-delay='200'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='solid'
                ></vue-typer>
            </div>
            <div class="col" id="btn">
               <button @click="go()">둘러보기 -></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        go(){
            this.$router.push()
        }
    }
}
</script>
<style scoped>
    #main {
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        margin-top: 20%;
    }
    #btn {
        font-size: 30px;
    }
</style>