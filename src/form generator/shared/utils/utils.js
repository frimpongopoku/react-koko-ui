export function pop(array, pred) {
  if (!array || !pred) return {};
  var found,
    index,
    rest = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (pred(item)) {
      found = item;
      index = i;
    } else rest.push(item);
  }

  return { found, index, rest };
}