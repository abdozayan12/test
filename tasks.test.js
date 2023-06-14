import calc, { stringLength, reverseString, capitalize } from "./tasks";


    test('string length', () => { 
    //AAA
    // Arrange
    const str = 'JavaScript';
    // Act 
    const lng = 10;
    //Assert
    expect(stringLength(str)).toBe(lng);
 })




 test('reversed string', () => { 
    const str = 'Adeeb';
    const res = 'beeda';

    expect(reverseString(str)).toBe(res);
  })

  // Addition test
  describe('addition operation', () => {
    test('check result = 8', () => { 
        expect(calc.addition(4,4)).toBe(8)
     })
      test('check result = 17', () => { 
        expect(calc.addition(10,7)).toBe(17)
     }) 
     test('check result = 5', () => { 
        expect(calc.addition(3,2)).toBe(5)
     })
  });
  // subtract test
  describe('subtracion operation', () => {
    test('check result = 0', () => { 
        expect(calc.subtraction(4,4)).toBe(0)
     })
      test('check result = 3', () => { 
        expect(calc.subtraction(10,7)).toBe(3)
     }) 
     test('check result = 1', () => { 
        expect(calc.subtraction(3,2)).toBe(1)
     })
  });
  
  // multiplation test
  describe('multiplation operation', () => {
    test('check result = 16', () => { 
        expect(calc.multiplation(4,4)).toBe(16)
     })
      test('check result = 7', () => { 
        expect(calc.multiplation(1,7)).toBe(7)
     }) 
     test('check result = 6', () => { 
        expect(calc.multiplation(3,2)).toBe(6)
     })
  });

// dividation test
  describe('dividation operation', () => {
    test('check result = 0', () => { 
        expect(calc.dividation(4,4)).toBe(1)
     })
      test('check result = 17', () => { 
        expect(calc.dividation(10,2)).toBe(5)
     }) 
     test('check result = 20', () => { 
        expect(calc.dividation(40,2)).toBe(20)
     })
  });
  

  test('is it capitalized?', () => { 
    expect(capitalize('fuhidy')).toBe('Fuhidy');
   })