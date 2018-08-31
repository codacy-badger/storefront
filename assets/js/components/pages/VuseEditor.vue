<template>
    <VuseBuilder @saved="onSave" />
</template>

<script>
    export default {
        methods: {
            onSave(builder) {
                builder.export('pwa');
            }
        }
    }
</script>
