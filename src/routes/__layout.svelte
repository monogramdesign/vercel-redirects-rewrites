<script lang="ts">
  import { page } from "$app/stores";

  import { getCookie, setCookie } from "$lib/cookie";
  import { onMount } from "svelte";

  import "../app.scss";
  let cookie: string | "null" = "null";
  $: $page, fetchCookie();

  let rewriteNotice: boolean = false;
  let pathname: string | null = null;
  onMount(() => {
    fetchCookie();
  });

  const fetchCookie = () => {
    const newCookie = getCookie("router-setting");
    if (newCookie !== undefined) {
      cookie = newCookie || "null";
    }

    if (typeof window !== "undefined") {
      pathname = window.location.pathname;

      const { routeId } = $page;
      if (`/${routeId}` !== pathname) {
        rewriteNotice = true;
      } else {
        rewriteNotice = false;
      }
    }
  };
</script>

<!-- <Header /> -->

<nav class="flex justify-between max-w-screen-lg mx-auto py-4 px-4">
  <div class="flex gap-x-6 align-middle">
    <a sveltekit:reload href="/" class="my-auto"><code>&#x2f;</code></a>
    <a href="/dashboard" class="my-auto"><code>/dashboard</code></a>
    <a sveltekit:reload href="/home" class="my-auto"><code>/home</code></a>
  </div>
  <div class=" flex gap-x-6">
    <div class="flex flex-col justify-center">
      <p class="inline">
        <code>router-setting</code> cookie is set to

        <code>
          <select
            value={cookie}
            on:change={(event) => {
              setCookie("router-setting", event.currentTarget.value, 10);
            }}
            class="code-format"
            name="cookie_select"
            id="cookie_select"
          >
            <option value="null">null</option>
            <option value="redirect">redirect</option>
            <option value="rewrite">rewrite</option>
          </select>
          <label for="cookie_select" class=" text-gray-500">⌵</label>
        </code>
      </p>
    </div>
  </div>
</nav>

<main class="max-w-screen-lg mx-auto px-4">
  <slot />
  {#if rewriteNotice}
    <div
      class="rounded-lg border-2 border-gray-100 text-gray-600 bg-gray-50 my-4 p-4 mx-2"
    >
      This page <code>{pathname}</code> was rewritten from the original route
      <code>/{$page.routeId}</code>.
    </div>
  {/if}
</main>
