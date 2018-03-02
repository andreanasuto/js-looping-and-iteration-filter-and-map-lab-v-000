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
      if (element.name == value.name) {
        return value
        console.log(value);
      }
  })
  return match
}

function exactMatchToList() {

}
