// config: object
export function init(config) {
    console.log(config);
    return true, 1;
}

// code: number
export function exit(code) {
    console.log(code);
    return code + 1;
}
