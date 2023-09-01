<script lang="ts">
  export let name: string;
  export let from: string;
  export let to: string;
  export let duration: number;
  export let price: number;
  export let departure: string;
  export let seats: number;
  export let bookedAt: number;
</script>

<div
  class=" text-black bg-orange-200 hover:cursor-pointer rounded-md inline-block w-1/5 m-4"
>
  <h3 class="text-center font-bold text-black">{name}</h3>
  <p class="mt-3 ml-2"><strong>From: </strong>{from}</p>
  <p class="mt-2 ml-2"><strong>To: </strong>{to}</p>
  <p class="mt-2 ml-2"><strong>Duration: </strong>{duration} hours</p>
  <p class="mt-2 ml-2"><strong>Price: </strong>{price} &#8377 (paid)</p>
  <p class="mt-2 ml-2">
    <strong>Leaves On: </strong>{new Date(departure).toLocaleString()}
  </p>
  <p class="mt-2 ml-2"><strong>Seats Booked: </strong>{seats}</p>
  <p class="mt-2 ml-2 mb-2">
    <strong>Created On: </strong>{new Date(bookedAt).toLocaleString()}
  </p>
</div>
