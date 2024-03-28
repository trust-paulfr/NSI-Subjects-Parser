import fs from 'node:fs';
import ParsedPDFFIleType from '../types/ParsedPDFFile';
const PDFParser = require('pdf-to-text');

class NSI_SUBJECTS_CONVERT_PDF {
    private PDFExportPath: string;

    constructor(PDFExportPath: string) {
        this.PDFExportPath = PDFExportPath;
    }

    async convertPDF(): Promise<ParsedPDFFIleType[]> {
        /*
            This function will convert PDF files to an array (name and stringify content for each PDF file)
            and return the array.
            Path to PDF files -> constructor of this class
        */

        const dirFiles = await fs.readdirSync(this.PDFExportPath);
        const PDFFiles = dirFiles.filter(file => file.includes('.pdf'));
        const Promises = [];
        const ParsedFiles: ParsedPDFFIleType[] = [];

        for (const file of PDFFiles) {
            Promises.push(new Promise(async (resolve, reject) => {
                PDFParser.pdfToText(this.PDFExportPath + file, async function(_err : ErrorCallback, data: string) {
                    if (_err) throw(_err);
                    
                    const ParsedFile: ParsedPDFFIleType = {
                        namePDF: file,
                        content: data
                    }
                    ParsedFiles.push(ParsedFile);

                    resolve(true);
                });
            }));
    
        }
    
        await Promise.all(Promises);
        return ParsedFiles;
    }
}

export default NSI_SUBJECTS_CONVERT_PDF;