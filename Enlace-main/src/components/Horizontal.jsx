import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./horizontal.module.css";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {

    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;
        
        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 0.7,
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    return (
        <div className = {styles.HorizontalWrapper} ref={panelsContainer}>
            <div className = {styles.page} ref={(e) => createPanelsRefs(e, 0)}>Horizontal - 1</div>
            <div className = {styles.page} ref={(e) => createPanelsRefs(e, 1)}>Horizontal - 2</div>
            <div className = {styles.page} ref={(e) => createPanelsRefs(e, 2)}>Horizontal - 3</div>
            <div className = {styles.page} ref={(e) => createPanelsRefs(e, 3)}>Horizontal - 4</div>
        </div>
    )
}

export default Horizontal
