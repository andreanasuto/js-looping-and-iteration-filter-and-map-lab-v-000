// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  const filteredarray =
  array.filter(function isBigEnough(element) {
  return element.revenue >= revenue
  })
  return filteredarray
}

function driverNamesWithRevenueOver(array,revenue) {
  const newarray =
  driversWithRevenueOver(array, revenue).map(element => element.name)
  return newarray
}

function exactMatch(array, value) {
  const match = array.map(function searchMatch(element) {
      debugger
      if (element == value) {
        return Object.assign({}, {name: element.name}, {revenue: element.revenue})
      }
  return match
  })
  console.log(match);
  return match
}

function exactMatchToList(array, object) {
  const newarray =
  exactMatch(array, object).map(element => element.name)
  return newarray
}
