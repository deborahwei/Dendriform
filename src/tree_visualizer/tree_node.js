import { setAttributes, svgNameSpace } from "../utilities/util";
import { RADIUS, STROKE_WIDTH, TIME_GAP} from "./constants";

export default class TreeNode {
    constructor(cx, cy, value) {
        this.r = RADIUS;
        this.gTag = document.createElementNS(svgNameSpace, "g");
        setAttributes(this.gTag, {
            "fill": "white",
            "stroke": "#614124",
            "stroke-width": STROKE_WIDTH
        });

        this.circle = document.createElementNS(svgNameSpace, "circle");
        setAttributes(this.circle, {
            "cx": cx,
            "cy": cy,
            "r": this.r
        });

        this.text = document.createElementNS(svgNameSpace, "text");
        setAttributes(this.text, {
            "x": cx,
            "y": cy,
            "stroke-width": STROKE_WIDTH
        });
    

        this.text.classList.add("param-text");
        this.text.textContent = value;

        this.gTag.appendChild(this.circle);
        this.gTag.appendChild(this.text);
    }

    getDOMObject() {
        return this.gTag;
    }

    show() { 
        return new Promise(resolve => { 
            setTimeout (() => {
                this.gTag.classList.remove('hidden');
                this.gTag.classList.add('processing')
                resolve();
            }, TIME_GAP)
        })
        // show, wait, highlight, processing
    }

    hide() { 
        this.gTag.classList.add("hidden") 
    }

    completed() { 
        this.gTag.classList.remove("processing")
        this.gTag.classList.add("completed") // node outline green 
    }


};