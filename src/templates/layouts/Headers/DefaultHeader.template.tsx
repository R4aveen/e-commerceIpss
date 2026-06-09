import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header/Header';
import pagesConfig, { type PageConfig } from '@/config/pages.config';

const DropdownNavItem = ({ item }: { item: PageConfig }) => {
	const [isOpen, setIsOpen] = useState(false);

	if (!item.subPages) {
		return (
			<NavLink
				to={item.to}
				className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
			>
				{item.text}
			</NavLink>
		);
	}

	return (
		<div
			className='nav-item position-relative'
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<button
				className='nav-link dropdown-toggle bg-transparent border-0'
				type='button'
				onClick={() => setIsOpen(!isOpen)}
			>
				{item.text}
			</button>
			{isOpen && (
				<ul className='dropdown-menu show position-absolute start-0 mt-0 shadow' style={{ zIndex: 1000 }}>
					{Object.values(item.subPages).map((subPage) => {
						if (subPage.to.includes(':')) return null;

						return (
							<li key={subPage.id}>
								<NavLink to={subPage.to} className='dropdown-item'>
									{subPage.text}
								</NavLink>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

const DefaultHeaderTemplate = () => {
	const mainSections = Object.values(pagesConfig);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Header className='flex-column flex-md-row align-items-stretch align-items-md-center gap-2 px-3 py-2'>
			<HeaderLeft className='justify-content-between justify-content-md-start w-md-auto'>
				<span className='fw-bold fs-5 text-primary text-nowrap'>E-CommerceIPSS</span>
				
				<button
					className='btn border-0 d-block d-md-none p-1'
					type='button'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label='Toggle navigation'
				>
					<span className='fs-3 lh-1'>☰</span>
				</button>
			</HeaderLeft>

			<nav className={`nav nav-pills gap-2 mt-2 mt-md-0 align-items-center justify-content-center mx-md-auto ${isMenuOpen ? 'd-flex flex-column' : 'd-none'} d-md-flex flex-md-row`}>
				{mainSections.map((item) => (
					<DropdownNavItem key={item.id} item={item} />
				))}
			</nav>

			<HeaderRight className='d-none d-md-flex'>
				<div style={{ width: '120px' }}></div>
			</HeaderRight>
		</Header>
	);
};

export default DefaultHeaderTemplate;
