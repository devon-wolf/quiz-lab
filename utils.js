export function countsAsYes(input) {
    if (input.toUpperCase().startsWith('Y')) {
        return true;
    }
    else {
        return false;
    }
}