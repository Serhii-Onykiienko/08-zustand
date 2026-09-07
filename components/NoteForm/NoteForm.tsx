'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createNote } from '@/lib/api';
import type { CreateNoteParams } from '@/lib/api';
import { useRouter } from 'next/navigation';
import css from './NoteForm.module.css';
import { useNoteStore } from '@/lib/store/noteStore';
import type { NoteTag } from '@/types/note';

export default function NoteForm() {
  const queryClient = useQueryClient();

  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteStore();

  const createMutation = useMutation({
    mutationFn: createNote,

    onSuccess: () => {
      clearDraft();

      queryClient.invalidateQueries({ queryKey: ['notes'] });

      router.push('/notes/filter/all');
    },
  });

  const formAction = (formData: FormData) => {
    const values = Object.fromEntries(formData) as unknown as CreateNoteParams;

    createMutation.mutate(values);
  };

  return (
    <>
      <form action={formAction} className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={css.input}
            placeholder="Add title"
            defaultValue={draft.title}
            onChange={event =>
              setDraft({ ...draft, title: event.target.value })
            }
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="content">Content </label>
          <textarea
            name="content"
            id="content"
            className={css.textarea}
            placeholder="Add content"
            defaultValue={draft.content}
            onChange={event =>
              setDraft({ ...draft, content: event.target.value })
            }
          ></textarea>
        </div>
        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <select
            name="tag"
            id="tag"
            className={css.select}
            defaultValue={draft.tag}
            onChange={event =>
              setDraft({
                ...draft,
                tag: event.target.value as NoteTag,
              })
            }
          >
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <div className={css.actions}>
          <button
            type="button"
            onClick={() => router.back()}
            className={css.cancelButton}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={createMutation.isPending}
            className={css.submitButton}
          >
            Create note
          </button>
        </div>
      </form>
    </>
  );
}
