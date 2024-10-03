
import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly name?: string;
  readonly age?: number;
  readonly breed?: string;
}