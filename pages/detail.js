import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BatmanDetail() {
  const router = useRouter();
  const batmanID = router.query.id;

  return (
    <div className='detail-block'>
      <Link href='/'>
        <a>BACK</a>
      </Link>
      <p>Batman ID: { batmanID }</p>
    </div>
  )
};