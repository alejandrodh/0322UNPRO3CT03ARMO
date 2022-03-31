import React from 'react';
import Navitem from '../Navitem/Navitem';

let data = [
	{
		menu: 'Pages',
		icono: 'fa-folder',
	},
	{
		menu: 'Charts',
		icono: 'fa-chart-area',
	},
	{
		menu: 'Tables',
		icono: 'fa-table',
	},
	{
		menu: 'User',
		icono: 'fa-user',	
	},			
]

function Sidebar(){
 return(
        // <!-- Sidebar -->
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>
			{ data.map( (menuItem, idx) => <Navitem dataItem={menuItem} key={menuItem.menu + idx} /> )}
			
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
		// <!-- End of Sidebar --> */
 );
}

export default Sidebar;