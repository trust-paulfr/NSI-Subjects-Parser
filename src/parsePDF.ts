import ParsedPDFFIleType from '../types/ParsedPDFFile';

class NSI_SUBJECTS_PARSER_PDF {
    async slicePDFContent(PDFContents: ParsedPDFFIleType[]) { 
        /*
            This function will slice the content of the PDF files into two parts (Exercice 1 and Exercice 2)
            and return an array of objects with the name of the PDF file, the content of the PDF file and the two exercices.
            PDFContents -> array of objects (name and stringify content of the PDF file)
        */
        const PDFFiles: ParsedPDFFIleType[] = [];

        for (const PDFContent of PDFContents) {
            let PDFLines = PDFContent.content.split('\n');

            PDFLines = PDFLines.map(function(line: string) {
                const _line = line.replaceAll('\f', '');

                return line.trim();
            });

            const indexExo1 = PDFLines.findIndex(line => line.includes('EXERCICE 1 (10 points)'));
            const indexExo2 = PDFLines.findIndex(line => line.includes('EXERCICE 2 (10 points)'));
            
            const Exo1 = PDFLines.slice(indexExo1, indexExo2);
            const Exo2 = PDFLines.slice(indexExo2);

            PDFFiles.push({
                namePDF: PDFContent.namePDF,
                content: PDFContent.content,
                exercices: {
                    exo1: Exo1,
                    exo2: Exo2
                }
            });
        }

        return PDFFiles;
    }
}

export default NSI_SUBJECTS_PARSER_PDF;