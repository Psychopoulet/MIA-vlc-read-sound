// deps

    // externals
    import { isFile } from "node-pluginsmanager-plugin";

// private

    function firstExisting (files: string[]): Promise<string | null> {

        if (0 === files.length) {
            return Promise.resolve(null);
        }

        const file: string = files[0];

        return isFile(file).then((exists: boolean): Promise<string | null> => {

            return exists ? Promise.resolve(file) : firstExisting(files.slice(1));

        });

    }

// module

export default firstExisting;
