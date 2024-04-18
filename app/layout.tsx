import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
			<body className={`${poppins.className} flex-center`}>
				{/* <Header /> */}
				<h2 className="text-4xl text-black">غلام کونی</h2>
				{/* <main className="max-w-[1950px] max-h-[1080px] mx-auto">{children}</main> */}
			</body>
		</html>
	);
}
