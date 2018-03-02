// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  const filteredarray =
  array.map(function filterfunction(element) {
    console.log(element.revenue)
    element.revenue >= revenue
  })
  console.log(filteredarray)
  return filteredarray
}
