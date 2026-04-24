// Configuration & Constants

// Canvas Settings
export const CANVAS_CONFIG = {
    blockSize: 8,
    columns: 8,
    rows: 8,
    separationGap: 8,
    paddingX: 20,
    paddingY: 10,
};

// Logo Grid Patterns
export const LOGO_PATTERNS = {
    '.': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'M': [
        [1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,1,0,0,1,1,1],
        [1,1,0,1,1,0,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0],
    ],
    'e': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'o': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    'v': [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [1,1,0,0,1,1,0,0],
        [0,1,1,0,1,1,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
};

export const LOGO_TEXT = ['.', 'M', 'e', 'o', 'v', 'v'];

// Flicker Animation Settings
export const FLICKER_CONFIG = {
    baseInterval: 4000,
    randomInterval: 11000,
    dimDuration: 800,
    flickerDuration: 700,
    recoverDuration: 100,
    baseBrightness: 0.85,
    dimmedBrightness: 0.15,
};

// Music Player Config
export const PLAYER_CONFIG = {
    tracks: [
        { name: 'Bladee - egobaby', url: './audio/egobaby.mp3' },
        { name: 'Singto Conley - Nagisa', url: './audio/Nagisa.mp3' },
        { name: 'Lovesicxo - Breaking The Code', url: './audio/004.mp3' },
        { name: 'Cloudier - A Centimetre Apart', url: './audio/A_Centimetre_Apart.mp3' },
        { name: 'pichu - stand out ft. blackwinterwells', url: './audio/stand_out.mp3' },
        { name: 'blindboy, Sofuu, mididuck - Hold On', url: './audio/Hold_On.mp3' },
        { name: 'Bladee - I Think', url: './audio/I_Think.mp3' },
    ],
    defaultVolume: 0.3,
    autoChangeInterval: 7000,
};

// Gallery Config
export const GALLERY_CONFIG = {
    transitionDuration: 1.5,
    autoChangeInterval: 7000,
};
