import axios from 'axios';

import type { Note, NoteTag } from '../types/note';

// ? Отримання нотаток

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes({
  page,
  perPage,
  search,
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response = await api.get<FetchNotesResponse>('/notes', {
    params: { page, perPage, search, tag },
  });

  return response.data;
}

// ? Отримання однієї нотатки

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<Note>(`/notes/${id}`);

  return response.data;
}

// ? Створення нотатки

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function createNote({
  title,
  content,
  tag,
}: CreateNoteParams): Promise<Note> {
  const response = await api.post<Note>('/notes', {
    title,
    content,
    tag,
  });

  return response.data;
}

// ? Видалення нотатки

export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<Note>(`/notes/${id}`);

  return response.data;
}
