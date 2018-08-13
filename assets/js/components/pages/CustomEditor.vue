<template>
    <div class="b-page__content">
        <div>
            <button @click="addArea">Click me</button>
        </div>

        <div style="height: 400px; border: 1px solid green">
        <vue-draggable-resizable v-for="item in areas" v-bind:key="item"
                :w="100"
                :h="100"
                :parent="true" style="border: 1px dashed blue;">
            <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
                X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
        </vue-draggable-resizable>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                areas: []
            }
        },
        methods: {
            addArea: function () {
                this.areas.push(1);
            }
        }
    };
</script>