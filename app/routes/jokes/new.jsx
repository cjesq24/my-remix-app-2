import React from 'react';

export default function NewJokes() {
	return (
		<>
			<form method='post'>
				<div>
					<label for='name'>
						Name:
						<input type='text' id='name' />
					</label>
				</div>
				<br />
				<div>
					<label for='textContent'>
						Content:
						<textarea id='textContent' rows={10} cols='20' />
					</label>
				</div>
				<div>
					<button type='submit' className='button'>
						ADD
					</button>
				</div>
			</form>
		</>
	);
}
