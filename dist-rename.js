import { readdirSync, renameSync, copyFileSync } from 'fs';

// rollup can't deal with filesnames that only differ by extension so we need to rename afterwards
for (const filename of readdirSync('dist/')) {
    if (filename.includes('.m.js')) {
        renameSync(`dist/${filename}`, `dist/${filename.replace('.m.js', '.mjs')}`);
    }
}

// Some packages still can't deal with mjs file extensions
copyFileSync('dist/localBadiDate-msm-locales.mjs', 'dist/localBadiDate-msm-locales.m.js');
