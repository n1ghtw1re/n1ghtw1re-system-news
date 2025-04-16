export interface NewsItem {
  id: number;
  date: string;
  content: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '2024-04-16 21:45',
    content: 'Added system news ticker to home page.',
  },
  {
    id: 2,
    date: '2024-04-16 21:45',
    content: 'New Article: Is 4Chan Doomed?',
    link: 'https://n1ghtw1re.neocities.org/articles/04-2025/4chan_hack',
  },
  {
    id: 3,
    date: '2024-04-13 21:45',
    content: 'New Book: Into Ideaspace is available',
    link: 'https://n1ghtw1re.neocities.org/books/into_ideaspace/into_ideaspace',
  },
  {
    id: 4,
    date: '2025-04-12 18:30',
    content: 'Full N1ghtw1re Collective web redesign is complete.',
  },
  {
    id: 5,
    date: '2024-12-18 23:15',
    content: 'N1ghtw1re is online. Prepare for first transmission.',
  },
];