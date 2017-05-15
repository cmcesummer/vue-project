<template>
    <div class="munt">
        <header-bar title='柚子生活' class="munt-header">
            <mu-icon-button class="icon-3" slot="left"/>
            <mu-icon-button class="icon-2" slot="right"/>
        </header-bar>

        <div class="white-content">
        
        </div>

    </div>

    

</template>

<script>
import HeaderBar from '@/components/Header'
export default {
    components: {
        HeaderBar
    }

}
</script>

<style scoped>
.munt{
  background: linear-gradient(#fa7718, #f38a5c);  
  height:100%;
}

.munt-header {
    color: #fff;
}
</style>