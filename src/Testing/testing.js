export const add = (a, b) => a + b;

export const total = (subtotal, total) => {
    return '$' + add(subtotal, total);
}