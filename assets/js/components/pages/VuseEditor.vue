<template>
    <VuseBuilder @saved="onSave" />
</template>

<script>
    export default {
        methods: {
            onSave() {
                console.log('save');
            }
        }
    }
</script>