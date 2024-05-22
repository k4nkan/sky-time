export const colorChange = (CurrentHours: string, CurrentMinutes: string, CurrentSeconds: string): number[] => {
    const hours: number = parseInt(CurrentHours);
    const minutes: number = parseInt(CurrentMinutes);
    const seconds: number = parseInt(CurrentSeconds);

    let resultColor: number[];
    let morningRBG: number[] = [200,206,202,226,168,114];
    let afternoonRGB: number[] = [48,138,255,177,221,255];
    let eveningRGB: number[] = [112,132,165,212,176,181];
    let latenightRGB: number[] = [5,22,55,92,101,139]

    if (hours >= 3 && hours < 9) {
        resultColor = morningRBG;

    } else if (hours >= 9 && hours < 15) {
        resultColor = afternoonRGB

    } else if (hours >= 15 && hours < 21) {
        resultColor = eveningRGB;

    } else {
        resultColor = latenightRGB;
    }

    return resultColor;
};
