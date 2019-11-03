export const likeGirl = (id: any) => {
    const rating = JSON.parse((localStorage.getItem('rating') || null) as any) || {};
    rating[id] = rating[id] ? rating[id] + 1 : 1;
    localStorage.setItem('rating', JSON.stringify(rating));
    return {
        type: 'LIKE_GIRL',
        id,
    };
}

export const VisibilityFilters = {
  LIKE_GIRL: 'LIKE_GIRL',
};