import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import BagModel from "./BagModel";
import { Environment, Lightformer, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import CameraRig from "./CameraRig";
import Lights from "./Lights";
import { useAnimate } from "framer-motion";
import { SectionStore } from "@/Store";
import { useSnapshot } from "valtio";

function ModelView() {
	return (
		<div className="w-full h-full">
			<Canvas className="w-full h-full">
				<directionalLight
					intensity={10.5}
					position={[0, 18, 4]}
				/>

				<Lights />
				<CameraRig>
					<BagModel  />
				</CameraRig>
			</Canvas>
		</div>
	);
}

export default ModelView;
