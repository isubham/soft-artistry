const { atom } = require('./atom');

atom = require('./atom');
molecule = require('./molecule');

atom.createAtom(2);
atom.outerShellElectrons(34);
molecule.molecule2(atom.createAtom(2), atom.createAtom(4))
