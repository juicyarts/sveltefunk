<script>
  import { onMount, beforeUpdate } from 'svelte';

  import Graph from '../graph/graph.svelte';

  export let value;
  export let id;

  let cache_limit = 50;
  let cache = [];

  let canvasWrapperInnerWidth;
  let canvasWrapperInnerHeight;

  beforeUpdate(async () => {
    updateCache(value);
  });

  onMount(() => {});

  function updateCache(newValue) {
    if (cache.length > cache_limit) {
      cache.shift();
    }
    cache = [...cache, newValue];
  }
</script>

<style>
  listItem {
    font-family: "Roboto Mono", monospace;
    flex: 1 1 auto;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
  }

  .entryWrapper {
    height: 250px;
    display: flex;
    align-items: flex-end;
    align-content: center;
    position: relative;
  }

  h2 {
    position: absolute;
    left: 5px;
    color: #bbb;
    z-index: 1;
  }
</style>

<listItem
  bind:clientHeight={canvasWrapperInnerHeight}
  bind:clientWidth={canvasWrapperInnerWidth}
  class="entryWrapper">
  <Graph
    canvasHeight={canvasWrapperInnerHeight}
    canvasWidth={canvasWrapperInnerWidth}
    values={cache} />
  <h2>#{id}</h2>
</listItem>
