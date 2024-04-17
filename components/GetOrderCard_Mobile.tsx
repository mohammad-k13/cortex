"use client"

import { SectionInfo } from "@/constants";
import React, { useRef } from "react";
import {motion} from 'framer-motion'
import Button from "./Button";

type GetOrderCardMobileProps = {
	Info: SectionInfo;
	index: number;
	isOpen: "expanded" | "collapsed";
	onClick: (ref: any) => void;
};

function GetOrderCardMobile({ Info, index, onClick, isOpen }: GetOrderCardMobileProps) {
	const ref = useRef<HTMLElement>(null);

	return (
		<motion.section
			key={index}
			id={`${Info.id}`}
			ref={ref}
			initial={{width: 0, height:0, opacity: 0}}
			animate={{width: 400, height: 280, opacity: 1}}
			transition={{delay: index * .25}}
			className={`rounded-xl z-20 md:w-90% mx-auto h-[380px] shadow-lg relative overflow-hidden flex justify-center`}
			onClick={() => onClick(ref)}
			style={{ backgroundColor: "#cccc" }}>
			<div
				className="colorize-circle absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full -z-10"
				style={{ backgroundColor: Info.sectionColor }}
			/>
			<main className="section-conten w-full flex items-center justify-center flex-col gap-8 py-10 pt-20">
				<h2 className="text-2xl font-bold tracking-wide expanded-title text-center text-white opacity-0">
					{Info.ProductInfo.name}
				</h2>
				<p className="text-md w-3/4 text-justify expanded-p text-white opacity-0">
					{Info.ProductInfo.description}
				</p>
				<Button title="Order Now" isWhite={false} className="expanded-btn opacity-0"/>
			</main>
		</motion.section>
	);
}

export default GetOrderCardMobile;
