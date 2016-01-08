if (typeof window.refreshAll === "function") {
  window.setInterval(window.refreshAll, window.refreshDuration || 1000);
}
