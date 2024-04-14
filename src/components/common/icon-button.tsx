import { IconButtonProps } from "../../types/icon-button";

export default function IconButton({ src, imageClass }: IconButtonProps) {
    return (
        <button className="flex items-center justify-center w-12 h-12 border border-opacity-50 rounded-full border-secondary">
            <img className={imageClass} src={src} />
        </button>
    )
}
