// deps

    // natives
    import { isAbsolute } from "node:path";

// module

export default function looksLikeFilePath (candidate: string): boolean {

    return isAbsolute(candidate) || candidate.includes("/") || candidate.includes("\\");

}
