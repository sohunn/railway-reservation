<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

{#if data.trains}
  <p>show all the trains</p>
{:else}
  <p>ask them to login to check</p>
{/if}
