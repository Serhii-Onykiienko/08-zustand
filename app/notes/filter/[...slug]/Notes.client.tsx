'use client';

import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';

import css from './NotesPage.module.css';

import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';

import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';
interface NotesClientProps {
  tag?: NoteTag;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', query, page, tag],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: 12,
        search: query,
        tag,
      }),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    setQuery(value);
    setPage(1);
  }, 500);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    handleSearch(value);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchValue} onChange={handleSearchChange} />

        {totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        <button className={css.button} onClick={() => setModal(true)}>
          Create note +
        </button>
      </header>

      {isLoading && <p>Loading notes...</p>}

      {isError && <p>Something went wrong. Please try again.</p>}

      {!isError && notes.length > 0 && <NoteList notes={notes} />}

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <NoteForm onClose={() => setModal(false)} />
        </Modal>
      )}
    </div>
  );
}
