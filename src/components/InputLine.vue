<template>
    <div>
        <input type="number" placeholder="dsdsa" class="mu-text-field-input" v-on:focus="inputFocus" v-on:blur="inputBlur">
        <div>
            <hr class="mu-text-field-line">
            <hr class="mu-text-field-focus-line" :class="{focus: inputLine}">
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>