export function getTimeAgo(timestamp) {
  const units = [
    { name: "Year", seconds: 31536000 },
    { name: "Month", seconds: 2592000 },
    { name: "Week", seconds: 604800 },
    { name: "Day", seconds: 86400 },
    { name: "Hour", seconds: 3600 },
    { name: "Minute", seconds: 60 },
    { name: "Second", seconds: 1 },
  ];

  const now = new Date();
  const time = new Date(timestamp);
  const elapsedSeconds = Math.floor((now - time) / 1000);

  for (const unit of units) {
    const count = Math.floor(elapsedSeconds / unit.seconds);
    if (count > 0) {
      return `${count} ${unit.name}${count > 1 ? "s" : ""} Ago`;
    }
  }

  return "Just Now";
}
