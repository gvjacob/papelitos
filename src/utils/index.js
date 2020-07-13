/**
 * Pulls the first five characters from
 * given id and convert them to upper case
 */
export function formatDocumentId(id) {
  const firstFive = id.substring(0, 5);
  return firstFive.toUpperCase();
}
