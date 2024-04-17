"use client";
import { SectionsInfo, type SectionInfo } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef, type MutableRefObject, type ComponentPropsWithRef, useRef, useEffect } from "react";
import Button from "./Button";

type GetOrderCardProps = {
	Info: SectionInfo;
	index: number;
	isOpen: "expanded" | "collapsed";
	onClick: (ref: any) => void;
};

function GetOrderCard({ Info, index, onClick, isOpen }: GetOrderCardProps) {
	const ref = useRef<HTMLElement>(null);


	return (
		<section
			key={index}
			id={`${Info.id}`}
			ref={ref}
			className={`rounded-xl z-20 w-[400px] h-[280px] shadow-lg relative overflow-hidden flex justify-center`}
			onClick={() => onClick(ref)}
			style={{ backgroundColor: "#dcdcdc" }}>
			<div
				className="colorize-circle absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full -z-10"
				style={{ backgroundColor: Info.sectionColor }}
			/>
			<main className="section-conten w-3/5 flex items-start justify-start flex-col gap-8 py-10 pt-20">
				<h2 className="text-5xl font-bold tracking-wide expanded-title text-white opacity-0">{Info.ProductInfo.name}</h2>
				<p className="text-lg w-3/4 text-justify expanded-p text-white opacity-0">{Info.ProductInfo.description}</p>
				<Button title="Order Now" isWhite={true} className="expanded-btn opacity-0"/>
			</main>
		</section>
	);
}

export default GetOrderCard;
