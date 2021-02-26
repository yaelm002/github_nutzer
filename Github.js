class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: '0d9c339b8f85be8cc605e870d8e790f5c8c7cbc1'
      }
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`
    )
 
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    )
 
    const profile = await profileResponse.json()
 
    const repos = await repoResponse.json()
 
    return {
      profile,
      repos
    }
  }
}