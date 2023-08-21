<script lang="ts">
    import { alertMessage } from "$lib/stores";
</script>

{#if $alertMessage?.length}
    <p>{$alertMessage}</p>
{/if}
