export const BOOK_BODY = {
  "query": "fragment bookNavigationFields on Book {\n  name\n  author\n  slug\n  layout\n  v2ready\n  degree\n  manualInfoChecked\n  description\n  imageUrlIntermediaria\n  imageUrlThumb\n  premium\n  __typename\n}\n\nquery SearchBookWithFiltersQuery($searchTerm: String!, $page: Int, $opts: String) {\n  searchBook: searchBookV2(searchTerm: $searchTerm, page: $page, opts: $opts) {\n    searchFilters\n    books {\n      ...bookNavigationFields\n      __typename\n    }\n    __typename\n  }\n}\n",
  "variables": {
      "searchTerm": "wonder",
      "opts": "",
      "page": 1
  },
  "operationName": "SearchBookWithFiltersQuery"
}