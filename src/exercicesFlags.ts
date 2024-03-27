import ParsedPDFFIleType from '../types/ParsedPDFFile';

class NSI_SUBJECTS_EXO_FLAGS {
    flags: string[];
    triggers: string[][];
    
    constructor() {
        this.flags = ['POO', 'Recursive', 'dico', 'liste', 'pile/file', 'arbre/graphe'];
        this.triggers = [['class ', 'self.'], ['récursive', 'récursif'], ['= {'], ['= ['], ['pile', 'file'], ['arbre', 'graphe']];
    }

    private getExoFlags(Exo: string[]) {
        /*
            This function will add flags to the exercices of the PDF files.
            Exo -> array of strings (lines of the exercice)
        */

        const ExoFlags: string[] = [];

        for (const line of Exo) {
            for (let i = 0; i < this.flags.length; i++) {
                for (const trigger of this.triggers[i]) {  
                    if (line.includes(trigger) && !ExoFlags.includes(this.flags[i])) {
                        ExoFlags.push(this.flags[i]);
                        break;
                    }
                }
            }
        }

        return ExoFlags;
    }

    getFlags(PDFFilesParsed: ParsedPDFFIleType[]) {
        /*
            This function will add flags to the exercices of the PDF files.
            PDFFilesParsed -> array of objects (name, content and exercices of the PDF files)
        */

        for (const PDFFile of PDFFilesParsed) {
            if (!PDFFile.exercices) {
                continue;
            }

            const Exo1 = PDFFile.exercices.exo1;
            const Exo2 = PDFFile.exercices.exo2;

            PDFFile.flags = {
                exo1: this.getExoFlags(Exo1),
                exo2: this.getExoFlags(Exo2)
            }
        }

        return PDFFilesParsed;
    }
}

export default NSI_SUBJECTS_EXO_FLAGS;