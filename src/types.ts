export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    population: number;
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
}

export const SortOrder = {
    NameAsc: 'name_asc',
    NameDesc: 'name_desc',
    PopAsc: 'pop_asc',
    PopDesc: 'pop_desc',
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
