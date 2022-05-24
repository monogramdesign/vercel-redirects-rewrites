<svelte:head>
  <title>User dashboard</title>
  <meta name="description" content="Your Home Page" />
</svelte:head>

<section>
  <h1 class="text-5xl font-bold mt-8">User Dashboard</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</section>

<style>
  .grid div {
    @apply bg-gray-100 h-40 rounded-lg shadow-sm;
  }
</style>
