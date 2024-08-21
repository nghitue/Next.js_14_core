"use client"
import { useRouter } from "next/navigation";

export default function ProductList() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/products");
    }
    return (
        <>
            <h2>Order product</h2>
            <button onClick={handleClick} className="px-4 py-2 bg-pink-100">Place order</button>
        </>
    )
}