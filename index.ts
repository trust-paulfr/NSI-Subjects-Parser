import dotenv from 'dotenv';
import fs from 'fs';
import SubjectPDF_Convert from './src/convertPDF';
import SubjectPDF_Parser from './src/parsePDF';
import SubjectPDF_Flags from './src/exercicesFlags';

dotenv.config();

async function main() {
    console.log("Starting the process...");
    if (!process.env.APP_EXPORT_PATH) {
        console.error("Please provide the export path for the JSON file. (.env file)");
        process.exit(1);
    }

    const PDFConverter = new SubjectPDF_Convert(process.env.APP_EXPORT_PATH); 
    const PDFContents = await PDFConverter.convertPDF(); // PDF Files to ParsedPDFFile format

    const PDFParser = new SubjectPDF_Parser();
    const PDFFilesParsed = await PDFParser.slicePDFContent(PDFContents); // ParsedPDFFile to ParsedPDFFile with exercices

    const FDPFilesFlags = new SubjectPDF_Flags();
    const PDFFilesWithFlags = FDPFilesFlags.getFlags(PDFFilesParsed); // ParsedPDFFile with exercices to ParsedPDFFile with exercices and flags

    // TODO: Fix nodemon watcher to avoid restarting the process when the JSON file is created.
    await fs.writeFileSync('./NSI_SUBJECTS.json', JSON.stringify(PDFFilesWithFlags, null, 4));
    console.log("Process finished. The JSON file has been created.");
}

main().catch(console.error);