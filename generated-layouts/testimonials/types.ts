export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
  avatarUrl?: string; // Optional for featured views
}

export interface ReviewProps {
  reviews: Review[];
  className?: string;
}