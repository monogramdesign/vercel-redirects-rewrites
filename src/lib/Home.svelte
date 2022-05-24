<svelte:head>
  <title>ACME Home</title>
</svelte:head>

<section
  class="prose prose-code:after:content-none prose-code:before:content-none prose-code:font-medium prose-code:bg-pink-50 prose-code:text-pink-500"
>
  <h1>🏠 Home</h1>
  <p>
    Hi! This is your publicly accessible home page. It can be accessed by both
    the <code class="!bg-gray-50 !text-gray-500">/</code> and
    <code class="!bg-gray-50 !text-gray-500">/home</code> routes. Based on your
    cookie, Vercel can forward you to your logged-in
    <code class="!bg-gray-50 !text-gray-500">/dashboard</code> via either a redirect
    or a rewrite.
  </p>
  <div class="bg-gray-50 px-8 pb-6 rounded-lg border">
    <h2>How does this work?</h2>
    <p>
      Change the <code>router-setting</code> cookie above. In each of these cases,
      there is no flash of unstyled content or a blank page. It just works.
    </p>
    <ol>
      <li>
        On <code>redirect</code>, the root URL <code>/</code> will be redirected
        to <code>/dashboard</code>.
      </li>
      <li>
        On <code>rewrite</code>, the root URL <code>/</code> will be rewritten
        to <code>/dashboard</code>.
      </li>
      <li>On <code>null</code>, the URLs will show their default pages.</li>
    </ol>
    <h3>GitHub Repo</h3>
    <a href="https://github.com/monogramdesign/vercel-redirects-rewrites"
      >View the GitHub repo for this example</a
    >.

    <h3>Tutorial</h3>
    <a href="https://monogram.io/blog/vercel-server-side-redirects">
      See Monogram's tutorial using Vercel</a
    >.
  </div>
</section>
