import { Schema } from 'mongoose';

export const ImageSchema = new Schema({
  filename: String,
  content: Buffer,
  filePath: String,
});
