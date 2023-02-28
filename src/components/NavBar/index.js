function NavBar(header) {

    // nav container
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');
    header.appendChild(navBar);

    // =======>>>>>> 1ere enfant de la navBar: button <<<<<<<<<<<==========

    const actionBtn = document.createElement('button');
    actionBtn.classList.add('action-btn');
    actionBtn.textContent = "Action";
    actionBtn.setAttribute('type', 'submit')
    navBar.appendChild(actionBtn);

    // =======>>>>>> 2eme enfant de la navBar: ul <<<<<<<<<<<==========
    const navLinksContainer = document.createElement('ul');
    navLinksContainer.classList.add('links-container');
    navBar.appendChild(navLinksContainer);

    // Links: tous les articles de linksContainer
    const allArticle = document.createElement('li');
    allArticle.classList.add('link-item');
    navLinksContainer.appendChild(allArticle)

    const linkAllArticle = document.createElement('a');
    linkAllArticle.setAttribute('href', '#');
    linkAllArticle.classList.add('a-link')
    linkAllArticle.textContent = "Articles";
    allArticle.appendChild(linkAllArticle);

    // Links: connexion de linksContainer
    const connexion = document.createElement('li');
    connexion.classList.add('link-item');
    navLinksContainer.appendChild(connexion)

    const linkConnexion = document.createElement('a');
    linkConnexion.setAttribute('href', '#');
    linkConnexion.classList.add('a-link')
    linkConnexion.textContent = "Connexion";
    connexion.appendChild(linkConnexion);

    // Links: Inscription de linksContainer
    const signUp = document.createElement('li');
    signUp.classList.add('link-item');
    navLinksContainer.appendChild(signUp)

    const linkSignUp = document.createElement('a');
    linkSignUp.setAttribute('href', '#');
    linkSignUp.classList.add('a-link')
    linkSignUp.textContent = "Inscription";
    signUp.appendChild(linkSignUp);

    // =======>>>>>> 3eme enfant de la navBar: input <<<<<<<<<<<==========

    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Rechercher');
    navLinksContainer.appendChild(searchInput)

}

export default NavBar