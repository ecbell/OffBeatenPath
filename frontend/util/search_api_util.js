export const fetchSearch = () => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
  })
}
