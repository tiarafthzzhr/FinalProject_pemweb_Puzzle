const API_URL = import.meta.env.VITE_API_URL;
const GAME_SLUG = import.meta.env.VITE_GAME_SLUG;

export const incrementPlayCount = async () => {
  try {
    const response = await fetch(`${API_URL}/api/games/${GAME_SLUG}/play-count`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error('Error incrementing play count:', error);
    throw error;
  }
};
