'use client';
import * as React from 'react';

// FROM TRANSITIONS.DEV

//   Usage:
//     <span class="t-digit-group is-animating">
//       <span class="t-digit">1</span>
//       <span class="t-digit">2</span>
//       <span class="t-digit" data-stagger="1">.</span>
//       <span class="t-digit" data-stagger="2">3</span>
//     </span>

//   Replay:
//     - Remove `.is-animating`, re-render digits (or swap text),
//       force a reflow, then re-add `.is-animating`.
//     - Use data-stagger="1", "2", … to delay individual
//       digits by `n * var(--digit-stagger)`.

//   Direction:
//     --digit-dir-x / --digit-dir-y are unit-less multipliers
//     (e.g. 1, -1, 0) applied to --digit-distance.
// 

const styles = `
:root {
  --digit-dur: 500ms;
  --digit-distance: 8px;
  --digit-stagger: 70ms;
  --digit-blur: 2px;
  --digit-ease: cubic-bezier(0.34, 1.45, 0.64, 1);
  --digit-dir-x: 0;
  --digit-dir-y: 1;
}

@keyframes t-digit-pop-in {
  0%   {
    transform: translate(
      calc(var(--digit-distance) * var(--digit-dir-x)),
      calc(var(--digit-distance) * var(--digit-dir-y))
    );
    opacity: 0;
    filter: blur(var(--digit-blur));
  }
  100% { transform: translate(0, 0); opacity: 1; filter: blur(0); }
}

.t-digit-group {
  display: inline-flex;
  align-items: baseline;
}
.t-digit {
  display: inline-block;
  will-change: transform, opacity, filter;
}
.t-digit-group.is-animating .t-digit {
  animation: t-digit-pop-in var(--digit-dur) var(--digit-ease) both;
}

@media (prefers-reduced-motion: reduce) {
  .t-digit-group .t-digit { animation: none !important; }
}`;

export default function NumberPopIn({ children = '0000', duration = 150 }: { children?: string, duration?: number }): React.ReactElement {
    const [isAnimating, setIsAnimating] = React.useState<boolean>(false);
    const inputArray = children.split('');

    React.useEffect(() => {
        setIsAnimating(true);
    }, [])

    return (
        <>
            <style>{styles}</style>
            <span className={`t-digit-group${isAnimating ? ' is-animating' : ''}`}>
                {inputArray.map((item, key) =>
                    <span style={{ animationDelay: `${(duration / inputArray.length) * key}ms` }} className="t-digit" key={key}>{item}</span>
                )}
            </span>
        </>
    )
}