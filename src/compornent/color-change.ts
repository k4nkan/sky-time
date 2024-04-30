export const colorChange = (CurrentHours: string, CurrentMinutes: string): number[] => {
    const hours: number = parseInt(CurrentHours);
    const minutes: number = parseInt(CurrentMinutes);
    let resultColor: number[] = [];

    if (hours <= 7 && 19 <= hours) {
        resultColor = [47, 75, 133, 47, 75, 133];
    } else if (hours < 19 && 7 < hours) {
        resultColor = [149, 192, 236, 149, 192, 236];
    }

    return resultColor;
};
