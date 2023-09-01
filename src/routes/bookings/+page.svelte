<script lang="ts">
  import Booking from "$lib/components/Booking.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

{#if data.bookings.length}
  <h1 class="text-center font-bold text-xl">
    Your Bookings ({data.bookings.length})
  </h1>
  <div class="flex flex-wrap justify-center">
    {#each data.bookings as booking (booking._id)}
      <Booking
        name={booking.trainID.name}
        from={booking.trainID.fromDestination}
        to={booking.trainID.toDestination}
        duration={booking.trainID.duration}
        price={booking.trainID.price}
        departure={booking.departure}
        seats={booking.seatsBooked}
        bookedAt={booking.createdAt}
      />
    {/each}
  </div>
{:else}
  <p>
    You do not have any bookings. <a class="underline" href="/">Create one</a> to
    get started?
  </p>
{/if}
