import { words, last } from 'lodash';
import { randanimalSync } from 'randanimal';

/**
 * Pass req and res to provided handler if method
 * matches. Otherwise, return a 404
 */
export function handle(methods) {
  return (req, res) => {
    const handler = methods[req.method];
    return handler ? handler(req, res) : res.status(404).end();
  };
}

/**
 * Generate a unique player name given existing names
 */
export function createUniquePlayerName(names = []) {
  const MAX_TRIES = names.length + 5;

  for (let i = 0; i <= MAX_TRIES; i++) {
    const name = last(words(randanimalSync()));

    if (!(name in names) || i === MAX_TRIES) {
      return name;
    }
  }
}
