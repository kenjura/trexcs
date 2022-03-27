export function formatModifier(number) {
    switch (true) {
        case (isNaN(number)): return '-';
        case (number > 0): return `+${number}`;
        case (number === 0): return `+${number}`;
        case (number < 0): return `-${number}`;
    }
}