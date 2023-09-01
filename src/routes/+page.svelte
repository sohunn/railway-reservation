<script lang="ts">
  import Train from "$lib/components/Train.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

{#if data.trains}
  <!-- <h1 class="mb-3">Select a train to book it</h1> -->
  <div class="flex flex-wrap justify-center">
    {#each data.trains as train (train._id)}
      <Train {...train} />
    {/each}
  </div>
{:else}
  <p class="text-center text-xl text-white">Please login to book a train!</p>
{/if}
