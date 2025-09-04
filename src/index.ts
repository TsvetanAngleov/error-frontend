// Error page functionality
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.getElementById(
    "refreshButton"
  ) as HTMLButtonElement;
  const countdownText = document.getElementById(
    "countdownText"
  ) as HTMLSpanElement;

  if (refreshButton && countdownText) {
    let countdown = 3;
    let countdownInterval: any;

    // Start countdown
    const startCountdown = () => {
      refreshButton.classList.add("countdown-active");
      countdownText.textContent = countdown.toString();

      countdownInterval = setInterval(() => {
        countdown--;
        countdownText.textContent = countdown.toString();

        if (countdown <= 0) {
          clearInterval(countdownInterval);
          refreshButton.disabled = false;
          refreshButton.classList.remove("countdown-active");
        }
      }, 1000);
    };

    // Start the countdown immediately
    startCountdown();

    // Add click event listener
    refreshButton.addEventListener("click", () => {
      if (refreshButton.disabled) return;

      // Get portal parameter from URL
      const urlParams = new URLSearchParams(window.location.search);
      const portal = urlParams.get("portal");

      // Determine reload type based on portal
      let reloadType = "g2s-agg.reload"; // default

      if (portal === "Betbg") {
        reloadType = "bbg-agg.reload";
      }
      if (
        portal === "Efbet" ||
        portal === "EfbetSportRadarUAT" ||
        portal === "EfbetSportRadar"
      ) {
        reloadType = "efbt-agg.reload";
      }

      window.parent.postMessage({ type: reloadType }, "*");
    });
  }
});
