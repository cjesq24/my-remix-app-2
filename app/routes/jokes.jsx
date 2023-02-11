/*
 * Parent Joke Route
 * Outlet renders content from the app/routes/jokes
 */
import React from 'react';
import { Outlet } from '@remix-run/react';

export default function JokesRoute() {
	return (
		<>
			<div>
				<h1>
					J🤪KES--this is the Parent Joke Renderer -- app/routes/jokes.jsx
				</h1>
			</div>
			<main>
				<Outlet />
			</main>
		</>
	);
}
