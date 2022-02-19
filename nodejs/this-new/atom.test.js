
atom = require('./atom');


function testIsotopeWithDifferentValuesShouldBeFalse() {
    let hydrogen = new atom(1, 1)
    let helium = new atom(2, 4)
    console.log(helium.isIsotopeOf(hydrogen) == false);
}

function testIsotopeWithSameValuesShouldBeTrue() {
    let hydrogen = new atom(1, 1)
    let hydrogen2 = new atom(1, 4)
    console.log(hydrogen.isIsotopeOf(hydrogen2) == true);
}




(function test()
{
    testIsotopeWithDifferentValuesShouldBeFalse()
    testIsotopeWithSameValuesShouldBeTrue()
})()
