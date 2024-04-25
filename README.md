# Work Day Scheduler

## Overview

This is a simple calendar application that allows users to create a schedule for a typical working day (9am–5pm). The application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Features

- **Current Day Display**: The current day is displayed at the top of the calendar when the planner is opened.
- **Time Blocks**: Users are presented with time blocks for standard business hours of 9am to 5pm as they scroll down the page.
- **Color-Coded Time Blocks**: Each time block is color-coded to indicate whether it is in the past, present, or future.
- **Event Creation**: Users can click into a time block to enter an event.
- **Event Saving**: The text for each event can be saved by clicking the save button for that time block. The saved events persist even after refreshing the page.
- **Local Storage**: Events are saved in local storage to ensure persistence across page reloads.

## Usage

1. Open the `index.html` file in your web browser.
2. View the time blocks for the current day.
3. Enter your events for each hour by clicking into the text area of the respective time block.
4. Click the save button for each event to save it.
5. Saved events will persist even after refreshing the page.

## Technologies Used

- HTML
- CSS
- JavaScript (jQuery)
- Day.js library for date and time manipulation

## Installation

No installation is required. Simply open the `index.html` file in your web browser to start using the application.

