export const colorChange = (CurrentHours: string, CurrentMinutes: string, CurrentSeconds: string): number[] => {
    const hours: number = parseInt(CurrentHours);
    const minutes: number = parseInt(CurrentMinutes);
    const seconds: number = parseInt(CurrentSeconds);

    let resultColor: number[];

    if (hours >= 3 && hours < 9) {
        resultColor = [200,206,202,226,168,114];

    } else if (hours >= 9 && hours < 15) {
        resultColor = [56,160,255,204,230,247];

    } else if (hours >= 15 && hours < 21) {
        resultColor = [112,132,165,212,176,181];

    } else {
        resultColor = [5,22,55,92,101,139];
    }

    return resultColor;
};
