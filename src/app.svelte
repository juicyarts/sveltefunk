<script>

  import { onMount } from 'svelte';
  import { appConfigStore } from './store/index';

  import Header from './components/header/header.svelte';
  import CanvasWall from './containers/canvas-wall/canvas-wall.svelte';

  export let websocketUrl;

  onMount(() => {
    appConfigStore
  })

</script>

<svelte:head>
  <title>Svelte-Rocket</title>
</svelte:head>

<Header />

<CanvasWall websocketUrl></CanvasWall>
