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

<div>
  <h1>Add Train</h1>
  <form action="?/addtrain" method="post">
    <label>
      Name
      <input
        class="text-black"
        type="text"
        name="name"
        bind:value={name}
        id=""
      />
    </label>

    <label>
      Seating Capacity
      <input
        class="text-black"
        type="number"
        name="capacity"
        bind:value={capacity}
        id=""
      />
    </label>

    <label>
      From
      <input
        class="text-black"
        type="text"
        name="from"
        bind:value={from}
        id=""
      />
    </label>

    <label>
      To
      <input class="text-black" type="text" name="to" bind:value={to} id="" />
    </label>

    <label>
      Duration
      <input
        class="text-black"
        type="number"
        name="duration"
        bind:value={duration}
        id=""
      />
    </label>

    <label>
      Price
      <input
        class="text-black"
        type="number"
        name="price"
        bind:value={price}
        id=""
      />
    </label>
  </form>
  <button on:click={addTrain}>Submit</button>
</div>
