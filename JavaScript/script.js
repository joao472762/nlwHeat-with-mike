function showUserName(userName={}){
    window.alert(userName.twitter)
}
let socialMidea = {
    facebook:"rocketseat",
    instagran:"progama_ai",
    youtube: "planetanovo",
    twitter: "cursosemvideo"
}
function ChangeUserName(newName='root'){
    userName.textContent = newName
}


function changeSocialMediaLinks(){
    for( li of socialLinks.children){
        const social =  li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${socialMidea[social]}`
    }
}
changeSocialMediaLinks()