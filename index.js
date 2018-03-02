// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  const filteredarray =
  array.filter(function isBigEnough(element) {
  return element.revenue >= revenue
  })
  console.log(filteredarray);
  return filteredarray
}

function driverNamesWithRevenueOver(array,revenue) {
  const newarray =
  driversWithRevenueOver(array, revenue).filter(element => element.name)
  console.log(newarray);
  return filteredarray
}
