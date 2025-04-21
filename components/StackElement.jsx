import Image from "next/image"


function StackElement({ src, alt}) {
    return (
        <div className="stack__element">
            <Image 
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain" />
        </div>
    )
}

export default StackElement