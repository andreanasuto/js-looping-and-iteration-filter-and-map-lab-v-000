// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  const filteredarray =
  array.filter(function isBigEnough(element) {
  return element.revenue >= revenue
  })
  console.log(filteredarray);
  return filteredarray
}
