import axios from  'axios'
const treeApi = axios.create({
  baseURL: 'https://www2.arvoredelivros.com.br',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJBcnZvcmUiLCJleHAiOjE1OTYzMjg4OTksImlhdCI6MTU5MzczNjg5OSwiaXNzIjoiQXJ2b3JlIiwianRpIjoiODQwYzMwZDgtNjhlYS00NDI1LWJjZTMtZTlkZmMyMjcxNjkxIiwibmJmIjoxNTkzNzM2ODk4LCJzdWIiOiJVc2VyOjE2NjE2NjgiLCJ0eXAiOiJhY2Nlc3MifQ.Pfh8EoM-X4lN6p2QmApZtnyysWuvBZAMJ-FS9YdnpWuqGGbvEiK1_I_6dvHCJEN0w7DsNtIhm3G2-WfBrgtNog'
  }
})

export default treeApi