// NOTE: You can update these properties if your assignment JSON uses different keys (e.g., 'imageUrl' vs 'image')

export type Cuisine = string; // e.g., 'Italian', 'Japanese', 'Mexican'

export interface Food {
  id: string;
  name: string;
  cuisine: Cuisine;
  calories: number;
  imageUrl: string;
}
