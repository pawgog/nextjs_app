import Link from 'next/link'

export default function BatmanBox({ movie }) {
    const batmanID = movie.show.id;
    
    return (
        <div className="homepage-block">
            <img src={ movie.show.image.medium } alt={ movie.show.name } width="42px"></img>
            <Link href={{ pathname: '/detail', query: { id: batmanID }}}>
                <a>{ movie.show.name }</a>
            </Link>
        </div>
    )
};