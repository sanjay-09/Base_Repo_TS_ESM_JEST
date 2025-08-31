import {add, sub} from "../src/index.js"

test("add",()=>{
    expect(add(2,1)).toBe(3);
})

test("sub",()=>{
    expect(sub(2,2)).toBe(0);
})