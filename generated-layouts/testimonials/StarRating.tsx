import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 16,
  fillColor = "fill-yellow-400",
  strokeColor = "text-yellow-400",
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < Math.floor(rating);
        // Simple full stars for now, could add half stars logic if needed
        return (
          <Star
            key={index}
            size={size}
            className={`${isFilled ? `${fillColor} ${strokeColor}` : "fill-gray-200 text-gray-200"}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;