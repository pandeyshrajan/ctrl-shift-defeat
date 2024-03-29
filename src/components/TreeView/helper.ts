import { useCallback, useState } from "react";

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
    const [translate, setTranslate] = useState(defaultTranslate);
    const [dimensions, setDimensions] = useState();
    const containerRef = useCallback((containerElem: any) => {
        if (containerElem !== null) {
            const { width, height } = containerElem.getBoundingClientRect();
            const p: any = { width, height };
            setDimensions(p);
            setTranslate({ x: width / 2, y: height / 3.5 });
        }
    }, []);
    console.log(translate, dimensions);

    return [dimensions, translate, containerRef];
};
