import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Hello Next</h1>
      <Link href={'/posts'}>
        <button>Posts</button>
      </Link><br/><br/>
      <Image
        src={'/images/Sample.png'}
        alt="sample"
        height={200}
        width={200}
      />
    </>
  );
}
