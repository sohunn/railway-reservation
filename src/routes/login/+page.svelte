<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<form method="POST">
  <label>
    Username
    <input type="text" name="username" />
  </label>

  <label>
    Password
    <input type="password" name="password" />
  </label>

  <button>Login up</button>
</form>

{#if form?.usernameMissing}
  <p>Username field cannot be empty</p>
{:else if form?.passwordMissing}
  <p>Password field cannot be empty</p>
{:else if form?.noUserExists}
  <p>Incorrect username entered <a href="/signup">Sign up</a> instead?</p>
{:else if form?.incorrectPass}
  <p>Incorrect password</p>
{/if}
