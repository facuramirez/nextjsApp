import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/users">
                <a>User</a>
            </Link>
            <Link href="/posts">
                <a>Post</a>
            </Link>
            {/* <Link href="/posts/[id]" as={`/posts/${5}`}>
                <a>Post</a>
            </Link> */}

            <style jsx>
                {`
                    nav {
                        padding-top: 10px;
                    }
                    a {
                        padding: 0 10px;
                    }
                `}
            </style>
        </nav>
    )
}