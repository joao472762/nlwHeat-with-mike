let handleChangeUserLinks = {

    formatLink(socialNetwork = String,user = {}){
        return (`https://${socialNetwork}.com/${user[socialNetwork]}`)
    },
    changeLinks(userMidea = {}){
        for(li of socialLinks.children){
            const socialNetwork = li.getAttribute('class')
            li.children[0].href = this.formatLink(socialNetwork,userMidea)
          
        }
    }

}
let changeUserGitHubProfileInfos = {
    changeUserDatas(data){
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGithub.children[1].textContent = data.login
        userAvatar.src = data.avatar_url
    },
    callGitHubApi(user){
        const url = `https://api.github.com/users/${user}`

        const allUserDatas = fetch(url)
        .then(response => response.json())
        .then(data => this.changeUserDatas(data))
        
    },
    
}
let app = {
    init(){
        const userMidea = {
            github: 'joao472762',
            youtube: 'biilieelish',
            facebook: 'marvel',
            instagram: 'milesmorales',
            twitter: 'travisscott'
        }
        handleChangeUserLinks.changeLinks(userMidea)
        changeUserGitHubProfileInfos.callGitHubApi(userMidea.github)
    }
}
app.init()




