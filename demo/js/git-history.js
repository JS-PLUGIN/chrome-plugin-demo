let url = chrome ? document.URL : window.location.href;
const auxUrl = url.split('/');
auxUrl[2] = 'github.githistory.xyz'
url = auxUrl.join('/');

const buttonGithubHistory = document.createElement('a');
buttonGithubHistory.innerHTML = 'Open in Git History';
buttonGithubHistory.setAttribute('class', 'btn btn-sm BtnGroup-item');
buttonGithubHistory.setAttribute('href', url);
buttonGithubHistory.setAttribute('target', "_blank");
document.getElementById("raw-url").parentNode.appendChild(buttonGithubHistory);

console.log("git history");