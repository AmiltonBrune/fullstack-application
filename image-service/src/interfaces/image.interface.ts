import { Document } from 'mongoose';

export interface Image extends Document {
  readonly filename: string;
  readonly content: Buffer;
  filePath: string;
}
