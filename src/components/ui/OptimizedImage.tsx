import { useState, type ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

/**
 * Responsive image component with native lazy loading,
 * explicit dimensions (prevents CLS), and proper decoding.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  ...rest
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      {...rest}
    />
  );
}
