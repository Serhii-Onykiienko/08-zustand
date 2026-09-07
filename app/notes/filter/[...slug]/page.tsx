import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { NoteTag } from '@/types/note';
import type { Metadata } from 'next';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const filter = slug[0];

  const title =
    filter === 'all' ? 'All notes | NoteHub' : `${filter} notes | NoteHub`;

  const description =
    filter === 'all'
      ? 'View all notes in NoteHub.'
      : `View notes filtered by ${filter} in NoteHub.`;

  const slugPath = slug.join('/');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://08-zustand-teal-seven.vercel.app/notes/filter/${slugPath}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: description,
        },
      ],
    },
  };
}

export default async function Notes({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : (slug[0] as NoteTag);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', '', 1, tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
