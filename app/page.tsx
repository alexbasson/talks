import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className='text-lg font-bold'>
        <li>
          <Link href={"/hexagonal-architecture"}>
            Hexagonal Architecture
          </Link>
        </li>
        <li>
          <Link href={"/modular-monoliths"}>
            Modular Monoliths
          </Link>
        </li>
      </ul>
    </main>
  );
}
