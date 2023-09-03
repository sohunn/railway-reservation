<script lang="ts">
  import { showAlert } from "$lib/utils";

  let name: string,
    capacity: string,
    from: string,
    to: string,
    duration: string,
    price: string;

  const addTrain = async () => {
    const response = await fetch("/api/addtrain", {
      method: "POST",
      body: JSON.stringify({ name, capacity, from, to, duration, price }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    // svelte automatically adds the 'message' prop on data as we use 'error' on the server
    if (!response.ok && data.message) {
      showAlert(data.message);
    } else if (data.success) {
      showAlert(`Train ${name} was successfully added to the database`);
    }

    name = "";
    capacity = "";
    from = "";
    to = "";
    duration = "";
    price = "";
  };
</script>

<div class="flex flex-col items-center">
  <form
    class="flex flex-col items-center text-black bg-orange-200 w-1/3 m-auto mt-8 rounded-md"
  >
    <h1 class="mt-15 font-bold text-center">Add Train</h1>
    <label class="mb-4">
      <strong>Name:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="text"
        name="name"
        bind:value={name}
        id=""
      />
    </label>

    <label class="mb-4">
      <strong>Seating Capacity:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="number"
        name="capacity"
        bind:value={capacity}
        id=""
      />
    </label>

    <label class="mb-4">
      <strong>From:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="text"
        name="from"
        bind:value={from}
        id=""
      />
    </label>

    <label class="mb-4">
      <strong>To:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="text"
        name="to"
        bind:value={to}
        id=""
      />
    </label>

    <label class="mb-4">
      <strong>Duration:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="number"
        name="duration"
        bind:value={duration}
        id=""
      />
    </label>

    <label class="mb-4">
      <strong>Price:</strong>
      <input
        class="ml-2 mt-2 rounded-md"
        type="number"
        name="price"
        bind:value={price}
        id=""
      />
    </label>
  </form>
  <button
    class="mb-2 mt-2 rounded-md p-2 bg-white text-black hover:bg-blue-500 w-1/23"
    on:click={addTrain}>Add Train</button
  >
</div>
