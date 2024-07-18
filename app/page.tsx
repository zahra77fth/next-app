import Link from 'next/link'

function Home() {
    console.log('hi')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            HI
            <p>
                <Link href="/about">About me</Link>
            </p>
        </main>
    );
}

export default Home