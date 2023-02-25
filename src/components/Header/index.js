import NavBar from "../NavBar/index.js";

function header() {

    // header-content
    const header = document.createElement('header')
    header.classList.add('header')
    document.body.appendChild(header);

    // ==========>>>>>>> 1ere element du heder : social div <<<<<<<============

    const socialIconsContainer = document.createElement('div');
    socialIconsContainer.classList.add('social-container');
    header.appendChild(socialIconsContainer);

    // 1ere element de socialIconsContainer
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Hetic";
    socialIconsContainer.appendChild(mainTitle);

    // 2eme element de socialIconsContainer
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');
    socialIconsContainer.appendChild(iconsContainer);

    // icons facebook
    const facebookIcon = document.createElement('img');
    facebookIcon.classList.add('icon');
    facebookIcon.setAttribute('src', '../../src/icons/facebook-black.svg');
    facebookIcon.setAttribute('alt', 'facebook');
    iconsContainer.appendChild(facebookIcon);

    // icons twitter
    const twitterIcon = document.createElement('img');
    twitterIcon.classList.add('icon');
    twitterIcon.setAttribute('src', '../../src/icons/twitter-black.svg');
    twitterIcon.setAttribute('alt', 'twitter');
    iconsContainer.appendChild(twitterIcon);

    // icons instagram
    const instagramIcon = document.createElement('img');
    instagramIcon.classList.add('icon');
    instagramIcon.setAttribute('src', '../../src/icons/instagram-black.svg');
    instagramIcon.setAttribute('alt', 'instagram');
    iconsContainer.appendChild(instagramIcon);

    // icons linkedin
    const linkedinIcon = document.createElement('img');
    linkedinIcon.classList.add('icon');
    linkedinIcon.setAttribute('src', '../../src/icons/linkedin-black.svg');
    linkedinIcon.setAttribute('alt', 'linkedin');
    iconsContainer.appendChild(linkedinIcon);

    // ==========>>>>>>> 2eme element du heder : Blog name <<<<<<<============

    // blog name container
    const blogNameContainer = document.createElement('div');
    blogNameContainer.classList.add('blog-name-container');
    header.appendChild(blogNameContainer);

    // 1ere enfant de blog name container
    const blogTitle = document.createElement('h1');
    blogTitle.textContent = "blog";
    blogTitle.classList.add('blog-title');
    blogNameContainer.appendChild(blogTitle);

    NavBar(header)

}

export default header;