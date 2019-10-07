<script>
  import Configurator from '../configurator/configurator.svelte';

  import { appConfigStore } from '../../store';

  export let navActive = false;

  function toggleNav() {
    navActive = !navActive;
  }

  function toggleColor() {
    appConfigStore.update(config => ({
      ...config,
      theme: config.theme === 'dark' ? 'light' : 'dark',
    }));
  }
</script>

<style lang="css">
  .header {
    height: 50px;
    width: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .burgerHandler {
    position: relative;
    height: 50px;
    width: 50px;
    margin: 0 10px;
    cursor: pointer;
  }

  .burger {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2px;
    margin-left: calc(-35px / 2);
  }

  .burger,
  .burger:before,
  .burger:after {
    border-radius: 1px;
    height: 3px;
    width: 35px;
    background: white;
    position: absolute;
    display: block;
    content: "";
  }

  .burger:before {
    top: -10px;
  }

  .burger:after {
    bottom: -10px;
  }

  .nav {
    position: absolute;
    width: 300px;
    height: calc(100vh - 50px);
    background: #4e4e4e;
    transform: translate(0, 50px);
    transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    padding: 10px;
    box-sizing: border-box;
    top: 0;
  }

  .navActive {
    transform: translate(-300px, 50px);
  }

  button {
    margin: 0 10px;
  }
</style>

<header class="header">
  <div class="burgerHandler" on:click|preventDefault={toggleNav}>
    <div class="burger" />
  </div>

  <button class="button-primary" on:click|preventDefault={toggleColor}>
    Button element
  </button>

  <nav class:navActive={!navActive} class="nav">
    <Configurator />
  </nav>
</header>
