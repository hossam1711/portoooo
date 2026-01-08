export type ColorType = 'identity' | 'services' | 'goals' | 'principles';

export interface TravelCardProps {
  icon: string;
  title: string;
  price: string;
  color: ColorType;
  videoUrl: string;
  category: string;
  description: string;
}

export const cards: TravelCardProps[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Who we are',
    price: '',
    color: 'identity',
    videoUrl: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
    category: 'Our Identity',
    description: 'Learn about our company background and what makes us unique.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H16L14 15L10 9L8 12H2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30065C17.4967 4.10493 17.1329 4.00254 16.76 4.00254H7.24C6.8671 4.00254 6.50326 4.10493 6.18704 4.30065C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'What we do',
    price: '',
    color: 'services',
    videoUrl: 'https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611',
    category: 'Our Services',
    description: 'Discover the services and solutions we offer to our clients.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Mission & Vision',
    price: '',
    color: 'goals',
    videoUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
    category: 'Our Goals',
    description: 'Our mission to innovate and our vision for the future.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0848 3.41708C18.4468 3.14052 17.7925 2.9998 17.13 2.9998C16.4675 2.9998 15.8132 3.14052 15.1752 3.41708C14.5372 3.69364 13.9308 4.099 13.42 4.61L12 6L10.58 4.61C9.56429 3.59429 8.18743 3.02403 6.75 3.02403C5.31257 3.02403 3.93571 3.59429 2.92 4.61C1.90429 5.62571 1.33403 7.00257 1.33403 8.44C1.33403 9.87743 1.90429 11.2543 2.92 12.27L12 21.19L21.08 12.27C22.0957 11.2543 22.666 9.87743 22.666 8.44C22.666 7.00257 22.0957 5.62571 21.08 4.61H20.84Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Values',
    price: '',
    color: 'principles',
    videoUrl: 'https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761',
    category: 'Our Principles',
    description: 'The core values that guide our company and decisions.'
  }
];