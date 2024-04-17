import { proxy } from "valtio";

type SectionStoreType = {
	changingSection: boolean;
	currentSection:  "section1" | "section2" | "section3"
};

export const SectionStore = proxy<SectionStoreType>({
	changingSection: false,
	currentSection:"section1",
});

export function NextSection() {
	switch (SectionStore.currentSection) {
		case "section1":
			SectionStore.currentSection = "section2";
			break;
		case "section2":
			SectionStore.currentSection = "section3";
			break;
		case "section3":
			SectionStore.currentSection = "section1";
			break;
	}
}

export function PrevSection() {
	switch (SectionStore.currentSection) {
		case "section1":
			SectionStore.currentSection = "section3";
			break;
		case "section2":
			SectionStore.currentSection = "section1";
			break;
		case "section3":
			SectionStore.currentSection = "section2";
			break;
	}
}


export function ChangingSectionToTrue() {
	SectionStore.changingSection = true;
}

export function ChangingSectionToFalse() {
	SectionStore.changingSection = false;
}