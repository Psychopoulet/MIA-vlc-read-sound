// module

export default function pushUnique (candidates: string[], value: string | undefined): void {

    if ("string" === typeof value && "" !== value && !candidates.includes(value)) {
        candidates.push(value);
    }

}
