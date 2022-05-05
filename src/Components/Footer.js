import React from 'react';
import { Search } from '@mui/icons-material';



export const Footer = () => {
	return (
		<div className="footer part side right">
			<Search className="icon"/>
			<input type="text" className="searchbar" />
		</div>
	)
}