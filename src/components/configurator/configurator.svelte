<script>
  import { sampleConfigStore } from "../../store";

  const sampleConfig = {
    value_range: {
      min: 100,
      max: 200,
    },
    interval: 1000,
    sample_size: 15,
  };

  function onSubmit() {
    sampleConfigStore.set(sampleConfig);
  }
</script>

<style lang="css">
  .form {
    color: white;
  }

  input {
    border: 0;
    background: 0;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid white;
  }
</style>

<form class="form" on:submit|preventDefault={onSubmit}>
  <div class="row">
    <div class="six columns">
      <label>Min Value</label>
      <input class="u-full-width" type="number" bind:value={sampleConfig.value_range.min} />
    </div>
    <div class="six columns">
      <label>Max Value</label>
      <input class="u-full-width" type="number" bind:value={sampleConfig.value_range.max} />
    </div>
  </div>
  <div class="row">
    <div class="six columns">
      <label>Interval (in ms)</label>
      <input class="u-full-width" type="number" bind:value={sampleConfig.interval} />
    </div>
    <div class="six columns">
      <label>Sample Size</label>
      <input class="u-full-width" type="number" bind:value={sampleConfig.sample_size} />
    </div>
  </div>
  <input class="button-primary" type="submit" value="Submit" />
</form>
