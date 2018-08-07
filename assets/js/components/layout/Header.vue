<template>
    <header class="b-page__header">
        Это хэдер

        <div style="margin-top: 10px">
            <router-link to="/">Dashboard</router-link>
            <router-link to="editor">Editor</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>