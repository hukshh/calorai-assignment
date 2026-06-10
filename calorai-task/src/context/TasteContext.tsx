import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Food } from '../types/food';

interface TasteContextProps {
  likedFoods: Food[];
  dislikedFoods: Food[];
  currentIndex: number;
  likeFood: (food: Food) => void;
  dislikeFood: (food: Food) => void;
  resetTasteProfile: () => void;
}

const TasteContext = createContext<TasteContextProps | undefined>(undefined);

export const TasteProvider = ({ children }: { children: ReactNode }) => {
  const [likedFoods, setLikedFoods] = useState<Food[]>([]);
  const [dislikedFoods, setDislikedFoods] = useState<Food[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const likeFood = (food: Food) => {
    setLikedFoods((prev) => [...prev, food]);
    setCurrentIndex((prev) => prev + 1);
  };

  const dislikeFood = (food: Food) => {
    setDislikedFoods((prev) => [...prev, food]);
    setCurrentIndex((prev) => prev + 1);
  };

  const resetTasteProfile = () => {
    setLikedFoods([]);
    setDislikedFoods([]);
    setCurrentIndex(0);
  };

  return (
    <TasteContext.Provider
      value={{
        likedFoods,
        dislikedFoods,
        currentIndex,
        likeFood,
        dislikeFood,
        resetTasteProfile,
      }}
    >
      {children}
    </TasteContext.Provider>
  );
};

export const useTaste = () => {
  const context = useContext(TasteContext);
  if (!context) {
    throw new Error('useTaste must be used within a TasteProvider');
  }
  return context;
};
