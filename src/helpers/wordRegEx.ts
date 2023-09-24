export const WORD_MATCH = '[A-Za-z0-9]';

// toggleCitations
// toggleBlockCode

// insertLink
// insertImage

// toggleBullets
// toggleNumbers
// toggleCheckboxes


export const HEADER_PATTERN: RegExp = new RegExp("#{1,6} .+|.+");

export const BOLD_PATTERN = new RegExp(`[*][*]${WORD_MATCH}*[*][*]|${WORD_MATCH}+`);
export const ITALIC_PATTERN = new RegExp(`[_]${WORD_MATCH}*[_]|${WORD_MATCH}+`);
export const STRIKE_PATTERN = new RegExp(`[~][~]${WORD_MATCH}*[~][~]|${WORD_MATCH}+`);
export const CODE_PATTERN = new RegExp(`[\`]${WORD_MATCH}*[\`]|${WORD_MATCH}+`);
