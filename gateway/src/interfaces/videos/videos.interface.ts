import { Document } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description: string;
  url: string;
  categories: string[];
  user_id: string;
  image_id: string;
  created_at: number;
}
