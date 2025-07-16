import {create} from "zustand"

type PortfolioState = {
    selectedCategory: string;
    searchQuery: string;
    setCategory: (category: string) => void;
    setSearch: (query: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    selectedCategory: 'All',
    searchQuery: '',
    setCategory: (category) => set({selectedCategory: category}),
    setSearch: (query) => set({searchQuery: query}),
}))