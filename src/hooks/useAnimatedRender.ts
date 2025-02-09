// import { useEffect, useState } from 'react';

// export const useAnimatedRender = (components: string[], animationDuration: number) => {
//     const [renderedComponents, setRenderedComponents] = useState<string[]>([]);

//     useEffect(() => {
//         components.forEach((component, index) => {
//             setTimeout(() => {
//                 setRenderedComponents(prev => [...prev, component]);
//             }, index * animationDuration);
//         });
//     }, [components, animationDuration]);

//     return renderedComponents;
// };