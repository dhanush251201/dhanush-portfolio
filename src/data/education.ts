export interface School {
  school: string;
  url?: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  gpa?: string;
  details?: string[]; // coursework, honors
}

export const education: School[] = [
  {
    school: 'University of Pennsylvania',
    url: 'https://www.seas.upenn.edu/',
    degree: 'MSE, Computer and Information Science',
    start: 'Aug 2025',
    end: 'May 2027 (expected)',
    location: 'Philadelphia, PA',
    gpa: '3.53 / 4.0',
    details: [
      'Coursework: Operating Systems, Applied Machine Learning, Big Data Analytics, Theory of Computation, Natural Language Processing',
    ],
  },
  {
    school: 'PSG College of Technology',
    url: 'https://www.psgtech.edu/',
    degree: 'BE, Computer Science and Engineering',
    start: 'Aug 2020',
    end: 'May 2024',
    location: 'Coimbatore, India',
    gpa: '3.93 / 4.0',
  },
];
