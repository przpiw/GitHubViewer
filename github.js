class GitHub{
    constructor(){
        this.client_id = '25e2d854a2ca020bcf41'
        this.client_secret = '72932b76cee99d04639eb9a99a94b9d5f218d7aa'
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repo = await repoResponse.json();
    
        return {
            profile,repo
        }
    }
}