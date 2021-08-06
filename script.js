
let user={
    name:'james',
    age:22
}
let userParagraph = document.getElementById('user')
 function signIn() {
     window.localStorage.setItem('user',JSON.stringify(user));
   
    
}


 function getUser() {
    
    const userP = JSON.parse(window.localStorage.getItem('user'))
    userParagraph.innerHTML= `${user.name} ${user.age}`
    
}



function signOut() {
    localStorage.removeItem('user')
    userParagraph.innerHTML =""
    }
