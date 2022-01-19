let handeleChangeUserLinks = {

    userMidea: {
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
