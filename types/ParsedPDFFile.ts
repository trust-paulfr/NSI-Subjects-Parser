type ParsedPDFFile = {
    namePDF: string;
    content: string;
    exercices?: {
        exo1: string[];
        exo2: string[];
    },
    flags?: {
        exo1?: string[];
        exo2?: string[];
    }
}

export default ParsedPDFFile;