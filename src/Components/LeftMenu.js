import React from 'react';
import {Twitter, Home, BookmarkBorder } from '@mui/icons-material';


export const LeftMenu = () => {
	return (
		<div className="menu part side left">
			<ul>
				<li><a href="#" onClick><Twitter className="icon"/></a></li>
				<li><a href="#" onClick><Home className="icon"/>Accueil</a></li>
				<li><a href="#" onClick><BookmarkBorder className="icon"/>Signets</a></li>
				<li><a href="#" onClick><span className="icon profil"></span>Profil</a></li>
				<li><a href="#" className="send btn-main" onClick>Touiter</a></li>
			</ul>
			<div>
				<span className="profile"></span>
			</div>
		</div>
	)
}