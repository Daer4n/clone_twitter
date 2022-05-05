import React from 'react';


export const MainMenu = () => {
	return (
		<div className="content part center">
			<p className="title">Accueil</p>
			<div className="what-new">
				<span className="profile picture"></span>
				<input type="text" className="text-what-new" maxLength="280" placeholder="Quoi de neuf ?"/>
				<span className="picto image"></span>
				<span className="picto gif"></span>
				<a href="#" className="btn-what-new btn-main" onClick>Touiter</a>
			</div>
		</div>
	)
}