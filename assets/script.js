// creating data array where each array represents page data[0] - about me,
//data[1] -  my projects, data[2] - my skills
let data = [
    // about me
[
    {
        title:"General", 
        text:"Hi, I'm Nikita Goncharov, a motivated front-end developer with a strong passion for learning and growth. I'm deeply interested in creating functional and user-friendly websites that enhance digital interactions and make them more efficient.",
    },
    {
        title:"Goals", 
        text:"My goals are to refine my existing skills in front-end development and acquire new ones, in order to offer a wider range of services to clients and create even higher-quality web products.",
    },
    {
        title:"Skills", 
        text:"Being able to work with HTML, CSS, JavaScript, React, Git and Photoshop enables me to complete all the tasks that are required for front end development to the best of my abilities. While I am interested in programming, video games and speedcubing (the shortest possible time solving a Rubik's cube) are also enjoyable and help me to improve my logical thinking and attention to detail.",
    },
    {
        title:"Personal Attributes", 
        text:"I am a goal oriented and organized time. person This who is always because tries I to believe arrive in early breaking and down finish work tasks to on be done into smaller chunks and completing them systematically, a approach that is very efficient and helps in getting excellent output.",
    },
],
    // my projects
[
    {
        img:'../assets/images/dino.png',
        title:'Dino run',
        desciption:'This game is a parody of the famous dino run which was made by me in my free time as a pet project.',
        link:'https://github.com/Nikita-Goncharov2008/Dino-run'
    },    
    {
        img:'../assets/images/findPair.png',
        title:'Find pair',
        desciption:'This project is about the memories of the game of pocket players who match the card payers. It will help you practice JavaScript and improvise problem solving skills.',
        link:'https://github.com/Nikita-Goncharov2008/find-a-pair'
    },    
    {
        img:'../assets/images/guessNumber.png',
        title:'Guess a number',
        desciption:'This project is a logic game where the user is asked to guess a randomly selected number. It was designed to improve logical thinking and practice working with basic JavaScript concepts.',
        link:'https://github.com/Nikita-Goncharov2008/Guess-number'
    },    
    {
        img:'../assets/images/ZOE.png',
        title:'ZOE',
        desciption:'this site is a site of the company zoe producing healthy food. this site developed my skills in creating adaptive sites using CSS and HTML',
        link:'https://github.com/Nikita-Goncharov2008/Project_Zoe'
    },
    {
        img:'../assets/images/timer.png',
        title:'Real Time Clock',
        desciption:'This is a simple website with a real-time feature that also changes the background depending on the time. In the process of creating it, I improved my JavaScript skills and learned a lot about the hexadecimal number system and HEX. ',
        link:'https://github.com/Nikita-Goncharov2008/Real-life-time'
    },
],
// my skills
[
    {
        title:'HTML5',
        description:'HTML was the first step in my journey as a front-end developer. I spent countless hours learning different tags, understanding how they work, and how they affect the appearance of web pages. My skills in HTML enabled me to write the structured and semantic markup for this website',
        skillType:'html',
        
    },
    {
        title:'CSS3',
        description:'CSS became the next step in my growth as a front-end developer. While learning it, I discovered my passion for web design, realizing how powerful CSS is for transforming content. I learned to create visually appealing and user-friendly interfaces, enhancing the overall user experience.',
        skillType:'css',
       
    },
    {
        title:'JavaScript',
        description:'JavaScript became my first programming language and showed me the limitless potential of front-end development. I realized that CSS was just the beginning, and JavaScript allows you to create complex and interactive web applications. Learning the basics, such as variables, arrays, functions, classes, loops, and conditions, gave me the tools to build dynamic and functional websites.',
        skillType:'js',
        
    },
    {
        title:'Photoshop',
        description:"I became familiar with Photoshop when I started learning it in school. After just a few lessons, I was impressed by the program's capabilities for creating and editing graphics. Since then, I’ve been using Photoshop to design visual elements such as logos, banners, and web page mockups, enhancing the visual appeal of my projects.",
        skillType:'photoshop',
        
    },
    {
        title:'Git',
        description:'I learned Git as a supplementary tool for streamlining project workflows. It has proven to be essential for version control and collaborative development. Git helps track changes, collaborate with teams, and organize the development process effectively, making it an integral part of my workflow.',
        skillType:'git',
        
    },
    {
        title:'ReactJS',
        description:'React.js was the first framework I truly enjoyed learning. I was amazed to discover how many complex tasks can be accomplished more efficiently with less effort. This tool introduced me to new development approaches, such as component-based architecture and state management, enabling me to build scalable and dynamic applications.',
        skillType:'react',
        
    },
    {
        title:'Addobe Illustrator',
        description:'I mastered Adobe Illustrator along with Photoshop as part of my school program, but I became truly fascinated by the capabilities and focus of the software. Creating vector images and icons turned out to be incredibly engaging and interesting. I’ve created many works in this field, which I’m happy to share at the following  <a target = "_blank" href = "https://nikita-goncharov2008.github.io/Gallery/">link<a/>',
        skillType:'illustrator'
    }
]
]

