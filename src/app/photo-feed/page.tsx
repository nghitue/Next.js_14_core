import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";


export default function PhotoFeed() {
    return (
        <>
            <h2>Những quốc gia có cảnh sắc đẹp như thiên đường</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
                {
                    wonders.map(({ id, src, name }) => {
                        return (
                            <Link key={id} href={`/photo-feed/${id}`}><figure className="img-fit"><Image src={src} alt={name} /></figure><figcaption>{name}</figcaption></Link>
                        )
                    })
                }
            </div>
        </>
    )
}