<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { showAlert } from "$lib/utils";

  export let username: string | undefined;
  export let isAdmin: boolean | undefined;

  const handleLogout = async () => {
    const response = await fetch("/api/logout", { method: "POST" });
    const data = await response.json();

    if (!response.ok) showAlert(data.message);
    else if (data.success) {
      invalidateAll();
    }
  };
</script>

<div class="mb-2">
  <ul class="flex bg-red-500 py-5 flex-wrap">
    <li class="list-none mr-5 ml-3 text-xl">
      <a class="no-underline text-white hover:text-black" href="/">Home</a>
    </li>
    <li class="list-none mr-5 text-xl">
      <a class="no-underline text-white hover:text-black" href="/about">About</a
      >
    </li>
    <li class="list-none mr-5 text-xl">
      <a class="no-underline text-white hover:text-black" href="/contact"
        >Contact</a
      >
    </li>
    {#if username}
      <li class="list-none mr-5 text-xl">
        <a class="no-underline text-white hover:text-black" href="/bookings"
          >My Bookings</a
        >
      </li>
      <button on:click={handleLogout} class="mr-5 text-xl hover:text-black"
        >Logout</button
      >
      {#if isAdmin}
        <li class="list-none mr-5 text-xl">
          <a class="no-underline text-white hover:text-black" href="/adminui"
            >Admin Panel</a
          >
        </li>
      {/if}
    {/if}
    <!-- <li class="list-none text-xl flex ml-auto font-bold">
      <a class="no-underline text-black text-2xl" href="/">FindMyBogey</a>
    </li> -->
    {#if username}
      <li class="list-none mr-5 text-xl ml-auto">
        <a class="no-underline text-white hover:text-black" href="/bookings"
          >Welcome {username}</a
        >
      </li>
    {:else}
      <li class="list-none mr-5 text-xl ml-auto">
        <a class="no-underline text-white hover:text-black" href="/login"
          >Login</a
        >
      </li>
      <li class="list-none mr-5 text-xl">
        <a class="no-underline text-white hover:text-black" href="/signup"
          >Signup</a
        >
      </li>
    {/if}
  </ul>
</div>
