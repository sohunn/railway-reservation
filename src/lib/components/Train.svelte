<script lang="ts">
  export let name: string;
  export let seatingCapacity: number;
  export let fromDestination: string;
  export let toDestination: string;
  export let duration: number;
  export let price: number;
  export let seatsOccupied: number;
</script>

<div class="bg-white text-black rounded-sm inline-block w-1/5 m-5">
  <h3 class="text-center">{name}</h3>
  <p class="mt-2 ml-2"><strong>From: </strong>{fromDestination}</p>
  <p class="mt-2 ml-2"><strong>To: </strong>{toDestination}</p>
  <p class="mt-2 ml-2"><strong>Duration: </strong>{duration} hours</p>
  <p class="mt-2 ml-2"><strong>Price: </strong>{price} &#8377</p>
  <p class="mt-2 ml-2">
    <strong>Occupancy: </strong>{seatsOccupied}/{seatingCapacity}
  </p>
  <button
    class="mt-2 ml-2 p-2 mb-2 bg-blue-400 text-white border-none rounded-md"
    >Book Now</button
  >
</div>
