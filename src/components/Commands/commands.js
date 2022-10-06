/* eslint-disable import/no-anonymous-default-export */
// import getcat from "../../utils/cat"
// import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return `
                    About Me.\n---\n
                    male\n
                    dog owner\n
                    Scottish\n
                    Mechanical Engineer\n
                    avid walker\n
                    well travelled\n
                    a little quirky\n
                    principled\n---\n
                `
            }
        },
        // twitter: {
        //     description: 'Opens my Twitter Handle.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://twitter.com/_asheeshh', '_blank')
        //         return "opening twitter handle..."
        //     }
        // },
        // github: {
        //     description: 'Opens my GitHub Profile.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://github.com/asrvd', '_blank')
        //         return "opening github account..."
        //     }
        // },
        // discord: {
        //     description: 'Opens my Discord Account.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://discordapp.com/users/784363251940458516', '_blank')
        //         return "opening discord account..."
        //     }
        // },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 100%
                    italian          - 85%
                    portuguese       - 40% - [learning]
                    php              - 80%
                    javascript       - 65%
                    html5            - 90%
                    css3             - 90%
                    react            - 40% - [learning]\n---\n
                `
            }  
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    professionalism    - 100%
                    coding             - 100%
                    trustworthiness    - 100%
                    critical-thingking - 100%
                    remote-working     - 100%
                    dog-loving         - god-level\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'online.meta.mt'                  | 'my own company'    | 'wordpress'
                    'mis.marcadores.net'              | 'Mexican affiliate' | 'wordpress'
                    'toponlinepokies247.com'          | 'landing page'      | 'html,css'
                `
            }
        },
        contact: {
            description: 'Contact me to know more',
            usage: 'contact',
            fn: () => {
                return `
                    email    : abel.rogers@gmail.com\n
                    Linkedin : linkedin.com/in/abelrogers/\n
                    Skype    : dunninganima
                `
            }
        },
        // repo: {
        //     description: "Opens this website's github repository.",
        //     usage: 'repo',
        //     fn: () => {
        //         window.open("https://github.com/asrvd/AbelRogers", '_blank')
        //         return "opening repository..."
        //     }
        // },
        // spotify: {
        //     description: 'Get info about my recently played song.',
        //     usage: 'spotify',
        //     fn: async () => {
        //         const item = await getnp()
        //         return `
        //             Now Playing/Recently Played\n
        //             ---\n
        //             Song: ${item.song}\n
        //             Artist: ${item.artist}\n---\n
        //         `
        //     }
        // }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        },
        dog: {
            description: 'Get a random dog gif.',
            usage: 'dog',
        },
        joke: {
            description: 'Get a random developer joke.',
            usage: 'joke',
        }
    }
}
