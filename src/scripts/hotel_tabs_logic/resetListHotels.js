export function resetListHotels() {
    document.dispatchEvent(new CustomEvent('prefer-region', { detail: { regionName: '*' } }));
}