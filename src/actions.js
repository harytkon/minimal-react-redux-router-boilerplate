/*
 * action types
 */

export const TEXTBOX = 'TEXTBOX';

/*
 * action creators
 */

export function addtext(text) {
  return { type: TEXTBOX, text };
}
