export const modifyHex = (hex: string) => {
    if (hex.length === 4) {
        hex = hex.replace("#", "");
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return hex;
};

export const hexToRgb = (hex: string) => {
    if(!hex) return null
    
    let x = [];
    hex = hex.replace("#", "");
    if (hex.length !== 6) {
        hex = modifyHex(hex);
    }
    x.push(parseInt(hex.slice(0, 2), 16));
    x.push(parseInt(hex.slice(2, 4), 16));
    x.push(parseInt(hex.slice(4, 6), 16));
    return x.join(" ");
};
