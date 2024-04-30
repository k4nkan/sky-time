export const colorChange = (CurrentHours: string, CurrentMinutes: string): number[] => {
    const hours: number = parseInt(CurrentHours);
    let resultColor: number[];

    if (hours >= 7 && hours <= 19) {
        resultColor = [47, 75, 133, 47, 75, 133];
    } else if (hours < 7 || hours > 19){
        resultColor = [149, 192, 236, 149, 192, 236];
    } else {
        resultColor = [0, 0, 0, 0, 0, 0];
    }

    return resultColor;
};
