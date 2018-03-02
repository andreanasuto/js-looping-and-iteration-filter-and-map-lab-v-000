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
  driversWithRevenueOver(array, revenue).map(element => element.name)
  console.log(driversWithRevenueOver(array, revenue));
  return newarray
}

function exactMatch(array, value) {
  const match = array.map(element =>
    element.name == value
  )
  return match
}
