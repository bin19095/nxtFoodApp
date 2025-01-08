import Link from "next/link";

export default function BlogPage() {
    return(
        <>
        <h1>
            The Blog
        </h1>
        <p>
            <Link href="blog/blogs1"> Blog1</Link>
            <Link href="blog/blogs2"> Blog2</Link>

            </p>
        </>
    )
}
