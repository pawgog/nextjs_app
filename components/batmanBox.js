import Link from 'next/link';

export default function BatmanBox({ movie }) {
  const batmanID = movie.show.id;

  return (
    <div className="batman-block__content">
      <img src={movie.show.image.medium} alt={movie.show.name}></img>
      <Link href={{ pathname: '/detail', query: { id: batmanID } }}>
        <a>{movie.show.name}</a>
      </Link>
      <div
        className="batman-block__description"
        dangerouslySetInnerHTML={{ __html: movie.show.summary }}
      />
      <a className="batman-block__btn" href={movie.show.url}>
        <span>more...</span>
      </a>
    </div>
  );
}
