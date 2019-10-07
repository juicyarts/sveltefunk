<script>
  import Socket from '../../components/socket-provider/socket-provider.svelte';
  import List from '../../components/list/list.svelte';
  import ListItem from '../../components/list-item/list-item.svelte';

</script>

<Socket let:sampleData={data}>
  <List data={data} let:item={item}>
    <ListItem id={item.id} value={item.data} />
  </List>
</Socket>
