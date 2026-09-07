import Link from 'next/link';
import css from './SidebarNotes.module.css';

export default function SidebarNotes() {
  const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link className={css.menuLink} href="/notes/filter/all">
          All notes
        </Link>
      </li>
      {tags.map(item => (
        <li key={item} className={css.menuItem}>
          <Link className={css.menuLink} href={`/notes/filter/${item}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
