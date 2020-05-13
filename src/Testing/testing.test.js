import { add, total } from './testing';

//Unit Test, test one thing
test("Sum should be 3", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 4)).toBe(6);
});

test("total", () => {
    expect(total(5, 2)).toBe('$7');
});

