import windows from '../Assets/windowspic.png'
import reswin3 from '../Assets/reswin3.png'
import reswin1 from '../Assets/reswinss1.png'
import reswin2 from '../Assets/reswinss2.png'
import winmainss from '../Assets/winmainss.png'
import gmail from '../Assets/windows_gmail.png'
import gmailss1 from '../Assets/gmailss1.png'
import gmailss2 from '../Assets/gmailss2.png'
import gmailss3 from '../Assets/gmailss3.png'
import gmailres1 from '../Assets/gmailres1.png'
import gmailres2 from '../Assets/gmailres2.png'
import gmailres3 from '../Assets/gmailres3.png'
import office from '../Assets/windows_office.png'
import offss1 from '../Assets/offss1.png'
import offss2 from '../Assets/offs2.png'
import offss3 from '../Assets/offss3.png'
import resoff1 from '../Assets/resoff1.png'
import resoff2 from '../Assets/resoff2.png'
import resoff3 from '../Assets/resoff3.png'
import weather from '../Assets/windows_weather.png'
import youtube from '../Assets/windows_youtube.png'
import ytmainss from '../Assets/ytmainss.png'
import ytss1 from '../Assets/ytss1.png'
import ytss2 from '../Assets/ytss2.png'
import ytss3 from '../Assets/ytss3.png'
import ytss4 from '../Assets/ytss4.png'
import ytss5 from '../Assets/ytss5.png'
import ytres1 from '../Assets/ytres1.png'
import ytres2 from '../Assets/ytres2.png'
import ytres3 from '../Assets/ytres3.png'
import whatsapp from '../Assets/windows_whatsapp.png'
import wtmainss from '../Assets/wtmainss.png'
import wtres1 from '../Assets/wtres1.png'
import wtres2 from '../Assets/wtres2.png'
import wtres3 from '../Assets/wtres3.png'
import storytelling from '../Assets/storytelling.png'
import catalog from '../Assets/catalog.png'
import galleryss1 from '../Assets/galleryss1.png'
import galleryss2 from '../Assets/galleryss2.png'
import galleryss3 from '../Assets/galleryss3.png'
import galleryres1 from '../Assets/galleryres1.png'
import galleryres2 from '../Assets/galleryres2.png'
import galleryres3 from '../Assets/galleryres3.png'
import HELLO from '../Assets/HELLO.png'
import sshello from '../Assets/sshello.png'
import helloss1 from '../Assets/hello_ss1.png'
import helloss2 from '../Assets/hello_ss2.png'
import helloss3 from '../Assets/hello_ss3.png'
import helloss4 from '../Assets/hello_ss4.png'
import hellores1 from '../Assets/hellores1.png'
import hellores2 from '../Assets/hellores2.png'
import hellores3 from '../Assets/hellores3.png'
import carti from '../Assets/CartiCommerce.png'
import ecomres1 from '../Assets/ecomres1.png'
import ecomres2 from '../Assets/ecomres2.png'
import ecomres3 from '../Assets/ecomres3.png'
import ecoss1 from '../Assets/ecoss1.png'
import ecoss2 from '../Assets/ecoss2.png'
import ecoss3 from '../Assets/ecoss3.png'
import ecoss4 from '../Assets/ecoss4.png'
import fancy from '../Assets/fancy.png'
import map from '../Assets/windows_map.png'
import tatto from '../Assets/tatto.png'
import client from '../Assets/client.png'
import deseigner from '../Assets/3d.png'
import crypto from '../Assets/crypto.png'
import netflix from '../Assets/netflix.png'
export const projects_data = [

     {
          title: 'youtube',
          sub_title: "windows",
          description: "fully functional youtube clone",
          description_project: 'This project is a cloned version of YouTube, leveraging the power and functionality of an API i discovered on RapidAPI. With this integration, i have successfully replicated the core features of YouTube, offering users a familiar and seamless video-sharing experience. ',
          url: '/projects/youtube',
          image: youtube,
          color: '#fff',
          accent: '#ff0000',
          date: '4/10/2023',
          langs: ['CSS', 'REACT', 'FIREBASE'],
          type: 'API',
          apiLink: 'https://rapidapi.com/ytdlfree/api/youtube-v3-alternative',
          first_ss: ytmainss,
          pages: [
               {
                    page_ss: ytss1,
                    page_description: {
                         heading: 'channels',
                         body: "You can search for channels and view its content such as newest , oldest and popular uploads.",
                         pageColor: '#0c0c0c',
                         pageTextColor: '#fff',
                    },
               },
               {
                    page_ss: ytss2,
                    page_description: {
                         heading: 'watch section',
                         body: "So pretty much this page talks about itself, you basically click on a video and watch it , it also has comment section with a lazy loading and suggested content which related to the video you're watching! (also you can download certain video when you click in the download button below the video)",
                         pageColor: '#ffffff',
                    },
               },
               {
                    page_ss: ytss3,
                    page_description: {
                         heading: 'search section',
                         body: 'You can type anything in the search bar and search for videos , playlists , channels and alot more. Also you can filter your search input by upload date , type , duaration , features or sort by.',
                         pageColor: '#0c0c0c',
                         pageTextColor: '#fff',
                    },
               },
               {
                    page_ss: ytss4,
                    page_description: {
                         heading: 'playlist section',
                         body: 'This section is exactly the same as the "watch section", the only main difference is the box at the right which is the playlist box , you can shuffle your playlist and move to next or previous videos with by clicking on the arrows , you can also added the list to your "saved playlist" section.',
                         pageColor: '#ffffff',
                    },
               },
               {
                    page_ss: ytss5,
                    page_description: {
                         heading: 'watch later',
                         body: "You can added the videos you like to watch later so you don't miss the videos you like!",
                         pageColor: '#0c0c0c',
                         pageTextColor: '#fff',
                    },
               },
          ],
          responsive_page: [
               {
                    img: ytres1,
                    bgColor: '#0c0c0c',
               },
               {
                    img: ytres2,
                    bgColor: '#fff',
               },
               {
                    img: ytres3,
                    bgColor: '#ff0000',
               },
          ],
     },
     {
          title: 'GoogleMap',
          sub_title: "windows",
          description: "Google maps application",
          url: '',
          image: map,
          color: '#fff',
          accent: '#196bff',
          langs: [],
          type: 'application',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ],
     },
     {
          title: 'whatsapp',
          sub_title: "windows",
          description: "fully functional whatsapp clone",
          description_project: 'This project is a redesigned version of WhatsApp implemented using ReactJS. With a focus on modernizing the user interface and incorporating real-time messaging capabilities with Firebase, it also offers an enhanced and seamless communication experience for users.',
          url: '',
          image: whatsapp,
          color: '#000',
          accent: '#0b5953',
          date: '4/30/2023',
          langs: ['CSS', 'REACT', 'FIREBASE'],
          type: 'application',
          first_ss: wtmainss,
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ],
          responsive_page: [
               {
                    img: wtres1,
                    bgColor: '#121b22',
               },
               {
                    img: wtres2,
                    bgColor: '#0b5953',
               },
               {
                    img: wtres3,
                    bgColor: '#ffffff',
               },
          ],
     },
     {
          title: 'Crypto',
          sub_title: null,
          description: "Crypto currency detection with external API from rapid api",
          url: '',
          image: crypto,
          color: '#fff',
          accent : '#ccf381',
          langs: [],
          type: 'API',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'Portfolio',
          sub_title: null,
          description: "Portfolio template (insipred)",
          description_project: "This project is a personal portfolio website that draws inspiration from the elegant and visually stunning design of Wokine https://www.wokine.com/ , with a focus on showcasing my skills, projects, and providing a seamless contact experience, it aims to captivate visitors and leave a lasting impression.  \n\nNote: it's not my alternative portfolio or any kind , just a practice for myself!",
          url: 'https://mode-23.github.io/port/',
          github: 'https://github.com/mode-23/port',
          image: HELLO,
          color: '#000',
          accent: '#ff5851',
          langs: ['HTML', 'CSS', 'JS'],
          type: 'landing',
          date: '6/18/2022',
          first_ss: helloss1,
          pages: [
               {
                    page_ss: helloss3,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#f2f2f2',
                    },
               },
               {
                    page_ss: sshello,
                    page_description: {
                         heading: 'details',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageTextColor: '#fff',
                    },
               },
               {
                    page_ss: helloss2,
                    page_description: {
                         heading: 'projects section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#f2f2f2'
                    },
               },
               {
                    page_ss: helloss4,
                    page_description: {
                         heading: 'menu',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageTextColor: '#fff',
                    },
               },
          ],
          responsive_page: [
               {
                    img: hellores1,
                    bgColor: '#f2f2f2',
               },
               {
                    img: hellores3,
                    bgColor: '#1c1b20',
               },
               {
                    img: hellores2,
                    bgColor: '#6375cb',
               },
          ],
     },
     {
          title: 'windows',
          sub_title: null,
          description: "windows 10 redesign",
          description_project : "This project is a Windows 10 redesign, implemented using the ReactJS and incorporating Firebase Authentication for secure login functionality. With a focus on modern design, enhanced user experience, and robust authentication.",
          url: '',
          image: windows,
          first_ss: winmainss,
          date: '4/14/2023',
          color: '#fff',
          accent: '#693920',
          langs: ['CSS', 'REACT', 'FIREBASE'],
          type: 'application',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ],
          responsive_page: [
               {
                    img: reswin1,
                    bgColor: '#bda591',
               },
               {
                    img: reswin2,
                    bgColor: '#693920',
               },
               {
                    img: reswin3,
                    bgColor: '#452b46',
               },
          ],
     },

     {
          title: 'gmail',
          sub_title: "windows",
          description: "fully functional gmail clone",
          url: '',
          image: gmail,
          first_ss: gmailss1,
          date:'7/3/2023',
          color: '#000',
          accent: '#c8e2f1',
          langs: ['CSS', 'REACT', 'FIREBASE'],
          type: 'application',
          pages: [
               {
                    page_ss: gmailss1,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#eaf1fb',
                    },
               },
               {
                    page_ss: gmailss2,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
               {
                    page_ss: gmailss3,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#eaf1fb',
                    },
               },
          ],
          responsive_page: [
               {
                    img: gmailres1,
                    bgColor: '#eaf1fb',
               },
               {
                    img: gmailres2,
                    bgColor: '#cee7f3',
               },
               {
                    img: gmailres3,
                    bgColor: '#c8e2f1',
               },
          ],
     },
     {
          title: 'office',
          sub_title: "windows",
          description: "fully functional office clone",
          url: '',
          image: office,
          first_ss: offss2,
          color: '#000',
          accent: '#2281f5',
          langs: ['CSS', 'REACT', 'FIREBASE'],
          type: 'application',
          pages: [
               {
                    page_ss: offss1,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#fff',
                    },
               },
               {
                    page_ss: offss2,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#2281f5',
                         pageTextColor: '#fff',
                    },
               },
               {
                    page_ss: offss3,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#fff',
                    },
               },
          ],
          responsive_page: [
               {
                    img: resoff1,
                    bgColor: '#f9fbfd',
               },
               {
                    img: resoff2,
                    bgColor: '#2281f5',
               },
               {
                    img: resoff3,
                    bgColor: '#f1f3f4',
               },
          ],
     },
     {
          title: 'Illustrations',
          sub_title: null,
          description: "A landing page for 3D Illustrations company",
          url: '',
          image: deseigner,
          color: '#fff',
          accent: '#ffc830',
          langs: [],
          type: 'landing',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'netflix',
          sub_title: null,
          description: "Netflix clone",
          url: '',
          image: netflix,
          color: '#fff',
          accent: '#e40b15',
          langs: [],
          type: 'clone',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'catalog',
          sub_title: null,
          description: "E-commerce store (front)",
          description_project: 'This project is a frontend e-commerce gallery where users can browse and add items to a shopping cart. It showcases my progress as a developer and demonstrates my ability to create an intuitive user interface. \n\nDespite being one of my very first projects, it reflects my dedication and improvement. The gallery features visually appealing product displays and provides users with the ability to add and remove items in their cart.',
          url: 'https://mode-23.github.io/gallery/products',
          image: catalog,
          first_ss: catalog,
          date: '4/21/2022',
          color: '#000',
          accent: '#f8af33',
          langs: ['HTML', 'CSS', 'JS'],
          type: 'E-commerce',
          pages: [
               {
                    page_ss: galleryss1,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
               {
                    page_ss: galleryss2,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#fdfdfd',
                    },
               },
               {
                    page_ss: galleryss3,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ],
          responsive_page: [
               {
                    img: galleryres1,
                    bgColor: '#191919',
               },
               {
                    img: galleryres2,
                    bgColor: '#f8af33',
               },
               {
                    img: galleryres3,
                    bgColor: '#ffffff',
               },
          ],
     },
     {
          title: 'weather',
          sub_title: "windows",
          description: "weather app with external API",
          url: '',
          image: weather,
          color: '#fff',
          accent : '#003e5f',
          langs: [],
          type: 'API',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'E-commerce',
          sub_title: null,
          description: "E-commerce landing page",
          description_project: "This project is an e-commerce website that offers a seamless and user-friendly online shopping experience. With a focus on modern design, intuitive navigation and smooth functionality, it aims to provide customers with a visually appealing platform to add products in the cart , increase number of products and remove them.",
          url: 'https://mode-23.github.io/E-Commerce/',
          github: 'https://github.com/mode-23/E-Commerce',
          image: carti,
          date: '6/25/2022',
          color: '#fff',
          accent : '#7a090a',
          langs: ['HTML', 'CSS', 'JS'],
          type: 'E-commerce',
          first_ss: ecoss1,
          pages: [
               {
                    page_ss: ecoss2,
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageTextColor: '#fff',
                    },
               },
               {
                    page_ss: ecoss3,
                    page_description: {
                         heading: 'projects section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageColor: '#fff'
                    },
               },
               {
                    page_ss: ecoss4,
                    page_description: {
                         heading: 'menu',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                         pageTextColor: '#fff',
                    },
               },
          ],
          responsive_page: [
               {
                    img: ecomres1,
                    bgColor: '#0c0c0c',
               },
               {
                    img: ecomres2,
                    bgColor: '#a30c0d',
               },
               {
                    img: ecomres3,
                    bgColor: '#ffffff',
               },
          ],
     },

     {
          title: 'tatto',
          sub_title: null,
          description: "a tatto deseigner website",
          url: '',
          image: tatto,
          color: '#fff',
          accent: '#f01763',
          langs: [],
          type: 'landing',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'storytelling',
          sub_title: null,
          description: "story telling app",
          url: '',
          image: storytelling,
          color: '#000',
          accent: '#b0b0ae',
          langs: [],
          type: 'application',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
     {
          title: 'Dashboard',
          sub_title: null,
          description: "Deseigned a dashboard for a real life client",
          url: '',
          image: client,
          color: '#000',
          accent: '#333333',
          langs: [],
          type: 'landing',
          pages: [
               {
                    page_ss: '',
                    page_description: {
                         heading: 'about section',
                         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id',
                    },
               },
          ]
     },
]