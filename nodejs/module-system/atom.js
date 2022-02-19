
export const  createAtom = function(atomic_number, mass_number) {


    return {
        'atomic_number' : atomic_number,
        'mass_number' : mass_number
    }
};




export const outerShellElectrons = function(atomic_number) 
    {
        stableSteps = [2, 8, 18];
        leftElectrons = atomic_number;
        for(i = 0; i < stableSteps.length ; i++)
        {
            if (leftElectrons > 0) {
                if (stableSteps[i] < leftElectrons) {
                    leftElectrons = leftElectrons - stableSteps[i];
                }
            }
        }
        return leftElectrons;
    }

