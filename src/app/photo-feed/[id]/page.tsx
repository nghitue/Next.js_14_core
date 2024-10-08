import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders"

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
    const photo: any = wondersImages.find((p) => p.id === id)
    return (
        <div>
            <h1>{photo.name}</h1>
            <Image src={photo.src} alt={photo.name} />
            <div className="text">
                <p>{photo.photographer}</p>
                <p>{photo.location}</p>
            </div>
        </div>
    )
}