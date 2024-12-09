import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Евдокимов Владимир - Капитальный ремонт ТНВД',
  description: "Услуги по капитальному ремонту ТНВД для автомобилей Peugeot, Citroen, Mini, BMW",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Евдокимов Владимир.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Я специализируюсь на капитальном ремонте ТНВД для автомобилей Peugeot, Citroen, Mini, BMW.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Если ваш двигатель троит, глохнет, теряет мощность или выдает ошибки Check Engine, я могу помочь!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Резюме',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Контакты',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Я занимаюсь капитальным ремонтом ТНВД для автомобилей Peugeot, Citroen, Mini, BMW. Опыт работы более 5 лет.`,
  aboutItems: [
    {label: 'Расположение', text: 'Самарская обл., Тольятти, р-н Центральный', Icon: MapIcon},
    {label: 'График работы', text: 'пн-пт; 09:00‑17:00', Icon: CalendarIcon},
    {label: 'Время для связи', text: 'пн-вс; 11:00‑21:00', Icon: FlagIcon},
    {label: 'Категория', text: 'Автосервисы для автомобилей', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Технические навыки',
    skills: [
      {
        name: 'Ремонт ТНВД',
        level: 10,
      },
      {
        name: 'Диагностика двигателей',
        level: 9,
      },
      {
        name: 'Ремонт автомобилей',
        level: 8,
      },
    ],
  },
  {
    name: 'Дополнительные навыки',
    skills: [
      {
        name: 'Фото и видео отчеты',
        level: 7,
      },
      {
        name: 'Гарантийное обслуживание',
        level: 9,
      },
      {
        name: 'Доставка',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ремонт ТНВД для Peugeot',
    description: 'Капитальный ремонт ТНВД для автомобиля Peugeot.',
    url: 'https://example.com',
    image: porfolioImage1,
  },
  {
    title: 'Ремонт ТНВД для Citroen',
    description: 'Капитальный ремонт ТНВД для автомобиля Citroen.',
    url: 'https://example.com',
    image: porfolioImage2,
  },
  {
    title: 'Ремонт ТНВД для Mini',
    description: 'Капитальный ремонт ТНВД для автомобиля Mini.',
    url: 'https://example.com',
    image: porfolioImage3,
  },
  {
    title: 'Ремонт ТНВД для BMW',
    description: 'Капитальный ремонт ТНВД для автомобиля BMW.',
    url: 'https://example.com',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Март 2015',
    location: 'Технический колледж',
    title: 'Специалист по ремонту автомобилей',
    content: <p>Описание вашего опыта в учебном заведении, что вы изучали, какие полезные навыки приобрели и т.д.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Март 2018 - Настоящее время',
    location: 'Автосервис "Мастер"',
    title: 'Старший механик',
    content: (
      <p>
        Описание работы, специальные проекты, значимые достижения, с какими технологиями вы работали и все остальное, что может быть полезно для работодателя.
      </p>
    ),
  },
  {
    date: 'Март 2015 - Февраль 2018',
    location: 'Автосервис "Гараж"',
    title: 'Механик',
    content: (
      <p>
        Описание работы, специальные проекты, значимые достижения, с какими технологиями вы работали и все остальное, что может быть полезно для работодателя.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Иван Иванов',
      text: 'Владимир отлично справился с ремонтом моего ТНВД. Автомобиль работает как новый!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Анна Петрова',
      text: 'Рекомендую Владимира всем, кто столкнулся с проблемами ТНВД. Качественная работа и отличный сервис.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Петр Сидоров',
      text: 'Владимир сделал отличный ремонт моего ТНВД. Автомобиль работает отлично, спасибо!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Свяжитесь со мной.',
  description: 'Здесь вы можете найти информацию о том, как лучше всего связаться со мной.',
  items: [
    {
      type: ContactType.Email,
      text: 'vladimir.evdokimov@example.com',
      href: 'mailto:vladimir.evdokimov@example.com',
    },
    {
      type: ContactType.Location,
      text: 'Самарская обл., Тольятти, р-н Центральный',
      href: 'https://www.google.com/maps/place/Tolyatti,+Samarskaya+oblast,+Russia/@53.5069207,49.4212066,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@vladimir_evdokimov',
      href: 'https://www.instagram.com/vladimir_evdokimov/',
    },
    {
      type: ContactType.Github,
      text: 'vladimir_evdokimov',
      href: 'https://github.com/vladimir_evdokimov',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/vladimir_evdokimov'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/vladimir_evdokimov/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vladimir_evdokimov/'},
];
