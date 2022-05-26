<script context="module" lang="ts">
  export function load(a: any) {
    console.log(a);

    return {
      props: {},
    };
  }
</script>

<script lang="ts">
  import { page } from "$app/stores";

  import { getCookie, setCookie } from "$lib/cookie";

  import "../app.scss";
  let cookie: string | null = null;
  $: $page, fetchCookie();

  const fetchCookie = () => {
    const newCookie = getCookie("my-router-cookie");
    if (newCookie !== undefined) {
      cookie = newCookie || "null";
    }
  };

  let pathname = $page.url.pathname;

  console.log(pathname);

  fetchCookie();
</script>

<svelte:head>
  <meta
    name="description"
    content="An example to show how Vercel conditional rewrites and redirects work"
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
          ? "bg-blue-50 text-blue-600"
          : "bg-gray-50 text-gray-600"
      }`}
    >
      &#x2f;
    </a>
    <a
      href="/home"
      class={`font-mono py-1 px-4 rounded ${
        $page.routeId === "home"
          ? "bg-blue-50 text-blue-600"
          : "bg-gray-50 text-gray-600"
      }`}
    >
      /home
    </a>
    <a
      href="/dashboard"
      class={`font-mono py-1 px-4 rounded ${
        $page.routeId === "dashboard"
          ? "bg-blue-50 text-blue-600"
          : "bg-gray-50 text-gray-600"
      }`}
    >
      /dashboard
    </a>
  </nav>

  <!-- Cookie switcher -->
  <div
    class="flex items-center gap-x-2 text-sm bg-gray-50 py-1 px-2 text-gray-500 border border-gray-200 rounded-lg"
  >
    Set
    <code>my-router-cookie</code> to

    <select
      class:text-transparent={cookie === null}
      value={cookie}
      on:change={(event) => {
        setCookie("my-router-cookie", event.currentTarget.value, 10);
      }}
      class="font-mono px-2 py-1 pr-7 border border-gray-300 text-gray-700"
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
  Pathname: <code>{$page.url.pathname}</code>
  {#if `/${$page.routeId}` !== $page.url.pathname}
    <div
      class="rounded-lg border-2 border-green-100 text-green-700 bg-green-50 text-sm mb-8 p-4"
    >
      <strong>The rewrite works!</strong>
      You're on <code>{$page.url.pathname}</code> but see the contents of
      <code>/{$page.routeId}</code>
    </div>
  {/if}
  <!-- Page content -->
  <slot />
</main>

<!-- Footer -->
<footer
  class="container border-t py-8 mt-8 text-sm text-gray-600 flex items-center justify-between"
>
  <div>
    <a href="https://monogram.io" target="_blank">Made by Monogram</a> for
    <a href="https://vercel.com" target="_blank">&#x25B2; Vercel</a>
  </div>
  <div class="flex items-center divide-x not-prose">
    <a
      href="https://github.com/monogramdesign/vercel-redirects-rewrites"
      target="_blank"
      class="flex px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 mr-2"
        viewBox="0 0 496 512"
        ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        /></svg
      >

      GitHub Source</a
    >
    <a
      href="https://monogram.io/blog/vercel-server-side-redirects"
      target="_blank"
      class="flex px-4"
    >
      Tutorial</a
    >
  </div>
</footer>
