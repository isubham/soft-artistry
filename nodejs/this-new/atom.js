
function atom(atomic_number, mass_number)
{
    function isIsotopeOf(other)
    {
        return this.A === other.A;
    }

    return {
        'A' : atomic_number,
        'Z' : mass_number,
        isIsotopeOf : isIsotopeOf
    }

}


module.exports = atom;