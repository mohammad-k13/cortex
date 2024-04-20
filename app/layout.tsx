import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} overflow-x-hidden`}>
				<Header />
				<main className="max-w-[1950px] max-h-[1080px] mx-auto bg-red-500">{children}</main>
			</body>
		</html>
	);
}
