import mongoose, { Schema, Document } from 'mongoose';
import { UserPreferences } from '../types';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    profileImageUrl?: string;
    joinedDate: Date;
    preferences: UserPreferences;
    usedRecipes?: string[];
    viewedRecipes?: string[];
    shoppingList?: string[];
    pantryItems?: string[];
    communityPosts?: string[];
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String },
    joinedDate: { type: Date, default: Date.now },
    preferences: { type: Object, required: true },
    usedRecipes: [{ type: String }],
    viewedRecipes: [{ type: String }],
    shoppingList: [{ type: String }],
    pantryItems: [{ type: String }],
    communityPosts: [{ type: String }]
});

export const User = mongoose.model<IUser>('User', UserSchema);
