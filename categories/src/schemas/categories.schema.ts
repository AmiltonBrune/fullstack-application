import * as mongoose from 'mongoose';
import { ICategory } from '../interfaces/categories.interface';

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
}

export const CategorySchema = new mongoose.Schema(
  {
    title: String,
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

CategorySchema.pre('validate', function (next) {
  const self = this as ICategory;

  if (this.isModified('user_id') && self.created_at) {
    this.invalidate('user_id', 'The field value can not be updated');
  }
  next();
});
