<script lang="ts">
    export let username: string | undefined;
</script>

{#if username}
    <h1>Show all trains</h1>
{:else}
    <h1>ask them to login</h1>
{/if}
