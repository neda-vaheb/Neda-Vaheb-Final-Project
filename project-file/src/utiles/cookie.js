const setCookie = tokens =>{
    document.cookie = `accessToken = ${tokens.token} ; max-age = ${30*24*60*60}`;
}
const getCookie = (cookieName)=>{
    return document.cookie.find(token=>token.trim().split("=")[0]===cookieName)?.split("=")[1];
}
export{setCookie ,getCookie};