// Function to generate the license badge
function generateLicenseBadge(license) {
  const licenseBadges = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache-2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GNU GPL v3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
  };

  const badgeURL = licenseBadges[license] || "";

  if (badgeURL) {
    return `![${license} License](${badgeURL})\n`;
  }

  return "";
}
