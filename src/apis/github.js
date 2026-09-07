const CONTRIBUTIONS_API_URL = 'https://github-contributions-api.jogruber.de/v4';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

function cacheKey(username) {
  return `github_contributions_${username}`;
}

function getCached(username) {
  try {
    const raw = localStorage.getItem(cacheKey(username));
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp < CACHE_TTL) return data;
    return null;
  } catch {
    return null;
  }
}

function setCache(username, data) {
  try {
    localStorage.setItem(
      cacheKey(username),
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch {
    // localStorage unavailable or full — silently ignore
  }
}

function getStaleCache(username) {
  try {
    const raw = localStorage.getItem(cacheKey(username));
    if (!raw) return null;
    return JSON.parse(raw).data;
  } catch {
    return null;
  }
}

// Fetches Github contributions for the past 2 years since thats all we can fit
export async function fetchGitHubContributions(username) {
  const cached = getCached(username);
  if (cached) return cached;

  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;

  try {
    const response = await fetch(`${CONTRIBUTIONS_API_URL}/${username}?y=${currentYear}&y=${lastYear}`);

    if (!response.ok) {
      throw new Error(`Contributions API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    const calendar = data.contributions.toReversed().map((day) => ({
      date: day.date,
      count: day.count,
      level: day.level,
    }));

    setCache(username, { calendar });

    return { calendar };
  } catch (err) {
    const stale = getStaleCache(username);
    if (stale) return stale;
    throw err;
  }
}
