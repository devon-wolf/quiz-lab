export function countsAsYes(input) {
    if (input.toUpperCase().startsWith('Y')) {
        // console.log('this counts as yes'); /* PASSED */
        return true;
    }
    else {
        // console.log('this does not count as yes'); /* PASSED */
        return false;
    }
}