export const capitalize = (str) => {
    if (str !== null && str !== undefined) {
        return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
}