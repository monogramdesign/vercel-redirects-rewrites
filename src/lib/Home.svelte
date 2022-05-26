<svelte:head>
	<title>ACME Home</title>
</svelte:head>

<section
	class="prose max-w-none text-sm prose-code:after:content-none prose-code:before:content-none prose-code:font-medium prose-code:bg-pink-50 prose-code:text-pink-700 md:flex md:gap-x-8"
>
	<div>
		<h1>🏠 Home</h1>
		<p>
			Hello! This is a publicly accessible home page. <br />It can be accessed by both the
			<code class="!bg-gray-50 !text-gray-500">/</code>
			and
			<code class="!bg-gray-50 !text-gray-500">/home</code> paths. By simply setting a cookie,
			Vercel can take logged-in users to
			<code class="!bg-gray-50 !text-gray-500">/dashboard</code> using a redirect or a rewrite.
		</p>
	</div>
	<div class="bg-gray-50 px-8 pb-6 rounded-lg border">
		<h2>How does this demo work?</h2>
		<p>
			Change the <code>my-router-cookie</code> cookie in the navbar and navigate around.
		</p>
		<div class="pl-4 border-l border-gray-300">
			<p><strong>When set to:</strong></p>
			<dl>
				<dt class="mb-2">
					<code>null</code>
				</dt>
				<dd>
					the URLs will behave conventionally. Visiting
					<code>/</code> will show this Home page, and visiting
					<code>/dashboard</code> will show the Dashboard page.
					<p class="text-xs text-gray-500">
						No bueno. This is default behavior but it's not a good user experience because users
						will have to <a
							href="https://twitter.com/levelsio/status/1480249526325682179?s=21&t=5q825TJ8skdZ8gK8R4zRyw"
							target="_blank"
							>click a link to navigate to their dashboard every time they visit your website</a
						>.
					</p>
				</dd>
				<dt class="mb-2 pt-4 border-t">
					<code>redirect</code>
				</dt>
				<dd>
					visiting<code>/</code> redirects to
					<code>/dashboard</code>
					<p class="text-xs text-gray-500">
						Better. This may cause a slight delay while the redirect occurs, but Vercel does it
						server-side and it's still really fast.
					</p>
				</dd>
				<dt class="mb-2 pt-4 border-t">
					<code>rewrite</code>
				</dt>
				<dd>
					visiting<code>/</code> shows the contents of
					<code>/dashboard</code> without changing the URL
					<p class="text-xs text-gray-500">
						Best. This creates a seamless experience where visiting acme.com shows the website for
						public users and the dashboard for logged-in users.
					</p>
				</dd>
			</dl>
		</div>
		<h2>How do logged-in users see the home page?</h2>
		<p>
			Good question. It would suck to force your users to log out before they can see your website.
			That's why companies reserve <code>/home</code> as a route for logged-in users. Here are some examples:
		</p>
		<ul>
			<li>
				<a href="https://vercel.com/home" target="_blank" class="py-4">vercel.com/home</a>
			</li>
			<li>
				<a href="https://github.com/home" target="_blank" class="py-4">github.com/home</a>
			</li>
			<li>
				<a href="https://raster.app/home" target="_blank" class="py-4">raster.app/home</a>
			</li>
		</ul>
		<p>
			This demo has gone ahead and done that, so try clicking <code>/home</code>
			with a <code>redirect</code> or <code>rewrite</code> cookie set.
		</p>
	</div>
</section>
