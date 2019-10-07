<script>
  import { onMount, onDestroy } from "svelte";
  import { sampleConfigStore } from "../../store/index";
  export let websocketUrl;

  let socket;
  let readyState;
  let sampleData;

  onMount(() => {
    initWebsocketConnection();
  });

  function initWebsocketConnection() {
    socket = new WebSocket(websocketUrl);
    socket.addEventListener("open", onWsOpen);
    socket.addEventListener("message", onMessageReceive);
  }

  function onWsOpen({ target }) {
    console.debug(target);
    readyState = target.readyState;
  }

  function onMessageReceive(message) {
    const { data, topic } = JSON.parse(message.data);
    if (topic === "update") {
      sampleData = data;
    }
  }

  function sendMessage(message) {
    socket.send(JSON.stringify(message));
  }

  const sampleConfigStoreUnsubscribe = sampleConfigStore.subscribe(value => {
    if (readyState === 1) {
      sendMessage(value);
    }
  });

  onDestroy(sampleConfigStoreUnsubscribe);
</script>

<slot sampleData={sampleData}></slot>
