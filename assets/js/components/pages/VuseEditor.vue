<template>
    <VuseBuilder @saved="onSave" @preview="onPreview" />
</template>

<script>
    export default {
        methods: {
            onSave(builder) {
                builder.export('pwa');
            },
            onPreview: function (builder) {
                builder.export('preview-devices');
            }
        }
    }
</script>
