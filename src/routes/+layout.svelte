<script lang="ts">
  import "../app.css";
  import Alert from "$lib/components/Alert.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { LayoutServerData } from "./$types";

  export let data: LayoutServerData;
</script>

<Navbar username={data.username} isAdmin={data.isAdmin} />
<Alert />
<slot />
