import { IconButtonProps } from "../../types/icon-button";

export default function IconButton({ src, imageClass, className }: IconButtonProps) {
    return (
        <button className={`${className} flex items-center bg-white justify-center w-12 h-12 border border-opacity-50 rounded-full border-secondary`}>
            <img className={imageClass} src={src} />
        </button>
    )
}
