<script>
  export let data;
</script>

{#if data}
  {#each data as item}
    <slot item={item}></slot>
  {/each}
{/if}
