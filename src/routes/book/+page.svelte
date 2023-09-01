<script lang="ts">
  import { goto } from "$app/navigation";
  import { showAlert } from "$lib/utils";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  let seats = 1;
  let date: string | undefined;
  let trainID = data.train._id;

  const confirmBooking = async () => {
    const response = await fetch("/api/createbooking", {
      method: "POST",
      body: JSON.stringify({ seats, date, trainID }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      showAlert(data.message);
    } else if (data.success) {
      goto(data.redirectTo);
    }
  };
</script>

<div
  class="flex flex-col items-center bg-orange-200 text-black m-auto w-1/3 mt-20 rounded-md"
>
  <h3 class="mt-2"><strong>Booking Confirmation: {data.train.name}</strong></h3>
  <p class="mt-3"><strong>From: </strong>{data.train.fromDestination}</p>
  <p class="mt-2"><strong>To: </strong>{data.train.toDestination}</p>
  <p class="mt-2">
    <strong>Duration: </strong>{data.train.duration} hours
  </p>
  <p class="mt-2"><strong>Price: </strong>{data.train.price} &#8377</p>
  <div class="mt-2">
    <label>
      <strong>Ticket(s):</strong>
      <input
        class="rounded-md"
        type="number"
        placeholder="Number of seats"
        bind:value={seats}
        min="1"
      />
    </label>
  </div>

  <div class="mt-3">
    <strong>Date:</strong>
    <input class="rounded-md" type="date" bind:value={date} />
  </div>

  {#if date !== undefined}
    <button
      on:click={confirmBooking}
      class="mt-3 mb-2 rounded-md p-2 bg-black text-white hover:bg-blue-500"
      >Pay {data.train.price * seats} &#8377</button
    >
  {/if}
</div>
