"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//LOCAL
import LogoImg from "../../public/NavBarLogo.png";
import { type NavItemInfo, NavItems } from "@/constants";
import Link from "next/link";
import MenuButton from "./MenuButton";
import MobileHeader from "./MobileHeader";

function Header() {
	return (
		<header className="w-full h-14 absolute top-0 z-50">
			<nav className="nav flex-row-reverse max-md:hidden">
				<div className="flex-center">
					<Image
						src={LogoImg}
						alt="LogoImg"
						width={70}
						height={16}
					/>{" "}
				</div>
				<ul className="w-2/5 h-full flex items-center justify-start gap-10">
					{NavItems.map((navItem: NavItemInfo, index: number) => (
						<motion.li
							key={index}
							style={{ color: "#030303" }}
							whileHover={{scale: 1.05}}>
							<Link href={navItem.path}>{navItem.name}</Link>
						</motion.li>
					))}
				</ul>
			</nav>
			<MobileHeader />
		</header>
	);
}

export default Header;
