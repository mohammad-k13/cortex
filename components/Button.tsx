import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
	title: string;
	isWhite: boolean;
} & ComponentPropsWithoutRef<"button">;
function Button(props: ButtonProps) {
	const {title, isWhite, className, ...otherProps} = props
return <button className={`${className} ${isWhite ? 'hero-button-white' : "hero-button-black"}`} {...otherProps}>{title}</button>;
}

export default Button;
