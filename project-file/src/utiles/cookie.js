const setCookie = token =>{
    document.cookie = `accessToken = ${token.token} ; max-age = ${30*24*60*60}`;
}
const getCookie = ()=>{
    return document.cookie.trim().split(":")[1];
}
export{setCookie ,getCookie};