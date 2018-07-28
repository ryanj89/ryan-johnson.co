import { css } from 'styled-components';

// export const Breakpoints = {
//   tablet: 580,
//   desktop: 800,
// };

// export type BreakpointLabels = keyof typeof Breakpoints;

// export const media = Object.keys(Breakpoints).reduce(
//   (mediaQueries, label: BreakpointLabels) => ({
//     ...mediaQueries,
//     [label]: (...args: any[]) =>
//       css`
//         @media (max-width: ${Breakpoints[label]}px) {
//           ${css(args as any)};
//         }
//       `,
//   }),
//   {},
// );

export const Breakpoints = {
  desktop: 1024,
  tablet: 900,
  mobileWide: 767,
  mobile: 480,
};

export type BreakpointLabels = keyof typeof Breakpoints;

// iterate through the Breakpoints and create a media template
export const media = Object.keys(Breakpoints).reduce(
  (mediaQueries, label: string) => {
    mediaQueries[label] = (...args: any[]) => css`
      @media only screen and (max-width: ${Breakpoints[label]}px) {
        ${css(args as any)};
      }
    `;
    return mediaQueries;
  },
  {} as { [key: string]: any },
);
// export const media = Object.keys(Breakpoints).reduce(
//   (mediaQueries, label: string) => {
//     // use em in breakpoints to work properly cross-browser and support users
//     // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//     const emSize = Breakpoints[label] / 16;
//     mediaQueries[label] = (...args: any[]) => css`
//       @media (max-width: ${emSize}em) {
//         ${css(args as any)};
//       }
//     `;
//     return mediaQueries;
//   },
//   {} as { [key: string]: any },
// );
