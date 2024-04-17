"use client";

import { ChangingSectionToFalse, ChangingSectionToTrue, NextSection, PrevSection, SectionStore } from "@/Store";
import React, { useCallback, useState } from "react";
import { useSnapshot } from "valtio";

function HomeNavigation() {
	const DirectionChangeHandler = useCallback((direction: "next" | "prev") => {
		ChangingSectionToTrue();

		direction === "next" ? NextSection() : PrevSection();

		setTimeout(() => {
			ChangingSectionToFalse();
		}, 500);
	}, []);
	return (
		<>
			<button
				onClick={() => DirectionChangeHandler("next")}
				className="absolute bottom-5 right-5 flex items-center justify-center flex-row-reverse gap-2 group/button">
				<div className="circle w-3 h-3 rounded-full bg-white group-hover/button:scale-110 transition-all"></div>
				<div className="line h-[1px] w-[60px] bg-[#fff] group-hover/button:w-[75px] transition-all"></div>
			</button>
			<button
				onClick={() => DirectionChangeHandler("prev")}
				className="absolute bottom-5 left-5 flex items-center justify-center group/button gap-2">
				<div className="circle w-3 h-3 rounded-full bg-black max-md:bg-white group-hover/button:scale-110 transition-all"></div>
				<div className="line h-[1px] w-[60px] bg-black max-md:bg-white group-hover/button:w-[75px] transition-all"></div>
			</button>
		</>
	);
}

export default HomeNavigation;
