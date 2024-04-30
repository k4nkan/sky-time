export const fontColorChange = (r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): number[] => {
    let fontRGB: number[] = [];

    fontRGB[0] = (r1 + r2) / 2;
    fontRGB[1] = (g1 + g2) / 2;
    fontRGB[2] = (b1 + b2) / 2;

    return fontRGB;
};
