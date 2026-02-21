import { WelcomeItem } from "./welcomeType";
import welcomeImg1 from '../../../public/assets/images/resources/welcome-one-1-1.jpg';
import welcomeImg2 from '../../../public/assets/images/resources/welcome-one-1-2.jpg';
import welcomeImg3 from '../../../public/assets/images/resources/welcome-one-1-3.jpg';

export const welcomeItems: WelcomeItem[] = [
    {
        id: 1,
        img: welcomeImg1,
        iconClass: 'icon-software-development',
        title: 'Software Development',
        link: '/inner/services',

    },
    {
        id: 2,
        img: welcomeImg2,
        iconClass: 'icon-cybersecurity',
        title: 'Cyber security service',
        link: '/inner/services',

    },
    {
        id: 3,
        img: welcomeImg3,
        iconClass: 'icon-data-management',
        title: 'Database Management',
        link: '/inner/services',

    },
];