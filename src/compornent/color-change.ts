export const colorChange = (CurrentHours: string, CurrentMinutes: string): number[] => {
    const hours: number = parseInt(CurrentHours);
    let resultColor: number[];

    if (hours >= 3 && hours < 9) {
        resultColor = [47, 75, 133, 47, 75, 133];

    } else if (hours >= 9 && hours < 15) {
        resultColor = [149, 192, 236, 149, 192, 236];

    } else if (hours >= 15 && hours < 21) {
        resultColor = [200, 206, 202, 226, 168, 114];
    
    } else {
        resultColor = [149, 192, 236, 149, 192, 236];
    }

    return resultColor;
};
