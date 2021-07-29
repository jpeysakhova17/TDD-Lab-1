

const pl = require("./script");

//tests for starting with vowels 
test("apple translates to appleway", () => {
    expect(pl("apple")).toBe("appleway");
})
test("orange translates to orangeway", () => {
    expect(pl("orange")).toBe("orangeway");
})
test("enter translates to enterway", ()=> {
    expect(pl("enter")).toBe("enterway");
})
test("understand translates to understandway", () => {
    expect(pl("understand")).toBe("understandway");
})
test("impossible translates to impossibleway", () => {
    expect(pl("impossible")).toBe("impossibleway");
})



//tests for starting with one consonant 
test("banana translates to ananabay", () => {
    expect(pl("banana")).toBe("ananabay");
})
test("dog translates to ogday", () => {
    expect(pl("dog")).toBe("ogday");
})

//test for starting with two consonants
test("prune translates to unepray", () => {
    expect(pl("prune")).toBe("unepray");
})

//test for word starting with three cononsants
test("scream translates to eamscray", () => {
    expect(pl("scream")).toBe("eamscray");
})

//test for lowercase
test("making WaterMelon all be lowercase", () => {
    expect(pl("WaterMelon")).toBe("atermelonway");
})



