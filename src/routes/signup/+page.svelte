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

  <button>Sign up</button>
</form>

{#if form?.usernameMissing}
  <p>Username field cannot be empty</p>
{:else if form?.passwordMissing}
  <p>Password field cannot be empty</p>
{:else if form?.passwordLength}
  <p>Passwords must be 8 characters or longer</p>
{:else if form?.userExisting}
  <p>
    That user already exists. Do you wish to <a href="/login">login</a> instead?
  </p>
{/if}
