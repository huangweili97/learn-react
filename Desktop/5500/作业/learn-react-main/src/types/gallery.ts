interface Scientist {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovery: string;
}

export interface GalleryProps {
    scientist: Scientist;
    size?: number;
}