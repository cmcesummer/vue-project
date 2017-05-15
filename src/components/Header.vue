<template>
    <header>
        <div class='left'><slot name="left"></slot></div>
        
        <h1>{{title}}</h1>    
        <div class='right'><slot name="right"></slot></div>

    </header>
</template>

<script>
export default {
    props:['title']

}
</script>

<style scoped>
header {
    font-size: 16px;
    height:48px;
    background: rgba(0,0,0,0);
}
h1{
    margin:0;
    display: inline-block;
    font-size: 20px;
    height:48px;
    line-height:48px;
    text-align: center;
}
.left {
    float:left;
    
}
.right {
    float: right;
    
}
</style>