<script lang="ts">
  import { showAlert } from "$lib/utils";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  if (form?.msg) showAlert(form.msg);
</script>

<form
  method="POST"
  class="flex flex-col items-center text-black bg-orange-200 w-1/3 m-auto mt-20 rounded-md"
>
  <label class="mb-4">
    <strong>Username:</strong>
    <input
      placeholder="Enter your username"
      class="ml-2 mt-2 rounded-md"
      type="text"
      name="username"
    />
  </label>

  <label class="mb-4">
    <strong>Password:</strong>
    <input
      placeholder="Enter your password"
      class="ml-2 rounded-md"
      type="password"
      name="password"
    />
  </label>

  <button class="mb-2 rounded-md p-2 bg-black text-white hover:bg-blue-500"
    >Login</button
  >
</form>
