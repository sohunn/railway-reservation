<script lang="ts">
  export let name: string;
  export let seatingCapacity: number;
  export let fromDestination: string;
  export let toDestination: string;
  export let duration: number;
  export let price: number;
  export let seatsOccupied: number;
  export let _id: string;
</script>

<!-- class=" text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer rounded-md inline-block w-1/5 m-4" -->
<div
  class=" text-black bg-orange-200 hover:cursor-pointer rounded-md inline-block w-1/5 m-4"
>
  <h3 class="text-center font-bold text-black">{name}</h3>
  <p class="mt-3 ml-2"><strong>From: </strong>{fromDestination}</p>
  <p class="mt-2 ml-2"><strong>To: </strong>{toDestination}</p>
  <p class="mt-2 ml-2"><strong>Duration: </strong>{duration} hours</p>
  <p class="mt-2 ml-2"><strong>Price: </strong>{price} &#8377</p>
  <p class="mt-2 ml-2">
    <strong>Occupancy: </strong>{seatsOccupied}/{seatingCapacity}
  </p>
  <div class="text-center">
    {#if seatsOccupied === seatingCapacity}
      <button
        disabled
        class="text-center mt-2 ml-2 bg-blue-500 p-2 text-sm mb-2 text-white"
        >Sold Out</button
      >
    {:else}
      <a
        href="/book?train={_id}"
        class="text-center inline-block mt-2 ml-2 no-underline text-white bg-blue-500 p-2 text-sm mb-2 rounded-md hover:bg-blue-600"
        >Book Now</a
      >
    {/if}
  </div>
</div>
