//Mobile Nav
const ham = document.querySelector('nav > button');
const mobileNav = document.querySelector('.mobile-nav');

ham.addEventListener('click', e => {
    ham.classList.toggle('ham-active')
    mobileNav.classList.toggle('mobile-active')
})

//software
const softwareInfo = {
    softwares: [
        {
            title: 'PassMan',
            link: 'https://github.com/RUDRA78372/PassMan',
            des: 'PassMan is a password manager for everyday use',
            lang: 'Pascal',
            plat: 'Windows (64bit)'
        },
        {
            title: 'Netlock',
            link: 'https://github.com/RUDRA78372/Netlock',
            des: 'A simple program to block websites for your device',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        },
        {
            title: 'Desktop-Locker',
            link: 'https://github.com/RUDRA78372/Desktop-Locker',
            des: 'A regular desktop locker that requires password to unlock. The application captures a photo using webcam if user fails to write the correct password.',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        }
    ]
}

let html = '';
softwareInfo.softwares.forEach(e=>{
    const softContent = document.querySelector('.soft-content')
    const softHtml = `
        <div class="soft">
            <h3><a href="${e.link}" target="_blank">${e.title}</a></h3>
            <p>${e.des}</p>
            <span>${e.lang}</span><span class="right">${e.plat}</span>
        </div>
    `
    html += softHtml
    softContent.innerHTML = html
})
