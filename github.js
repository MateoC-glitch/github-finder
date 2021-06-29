class Github {
    constructor() {
        this.client_id = '055dd901cdbb06215596';
        this.client_secret = ' 4adabb084d11fade1898a3b9754584e1fa861e3c';
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUser(user) {
        const profileResonse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResonse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResonse.json();
        const repos = await repoResonse.json();

        return {
            profile,
            repos
        }
    }
}