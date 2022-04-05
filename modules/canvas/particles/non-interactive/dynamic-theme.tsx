import type { NextPage } from 'next'
import { useEffect } from 'react';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

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

    useEffect(() => {
        const canvas = GetCanvas('canvas-box');
        const dims = GetCanvasContainerDims('canvas-box');

        // TODO [refactor] Create themes module, and derive colors from 'selected theme';
        const colors = [
            '#80cbc4',
            '#b2fef7',
            '#4f9a94'
        ];

        /**
         * Get canvas + create 2D context
         */
        if (canvas !== null) {
            const iH = dims.h;
            const iW = dims.w;
            let mouseX = 0;
            let mouseY = 0;
            canvas.height = iH - (iH * 0.01);
            canvas.width = iW - (iW * 0.025);

            const context = canvas.getContext('2d');

            // Add Event Listener
            canvas?.addEventListener('mousemove', (d) => {
                console.log(d);
                mouseX = d.offsetX;
                mouseY = d.offsetY;
            });

            if (context !== null) {
                const circles: any[] = [];

                for (let i = 0; i < 500; i++) {
                    const radius = Math.random() * 2.0;
                    const startX = Math.random() * (iW - (radius * 2)) + radius;
                    const startY = Math.random() * (iH - (radius * 2)) + radius;
                    const vX = Math.random() * 0.5;
                    const vY = Math.random() * 0.5;
                    const color = colors[getRandomInt(0, colors.length + 1)];
                    const NewCircle = (x: number, y: number, vecX: number, vecY: number) => {
                        return {
                            color: color,
                            radius: radius,
                            ogRadius: radius,
                            x,
                            y,
                            dx: vecX,
                            dy: vecY,
                            Interactivity() {
                                const xTolerances = [mouseX + 15, mouseX - 15];
                                const yTolerances = [mouseY + 15, mouseY- 15];
                                const aX = this.x > xTolerances[1] && this.x < xTolerances[0];
                                const aY = this.y > yTolerances[1] && this.y < yTolerances[0];
                                if (aX && aY) {
                                  if (this.radius < 30) {
                                      this.radius += 1;
                                  }
                                } else {
                                  if (this.radius > this.ogRadius && this.radius > 1) {
                                      this.radius -= 1;
                                  }
                                }
                            },
                            Update() {
                                if (this.x + this.radius > iW || this.x - this.radius < 0) {
                                    this.dx = -this.dx;
                                }

                                if (this.y + this.radius > iH || this.y - this.radius < 0) {
                                    this.dy = -this.dy;
                                }
                                this.Interactivity();
                                this.x += this.dx;
                                this.y += this.dy;
                                this.Draw();
                            },
                            Draw() {
                                context.beginPath();
                                context.strokeStyle = this.color;
                                context.fillStyle = this.color;
                                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                                context.stroke();
                                context.fill();
                            }
                        };
                    };
                    circles[i] = NewCircle(startX, startY, vX, vY);
                }

                const animate = () => {
                    requestAnimationFrame(animate);
                    context.clearRect(0, 0, iW, iH);
                    circles.forEach((c) => {
                        c.Update();
                    });
                };
                animate();

            }
        }
    });

    return (
        <div id={'canvas-box'} className={'terminal-card'}>
            <canvas id={'component-canvas'}></canvas>
        </div>
    );
}

export default FirstCanvas