let aboutMeMain = document.body.querySelector('.about-me')
let skillsMain = document.body.querySelector('.skills_main')
let projectsMain = document.body.querySelector('.projects__main')

let aboutMeClasses = ['general', 'goals', 'skill', 'personal-attitudes']

function DataHendler(aboutMeMain, skillsMain, projectsMain){
    let blueprint
    if (aboutMeMain && !skillsMain && !projectsMain){
        for(let i = 0; i<data[0].length; i++){
            blueprint = `<div class="${aboutMeClasses[i]}">
                            <h2 class="title ${aboutMeClasses[i]}__title"><b class="bold">${data[0][i].title}</b></h2>
                            <p class="description general__description">${data[0][i].text}</p>
                        </div>`
            aboutMeMain.innerHTML += blueprint
        }
        return;
    }
    if (!aboutMeMain && skillsMain && !projectsMain){
        for(let i = 0; i<data[2].length; i++){
            blueprint = `<div class="skills ${data[2][i].skillType}">
                            <div class="shown_content">
                                <h3 class="skills__title">${data[2][i].title}</h3> 
                            </div>
                            <div class="skills__desription_expanded">
                                <p>${data[2][i].description}</p>
                            </div>
                        </div>`
            skillsMain.innerHTML += blueprint
        }
        return
    }
    if (!aboutMeMain && !skillsMain && projectsMain){
        for(let i = 0; i<data[1].length; i++){
            blueprint = `<div class="projects__main_cards-container">
                            <div class="projects__main_card">
                                <img src="${data[1][i].img}" alt="game picture" class="projects__main_card_main-image">
                                <p class="projects__main_card_titile">${data[1][i].title}</p>
                                <p class="projects__main_card_descripton">${data[1][i].desciption}</p>
                                <a target = '_blank' href="${data[1][i].link}" class="projects__main_card_link">project repository&rarr;</a>
                            </div>
                        </div>`
            projectsMain.innerHTML += blueprint
        }
        return 
    }

}

DataHendler(aboutMeMain, skillsMain, projectsMain)

function toggleMenu() {
    document.querySelector(".menu__buttons").classList.toggle("open");
}


let phone = document.querySelector('.phone')
let gmail = document.querySelector('.gmail')
let github = document.querySelector('.github')

let copied = document.querySelector('.copied')
function getCopy(event){
    const text = event.currentTarget.innerText;
    navigator.clipboard.writeText(text).then(()=>{
            copied.style.display = 'block'
            copied.style.animationName = 'appearing'
            copied.style.animationDuration = '0.4s'
            copied.style.animationTimingFunction = 'ease-in'
            copied.style.animationFillMode = 'forwards'
        setTimeout(()=>{
            copied.style.animationName = 'disappearing'
            copied.style.animationDuration = '0.4s'
            copied.style.animationTimingFunction = 'ease-in'
            copied.style.animationFillMode = 'forwards'
            copied.style.display = 'none'
        },1000)
    })
}

phone.addEventListener('click', getCopy)
gmail.addEventListener('click', getCopy)
github.addEventListener('click', getCopy)


