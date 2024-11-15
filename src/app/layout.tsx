/** @format */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nonton Project | Kenapa Coding',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<div className='p-4 flex gap-12 items-center font-bold '>
						<ModeToggle />
						<Link
							href={'/videos'}
							className='bg-slate-200 p-2 rounded-md dark:text-green-400 text-yellow-400 '>
							ftube
						</Link>
					</div>
					<div className='p-4'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
