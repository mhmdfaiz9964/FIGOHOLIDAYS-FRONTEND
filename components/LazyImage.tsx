import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Shimmer/Loader Layer */}
            {!loaded && !error && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />

            {error && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                    <span>Failed to load image</span>
                </div>
            )}
        </div>
    );
};
