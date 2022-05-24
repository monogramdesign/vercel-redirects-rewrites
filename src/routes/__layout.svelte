<script lang="ts">
  import { page } from "$app/stores";

  import { getCookie, setCookie } from "$lib/cookie";
  import { onMount } from "svelte";

  import "../app.scss";
  let cookie: string | null = null;
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

    pathname = $page.url.pathname;

    const { routeId } = $page;
    if (`/${routeId}` !== pathname) {
      rewriteNotice = true;
    } else {
      rewriteNotice = false;
    }
  };
</script>

<svelte:head>
  <meta
    name="description"
    content="An example to show how how Vercel conditional rewrites and redirects work"
  />
</svelte:head>

<header
  class="flex justify-between items-center container flex-col gap-y-5 md:flex-row border-b mb-8 py-4"
>
  <!-- Nav -->
  <nav class="flex gap-x-2">
    <a
      sveltekit:reload
      href="/"
      class={`font-mono py-1 px-4 rounded ${
        $page.routeId === ""
          ? "bg-blue-50 text-blue-500"
          : "bg-gray-50 text-gray-500"
      }`}
    >
      &#x2f;
    </a>
    <a
      href="/home"
      class={`font-mono py-1 px-4 rounded ${
        $page.routeId === "home"
          ? "bg-blue-50 text-blue-500"
          : "bg-gray-50 text-gray-500"
      }`}
    >
      /home
    </a>
    <a
      href="/dashboard"
      class={`font-mono py-1 px-4 rounded ${
        $page.routeId === "dashboard"
          ? "bg-blue-50 text-blue-500"
          : "bg-gray-50 text-gray-500"
      }`}
    >
      /dashboard
    </a>
  </nav>

  <!-- Cookie switcher -->
  <div
    class="flex items-center gap-x-2 text-sm bg-gray-50 p-1 border border-gray-200 rounded-lg"
  >
    <code>router-setting</code> cookie is set to

    <select
      class:text-transparent={cookie === null}
      value={cookie}
      on:change={(event) => {
        setCookie("router-setting", event.currentTarget.value, 10);
      }}
      class="font-mono px-2 py-1 pr-7 border border-gray-300"
      name="cookie_select"
      id="cookie_select"
    >
      <option value="null">null</option>
      <option value="redirect">redirect</option>
      <option value="rewrite">rewrite</option>
    </select>
  </div>
</header>

<!-- Main -->
<main class="container">
  <!-- Rewrite notice -->
  {#if rewriteNotice}
    <div
      class="rounded-lg border-2 border-gray-100 text-gray-600 bg-gray-50 my-4 p-4"
    >
      This page <code>{pathname}</code> was rewritten from the original route
      <code>/{$page.routeId}</code>.
    </div>
  {/if}

  <!-- Page content -->
  <slot />
</main>

<!-- Footer -->
<footer class="container border-t py-8 mt-8 text-sm text-gray-500">
  <a href="https://monogram.io" target="_blank">Made by Monogram</a> for
  <a href="https://vercel.com" target="_blank">&#x25B2; Vercel</a>
</footer>
