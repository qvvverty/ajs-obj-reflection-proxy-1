export default function orderByProps(char, order = []) {
  const propsSorted = [];
  for (const elem of order) {
    propsSorted.push({ [elem]: char[elem] });
  }
  const charEntries = Object.keys(char).sort();
  for (const param of charEntries) {
    if (!order.includes(param)) {
      propsSorted.push({ [param]: char[param] });
    }
  }
  return propsSorted;
}
