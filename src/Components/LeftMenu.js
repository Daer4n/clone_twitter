import React from 'react';


export const LeftMenu = () => {
	return (
		<div className="menu third">
			<ul>
				<li><a href="#" onClick><span className="icon touitter"></span></a></li>
				<li><a href="#" onClick><span className="icon home"></span>Accueil</a></li>
				<li><a href="#" onClick><span className="icon signets"></span>Signets</a></li>
				<li><a href="#" onClick><span className="icon profil"></span>Profil</a></li>
				<li><a href="#" onClick>Touiter</a></li>
			</ul>
			<div>
				<span className="profile"></span>
			</div>
		</div>
	)
}