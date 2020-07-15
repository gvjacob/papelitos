import { camelCase, isEmpty } from 'lodash';

/**
 * Pulls the first five characters from
 * given id and convert them to upper case
 */
export function formatDocumentId(id) {
  const firstFive = id.substring(0, 5);
  return firstFive.toUpperCase();
}

/**
 * Convert colon formatted time to seconds
 */
export function toSeconds(colonFormattedTime) {
  if (isEmpty(colonFormattedTime)) {
    return 0;
  }

  const toInteger = (value) => parseInt(value) || 0;

  const minutes = toInteger(colonFormattedTime.substring(0, 2));
  const seconds = toInteger(colonFormattedTime.substring(2));

  return minutes * 60 + seconds;
}

/**
 * Get random value from given list
 */
export function getRandomly(values) {
  const { floor, random } = Math;
  return values[floor(random() * values.length)];
}
