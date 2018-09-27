<script>
export default {
  page: {
    title: 'Page timeout',
    meta: [
      { name: 'description', content: 'The page timed out while loading.' }
    ]
  }
}
</script>

<template>
  <div class="lost-container">
    <h1>The page timed out while loading</h1>
  </div>
</template>

<style>
  .lost-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .lost-container h1 {
    color: #84ff89;
    font-size: 40px;
  }
</style>
