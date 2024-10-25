// const setCookie = token =>{
//     document.cookie = `accessToken = ${token.token} ; max-age = ${30*24*60*60}`;
// }
// const getCookie = ()=>{
//     return document.cookie.split("=")[1];
// }
// export{setCookie ,getCookie};
function setCookie(name, value) {
    const maxAge = 30 * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
  }
  
  function getCookie(name) {
    const value = `; ${document?.cookie}`;
    const parts = value?.split(`; ${name}=`);
    if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
  }
  
  export { setCookie, getCookie };
  