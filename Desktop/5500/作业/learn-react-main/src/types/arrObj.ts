export interface ItemListProps { 
    artworks: Array<{id: number, title: string, seen: boolean}>, 
    onToggle:  (artWorkId: number, nextSeen: boolean) => void 
}