<script lang="ts">
  import "../app.css";
  import Alert from "$lib/components/Alert.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<Navbar username={data.username} />
<Alert />
<slot />
