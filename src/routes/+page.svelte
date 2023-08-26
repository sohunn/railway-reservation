<script lang="ts">
    import { page } from "$app/stores";
</script>

{#if $page.data.username}
    <h1>Show all trains</h1>
{:else}
    <h1>ask them to login</h1>
{/if}
