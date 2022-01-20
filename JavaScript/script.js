
let handeleChangeUserLinks = {

    userMidea: {
        github: 'joao472762',
        youtube: 'travisscott',
        twitter: 'cactusJack',
        facebook: 'traviscott',
        instagram: 'traviscott'
    },

    changeLinks(social){
        this.userMidea
        return(`https://${social}.com/${this.userMidea[social]}`)
        
    },

    execute(){
        for(li of socialLinks.children){
            let social = li.getAttribute('class')
            li.children[0].href = this.changeLinks(social)
            
        }
    }
}
handeleChangeUserLinks.execute()

function changeUserDatas(name , bio, avatar, githubLink){
    userName.textContent = name
    userBio.textContent = bio
    userAvatar.src = avatar
    userGitHubLink.href = githubLink
    userGitHubLink.children[1].textContent = handeleChangeUserLinks.userMidea.github
}


function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${handeleChangeUserLinks.userMidea.github}`

    fetch(url)
    .then(response  => response.json())
    .then(data => {
        changeUserDatas(data.name, data.bio, data.avatar_url,data.html_url)
    })
}
getGitHubProfileInfos()