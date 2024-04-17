"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//LOCAL
import LogoImg from "../public/NavBarLogo.png";
import { type NavItemInfo, NavItems } from "@/constants";
import Link from "next/link";

function Header() {
	return (
		<header className="w-full h-12 absolute top-0 z-50">
			<nav className="nav flex-row-reverse">
				<div className="flex-center">
					<Image
						src={LogoImg}
						alt="LogoImg"
						width={70}
						height={16}
					/>{" "}
				</div>
				<ul className="w-2/5 h-full flex items-center justify-around ">
					{NavItems.map((navItem: NavItemInfo, index: number) => (
						<motion.li
							key={index}
							style={{ color: "#030303" }}>
							<Link href={navItem.path}>{navItem.name}</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
