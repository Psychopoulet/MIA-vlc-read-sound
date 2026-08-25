// consts

    const PLAY_FLAGS: string[] = [
        "--intf",
        "dummy",
        "--no-video",
        "--no-osd",
        "--no-spu",
        "--no-interact",
        "--quiet",
        "--play-and-exit",
        "--no-volume-save",
        "--audio-visual=none"
    ];

// module

export default function playFlagsFor (platform: NodeJS.Platform): string[] {

    if ("win32" !== platform) {
        return PLAY_FLAGS;
    }

    const flags: string[] = [];

    PLAY_FLAGS.forEach((flag: string): void => {

        flags.push(flag);

        if ("dummy" === flag) {
            flags.push("--dummy-quiet");
        }

    });

    return flags;

}
