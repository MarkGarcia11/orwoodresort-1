import Image from "next/image";
import type { PhotoAsset } from "@/content/photos";

type PhotoProps = {
  photo: PhotoAsset;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Gentle zoom when the parent `.group` is hovered. */
  zoom?: boolean;
  objectPosition?: string;
};

/**
 * Responsive, optimized image that fills its positioned parent.
 * The parent must be `relative` and have an explicit aspect ratio or height.
 */
export function Photo({
  photo,
  sizes = "100vw",
  priority = false,
  className = "",
  zoom = false,
  objectPosition = "center",
}: PhotoProps) {
  const zoomClasses = zoom
    ? "transition-transform duration-[1500ms] ease-[var(--ease-orwood)] group-hover:scale-[1.045]"
    : "";

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${zoomClasses} ${className}`}
      style={{ objectPosition }}
    />
  );
}
