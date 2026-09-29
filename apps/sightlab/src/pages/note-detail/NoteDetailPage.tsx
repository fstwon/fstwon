import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NoteArticle } from './components/NoteArticle';
import { NoteNotFoundError } from './model/mockNoteDetail';
import { calculateReadingProgress, extractTableOfContents } from './model/noteDetail';
import { useNoteDetailQuery } from './model/useNoteDetailQuery';
import { CategoryBadge } from '@/entities/category/ui/CategoryBadge';
import { NoteCard } from '@/entities/note/ui/NoteCard';
import { TagBadge } from '@/entities/tag/ui/TagBadge';
import { Button } from '@/shared/ui/Button/Button';
import './NoteDetailPage.scss';

function NoteDetailSkeleton({ dimmed = false }: { dimmed?: boolean }) {
	return <div className={`sl-note-detail__skeleton${dimmed ? ' is-dimmed' : ''}`} aria-hidden="true">
		<span className="short" /><span className="title" /><span className="meta" /><span className="medium" />
		<span /><span /><span /><span className="medium" /><span /><span className="long" />
	</div>;
}

function TableOfContents({ items, activeId, mobile = false, open = true, onToggle, onSelect }: {
	items: ReturnType<typeof extractTableOfContents>; activeId: string; mobile?: boolean; open?: boolean; onToggle?: () => void; onSelect?: (id: string) => void;
}) {
	return <nav className={`sl-note-toc${mobile ? ' sl-note-toc--mobile' : ''}`} aria-label="목차">
		{mobile ? <button type="button" className="sl-note-toc__trigger" aria-expanded={open} onClick={onToggle}>Table of contents <span>⌄</span></button> : <strong>Table of contents</strong>}
		{open ? <div className="sl-note-toc__items">{items.map((item) => <a key={item.id} className={`${item.level === 3 ? 'is-child ' : ''}${activeId === item.id ? 'is-active' : ''}`} href={`#${item.id}`} onClick={() => onSelect?.(item.id)}>{item.text}</a>)}</div> : null}
	</nav>;
}

function StateOverlay({ kind, retrying, onRetry, onBack }: { kind: 'error' | 'not-found'; retrying?: boolean; onRetry?: () => void; onBack?: () => void }) {
	const notFound = kind === 'not-found';
	return <div className="sl-note-detail__state" role={notFound ? 'status' : 'alert'}>
		<div className="sl-note-detail__state-symbol" aria-hidden="true">{notFound ? '?' : '!'}</div>
		<h1>{notFound ? 'Note를 찾을 수 없습니다.' : '글을 불러오지 못했습니다.'}</h1>
		<p>{notFound ? '요청한 Note가 삭제되었거나 주소가 변경되었을 수 있습니다.' : '잠시 후 다시 시도해주세요.'}</p>
		<div className="sl-note-detail__state-actions">
			{notFound ? <Link className="sl-note-detail__return" to="/notes">돌아가기</Link> : <>
				<Button disabled={retrying} onClick={onRetry}>{retrying ? '다시 시도 중' : '다시 시도'}</Button>
				<Button variant="secondary" onClick={onBack}>뒤로가기</Button>
			</>}
		</div>
	</div>;
}

export function NoteDetailPage() {
	const { slug = '' } = useParams();
	const navigate = useNavigate();
	const query = useNoteDetailQuery(slug);
	const articleRef = useRef<HTMLDivElement>(null);
	const tocRef = useRef<HTMLDivElement>(null);
	const [activeId, setActiveId] = useState('');
	const [progress, setProgress] = useState(0);
	const [mobileTocOpen, setMobileTocOpen] = useState(false);
	const [showToToc, setShowToToc] = useState(false);
	const toc = useMemo(() => query.data ? extractTableOfContents(query.data.note.content) : [], [query.data]);

	useEffect(() => {
		if (!query.data) return;
		const headings = toc.map((item) => document.getElementById(item.id)).filter((item): item is HTMLElement => Boolean(item));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible[0]) setActiveId(visible[0].target.id);
		}, { rootMargin: '-96px 0px -65% 0px' });
		headings.forEach((heading) => observer.observe(heading));
		return () => observer.disconnect();
	}, [query.data, toc]);

	useEffect(() => {
		if (!query.data) return;
		const update = () => {
			const article = articleRef.current;
			if (!article) return;
			const rect = article.getBoundingClientRect();
			setProgress(calculateReadingProgress({ scrollY: window.scrollY, articleTop: rect.top + window.scrollY, articleHeight: rect.height, viewportHeight: window.innerHeight }));
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
	}, [query.data]);

	useEffect(() => {
		const target = tocRef.current;
		if (!target) return;
		const observer = new IntersectionObserver(([entry]) => setShowToToc(!entry.isIntersecting && entry.boundingClientRect.top < 0));
		observer.observe(target);
		return () => observer.disconnect();
	}, [query.data]);

	if (query.isPending) return <main className="sl-note-detail" aria-busy="true"><NoteDetailSkeleton /></main>;
	if (query.isError) {
		const notFound = query.error instanceof NoteNotFoundError;
		return <main className="sl-note-detail" aria-busy="false"><div className="sl-note-detail__state-stage"><NoteDetailSkeleton dimmed /><StateOverlay kind={notFound ? 'not-found' : 'error'} retrying={query.isFetching} onRetry={() => void query.refetch()} onBack={() => navigate(-1)} /></div></main>;
	}

	const { note, relatedNotes } = query.data;
	const formatDate = note.publishedAt.replaceAll('-', '.');

	return <main className="sl-note-detail" aria-busy="false">
		<div className="sl-reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
		<div className="sl-note-detail__layout">
			<div className="sl-note-detail__main">
				<nav className="sl-note-detail__breadcrumb" aria-label="Breadcrumb"><Link to="/notes">Notes</Link><span>/</span><span>{note.category.name}</span><span>/</span><span aria-current="page">{note.title}</span></nav>
				<header className="sl-note-detail__header">
					<h1>{note.title}</h1>
					<p>{formatDate} · {note.readingTime} min</p>
					<div className="sl-note-detail__badges"><CategoryBadge category={note.category} variant="brand" />{note.tags.map((tag) => <TagBadge key={tag.slug} tag={tag} variant="brand" />)}</div>
				</header>
				<div ref={tocRef} className="sl-note-detail__mobile-toc"><TableOfContents items={toc} activeId={activeId} mobile open={mobileTocOpen} onToggle={() => setMobileTocOpen((value) => !value)} onSelect={() => setMobileTocOpen(false)} /></div>
				<div ref={articleRef}><NoteArticle markdown={note.content} /></div>
				{note.references.length ? <section className="sl-note-detail__references"><h2>References</h2>{note.references.map((reference) => <a key={reference.url} href={reference.url} target="_blank" rel="noreferrer noopener"><span>{reference.source ?? 'Source'}</span><strong>{reference.title}</strong><span aria-hidden="true">↗</span></a>)}</section> : null}
			</div>
			<aside className="sl-note-detail__aside"><TableOfContents items={toc} activeId={activeId} open /></aside>
		</div>
		{relatedNotes.length ? <section className="sl-note-detail__related"><h2>Related Notes</h2><div>{relatedNotes.slice(0, 2).map((related) => <NoteCard key={related.slug} note={related} />)}</div></section> : null}
		{showToToc ? <button className="sl-note-detail__to-toc" type="button" onClick={() => { setMobileTocOpen(true); tocRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' }); }}>To TOC ↑</button> : null}
	</main>;
}
