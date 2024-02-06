import Link from 'next/link';

export default function Home() {
  return(
  <main>
    <div className='pt-24 pl-64'>
    <h1 className='text-4xl font-bold pb-5'>CPRG 306: Web Development 2 - Assignments</h1>
    <ul className='text-lg'>
      <li><Link href="week-2">Week 2 Assignment</Link></li>
      <li><Link href="week-3">Week 3 Assignment</Link></li>
    </ul>
    </div>
  </main>
  );
}