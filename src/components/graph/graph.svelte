<script>
  import { onMount } from "svelte";

  export let values;
  export let canvasWidth;
  export let canvasHeight;

  let canvas;
  let frame;

  onMount(() => {
    draw();
    return () => {
      cancelAnimationFrame(frame);
    };
  });

  function draw() {
    const ctx = canvas.getContext("2d");

    (function loop() {
      frame = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.font = "24px Roboto Mono";

      ctx.beginPath();
      ctx.strokeStyle = "#000";

      values.forEach((item, index) => {
        ctx.lineTo(
          (canvasWidth / values.length + 1) * index,
          canvasHeight - (100 / canvasHeight) * item
        );
      });
      ctx.stroke();

      values.forEach((item, index) => {
        if (index % 5 === 0) {
          ctx.beginPath();
          ctx.lineTo((canvasWidth / values.length + 1) * index, 0);
          ctx.lineTo(
            (canvasWidth / values.length + 1) * index,
            canvasHeight
          );
          ctx.strokeStyle = "#dddddd";
          ctx.stroke();
        }
      });

      let max = Math.max(...values);
      let min = Math.min(...values);
      ctx.fillText(`⇧${max}, ⇩${min}`, canvasWidth - 170, 30);
    })();
  }
</script>

<style>
  canvas {
    box-shadow: 0px 0px 5px 0.5px rgba(0, 0, 0, 0.1);
  }
</style>

<canvas
  bind:this={canvas}
  height={canvasHeight}
  width={canvasWidth} />
