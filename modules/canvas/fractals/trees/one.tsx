import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Slider } from '@mui/material';
import contact from "../../../../pages/contact";

// TODO [refactor] Create themes module, and derive colors from 'selected theme';
const colors = [
    '#80cbc4',
    '#b2fef7',
    '#4f9a94'
];


type coords = {
    x: number;
    y: number;
};

const GetCanvas = (containerId: string): HTMLCanvasElement | null => {
    const container: HTMLElement | null = document.getElementById(containerId);
    if (container) {
        return container.querySelector('canvas');
    } else {
        return null;
    }
};

const GetCanvasContainerDims = (containerId: string): any => {
    const container: HTMLElement | null = document.getElementById(containerId);

    if (container) {
        return {
            h: container.offsetHeight,
            w: container.offsetWidth
        };
    } else {
        return {
            h: 0,
            w: 0
        };
    }
};

const FirstCanvas: NextPage = () => {
    const [slideVal, setSlideVal] = useState(35);
    const [lengthSlideVal, setLengthSlideVal] = useState(0)
    const [baseLength, setBaseLength] = useState(0);

    useEffect(() => {
        const canvas = GetCanvas('tall-canvas-box');
        const dims = GetCanvasContainerDims('tall-canvas-box');

        const produceCoords = (rCoords: any, length: number, angle: number) => {
            return {
                x: (rCoords.x + (length * Math.cos(Math.PI * 2 * angle / 360))),
                y: (rCoords.y + (length * Math.sin(Math.PI * 2 * angle / 360))),
            };
        };

        const MakeLineAndReturn = (context: any, c1: coords, c2: coords) => {
            context.beginPath();
            context.strokeStyle = colors[1];
            context.moveTo(c1.x, c1.y);
            context.lineTo(c2.x, c2.y);
            context.moveTo(c1.x, c1.y);
            context.stroke();
        };
        /**
         * Get canvas + create 2D context
         */
        if (canvas !== null) {
            const bL = window.innerWidth < 800 ? 100 : 175
            const terminateLength = window.innerWidth < 800 ? 2 : 10;
            const factor = window.innerWidth < 800 ? 700 : 1000;
            const iH = 600;
            const iW = dims.w;
            // Force Canvas Height
            canvas.height = 600;
            canvas.width = iW - (iW * 0.025);

            const context = canvas.getContext('2d');

            setBaseLength(bL);

            if (context !== null) {
                context.clearRect(0, 0, iW, iH);

                const centerBottom = {x: iW / 2, y: iH - 5};
                const topTrunkPoint = produceCoords(centerBottom, baseLength, -90);

                // Make Trunk
                MakeLineAndReturn(context, centerBottom, topTrunkPoint);
                context.moveTo(topTrunkPoint.x, topTrunkPoint.y);

                // MakeLineAndReturn(context, {x: 250, y: 250}, {x: 350, y: 350});
                const Frac = (rCoords: coords, p: number, a: number) => {
                    if (p > terminateLength) {
                        const b1 = produceCoords(rCoords, p, a);
                        const b2 = produceCoords(rCoords, p, a - 90);
                        MakeLineAndReturn(context, rCoords, b1);
                        MakeLineAndReturn(context, rCoords, b2);
                        context.moveTo(b1.x, b1.y);
                        Frac(b1, p * lengthSlideVal / factor, a + (slideVal));
                        Frac(b2, p * lengthSlideVal / factor, a - (slideVal));
                    }
                };

                // Call Fractals
                Frac(topTrunkPoint, 100, -45);}
            // }
        }
    });

    return (
        <div>

            <div id={'tall-canvas-box'} className={'terminal-card'}>
                <canvas id={'component-canvas'}></canvas>
            </div>
            <div className={'terminal-card'}>
                <div className={'eighty-percent'}>
                    <label>Angle</label>
                    <Slider
                        min={0}
                        max={45}
                        value={slideVal}
                        onChange={($e: any) => {setSlideVal($e.target.value)}}></Slider>
                </div>
                <div className={'eighty-percent'}>
                    <label>Length</label>
                    <Slider
                        min={baseLength * 3.5}
                        max={baseLength * 4.55}
                        value={lengthSlideVal}
                        onChange={($e: any) => {setLengthSlideVal($e.target.value)}}></Slider>
                </div>
            </div>
        </div>
    );
}

export default FirstCanvas
