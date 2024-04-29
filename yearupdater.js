const cron = require('node-cron');

// This will hold the current year
let currentYear = new Date().getFullYear();

// Function to update the year
function updateYear() {
    currentYear = new Date().getFullYear();
    console.log(`Year updated to ${currentYear}`);
}

// Scheduled task to update the year at midnight on January 1st
cron.schedule('0 0 1 1 *', () => {
    updateYear();
}, {
    scheduled: true,
    timezone: "Your/Timezone"
});

// Manual trigger to update the year
function manualUpdate() {
    updateYear();
}

module.exports = { getCurrentYear: () => currentYear, manualUpdate };
