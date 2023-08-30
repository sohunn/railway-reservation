<script lang="ts">
  import Train from "$lib/components/Train.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

{#if data.trains}
  <h1 class="mb-3">Select a train to book it</h1>
  <div class="flex">
    {#each data.trains as train (train._id)}
      <Train {...train} />
    {/each}
  </div>
{:else}
  <p>ask them to login to check</p>
{/if}
