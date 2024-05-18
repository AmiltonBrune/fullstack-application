import * as mongoose from 'mongoose';
import { IVideo } from '../interfaces/videos.interface';

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
}

export const VideoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    url: String,
    categories: {
      type: [String],
    },
    image_id: String,
    user_id: {
      type: String,
      required: [true, 'User can not be empty'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  },
);

VideoSchema.pre('validate', function (next) {
  const self = this as IVideo;

  if (this.isModified('user_id') && self.created_at) {
    this.invalidate('user_id', 'The field value can not be updated');
  }
  next();
});
