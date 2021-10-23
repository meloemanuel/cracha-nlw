const links = {
  github: 'meloemanuel',
  youtube: 'Abelardohful',
  facebook: 'emanuel.melo.31',
  instagram: 'oxentinhos',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}` //busca no links e salva o link com o user
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //picture.textContent = data.avatar_url
      userName.textContent = data.name
      //document.getElementById('userName').textContent = data.name
      info.textContent = data.bio
      gitLink.href = data.html_url
      avatar.src = data.avatar_url
      userGit.textContent = data.login
    })
}

getGitHubProfileInfos()
