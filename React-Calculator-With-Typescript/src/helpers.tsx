// Helper function that prevents app crash from invalid single input
export const preventInvalidInput = (result: string): boolean => {
    const validSingleInputs = ['1', '2', '3', '4', '5','6', '7', '8', '9']; 
    const resultArr = result.split('');

    if (!resultArr.some(value => validSingleInputs.includes(value))) {
        return true;
    } 
    return false;
}

// Swap symbols on calculation by JavaScript functions and JavaScript operators 
export const handleSymbolsSwap = (result: string, symbol: string): string => {
    switch (symbol) {
        case '²':
            const elemElevatedToPowerOf2 = result[result.indexOf('²') - 1];
            result = result.replace(
                elemElevatedToPowerOf2,
                `Math.pow(${elemElevatedToPowerOf2}, 2)`
            );
            result = result.replace('²', '');
            break;
        case '√': 
            const elemToFindSquareRoot = result[result.indexOf('√') + 1];
            result = result.replace('√', `Math.sqrt(${elemToFindSquareRoot}`);
            result = result.replace(result[result.indexOf('r') + 4], '');
            result += ')';
            break;
        case '%':
            result = result.replace('%', '/100');
            break;
        case 'x':
            result = result.replace('x', '*');
            break;
        case '÷':
            result = result.replace('÷', '/');
            break;
    }
    return result;
}