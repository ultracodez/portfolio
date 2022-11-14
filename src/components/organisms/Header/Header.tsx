import Headroom from 'react-headroom';
import { useOnKeyDown } from 'Hooks/useOnKeyDown';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { BurgerIcon } from 'Atoms/BurgerIcon';
import { Logo } from 'Atoms/Logo';
import { MobileMenu } from 'Molecules/MobileMenu';
import { NavigationItem } from 'Atoms/NavigationItem';
import { ThemeToggle } from 'Atoms/ThemeToggle';
import { useRouter } from 'next/router';
import { Button } from 'Atoms/Button';

export const navItems = [
	{
		href: '/about',
		title: 'About',
		type: 'normal',
	},
	{
		href: '/blog',
		title: 'Blog',
		type: 'normal',
	},
	{ href: '/projects', title: 'Projects', type: '' },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useOnKeyDown('Escape', () => setIsOpen(false));

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<Headroom>
			<header className="relative z-50 px-4 lg:px-20 py-8 backdrop-blur-md">
				<div className="flex justify-between items-center">
					<Logo />
					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							{navItems.map(({ href, title, type }, i) => (
								<NavigationItem
									href={href}
									title={title}
									key={href}
									type={type}
									variants={navigationVariants}
									initial="hidden"
									animate="visible"
									customDelay={(i + 1) * 0.1}
								/>
							))}
						</ul>
					</nav>
					<button
						className="absolute z-50 top-8 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<BurgerIcon isOpen={isOpen} />
					</button>
					<button
						className="absolute z-50 top-9 right-36 hidden md:block"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<Button href={'/contact'} className={classNames('text-sm')}>
							{'Contact Me'}
						</Button>
					</button>
					<div className="hidden md:block">
						<ThemeToggle />
					</div>
				</div>
			</header>
			<MobileMenu isOpen={isOpen} />
		</Headroom>
	);
};

export { Header };
