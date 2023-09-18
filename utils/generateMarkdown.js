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

// Function to generate a note on what license the repository or user use.
function generateLicenseNotice(license) {
  const licenseNotices = {
    MIT: "This project is licensed under the MIT License.",
    "Apache-2.0": "This project is licensed under the Apache License 2.0.",
    "GNU GPL v3": "This project is licensed under the GNU GPLv3.",
  };

  const licenseNotice = licenseNotices[license] || "";

  return licenseNotice;
}

// Function to generate the entire README content
function generateMarkdown(data, tableOfContents) {
  const licenseBadge = generateLicenseBadge(data.license);
  const licenseNotice = generateLicenseNotice(data.license);

  return `


# ${data.projectTitle}

## Licensing
${licenseBadge}

${tableOfContents}

## Description
${data.projectDescription}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseNotice}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [GitHub](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
