import React from 'react';


export const MainMenu = () => {
	return (
		<div className="content third">
			<p className="title">Accueil</p>
			<div>
				<span className="profile picture"></span>
				<input type="text" className="what-new" placeholder="Quoi de neuf ?"/>
				<span className="picto image"></span>
				<span className="picto gif"></span>
				<input type="button" onClick value="Touit"/>
			</div>
		</div>
	)
}