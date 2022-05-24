<svelte:head>
  <title>Your Home Page</title>
  <meta name="description" content="Your Home Page" />
</svelte:head>

<section>
  <h1 class="text-5xl font-bold mt-8">Acme Labs - Home</h1>
  <div
    class="prose prose-code:after:content-none prose-code:before:content-none prose-code:font-medium"
  >
    <p class="my-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam
      blanditiis perferendis officiis. Inventore delectus ut earum
      exercitationem natus libero alias. Ut aperiam fuga facere accusamus
      suscipit eius est repellendus.
    </p>
    <h2 class="text-3xl font-semibold mt-8 mb-4">How does this work?</h2>
    <p>
      Change the <code class="!not-prose">router-setting</code> cookie above. In
      each of these cases, there is no flash of unstyled content or a blank page.
      It just works.
    </p>
    <ol>
      <li>
        On <code>redirect</code>, the root URL <code>/</code> will be rewritten
        to <code>/dashboard</code>.
      </li>
      <li>
        On <code>rewrite</code>, the root URL <code>/</code> will be redirected
        to <code>/dashboard</code>.
      </li>
      <li>On <code>null</code>, the URLs will show their natural pages.</li>
    </ol>
    <h3>GitHub Repo</h3>
    <a href="https://github.com/monogramdesign/vercel-redirects-rewrites"
      >View the GitHub repo for this example</a
    >.

    <h3>Tutorial</h3>
    <a href="https://monogram.io/blog/vercel-server-side-redirects"
      >See Monogram's tutorial using Vercel</a
    >.
    <p>
      Made by <a href="https://monogram.io" class="text-gray-800 underline"
        >Monogram.</a
      >
    </p>
  </div>
</section>
