import React from 'react';


export const MainMenu = () => {
	return (
		<div className="touit" onClick>
			<a href="#" onClick hover>
				<span className="profile picture"></span>
				<b>Nickname</b>
				<p>@name</p>
			</a>
			<p>Date</p>
			<p>Touit content</p>

		</div>
	)
}