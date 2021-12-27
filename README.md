<div align="center">
    <img src="https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/src/assets/jobsity_logo_small.png"/>
</div>

# React Challenge
 Considerations:
 - You can Add,delete or edit the reminders.
 - You can edit the city for each reminder so a new request is sended to get the weather for that city
 - Data persistion is managed with the localStorage, saving the last redux/calendar state
 - The reminder text is limited to 30 characters
 - The calendar was created by HTML and CSS only, the files are in sass/styles.css and sass/components paths
 - The calendar and the components are in the component/calendar folder
 - For data management there is a Reducer for the Redux Store call calendar
 - The calendar has a bit of responsive desing
 - For the WeatherAPI request is necesary to use this api key: e3811b5195290d1324b88fb03b393c58 on the config/openWeatherConfig.js path
 - Current there is no a Unit Test for AddReminder Component.
 - You can create reminders only for dec-2021, however if you created a reminder outside this month the data is created correctly in the Redux Store but the ui doesn't show it

## How to deploy

 - Run `npm install` | `yarn install` to install all dependencies.
 - Run `npm start`   | `yarn run` to run the app locally.
 - You can find the project running on `localhost:3000`.
