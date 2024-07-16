export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondPath = (now.getTime() - date.getTime()) / 1000;

  if (secondPath < 60) {
    return `${Math.floor(secondPath)}s ago`;
  }

  if (secondPath < 3600) {
    return `${Math.floor(secondPath / 60)}m ago`;
  }

  if (secondPath <= 86400) {
    return `${Math.floor(secondPath / 3600)}h ago`;
  }

  if (secondPath > 86400) {
    const day = Math.floor(secondPath / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
