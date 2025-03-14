export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    // New properties for user profile
    profileImageUrl?: string;
    joinedDate: Date;
    preferences: UserPreferences;
    // New properties to track user activities
    usedRecipes?: string[];
    viewedRecipes?: string[];
    shoppingList?: ShoppingItem[];
    pantryItems?: PantryItem[];
    communityPosts?: CommunityPost[];
}

export interface Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl?: string;
    // New properties for visual recognition and community sharing
    videoUrl?: string;
    sharedBy?: string;
    sharedDate?: Date;
    // New properties for AI assistance and user ratings
    estimatedTime?: number; // in minutes
    difficultyLevel?: 'easy' | 'medium' | 'hard';
    userRating?: number; // average rating
    // New property to link recipe to user
    userId: string;
}

export interface PantryItem {
    id: string;
    name: string;
    quantity: number;
    expirationDate?: Date;
    // New property for smart pantry integration
    category?: string;
    // New property for waste reduction tracking
    addedDate?: Date;
    // New property to link pantry item to user
    userId: string;
}

export interface UserPreferences {
    preferredIngredients: string[];
    dietaryRestrictions: string[];
    shoppingHistory: string[];
    // New properties for personalized experience and AI assistance
    favoriteRecipes?: string[];
    dislikedIngredients?: string[];
    voiceControlEnabled?: boolean;
    // New property for community interaction
    followedUsers?: string[];
}

export interface ShoppingItem {
    id: string;
    name: string;
    quantity: number;
    // New properties for interactive shopping experience
    isPurchased?: boolean;
    purchaseDate?: Date;
    // New property for AI assistance
    suggestedByAI?: boolean;
    // New property to link shopping item to user
    userId: string;
}

export interface WasteReductionLog {
    id: string;
    itemId: string;
    reductionDate: Date;
    quantityReduced: number;
    reason: string;
    // New property for tracking user actions
    userId?: string;
}

export interface CommunityPost {
    id: string;
    userId: string;
    recipeId: string;
    postDate: Date;
    content: string;
    likes: number;
    comments: Comment[];
    // New property for tagging other users
    taggedUsers?: string[];
}

export interface Comment {
    id: string;
    userId: string;
    content: string;
    commentDate: Date;
    // New property for replying to comments
    parentCommentId?: string;
}