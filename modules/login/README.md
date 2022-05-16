# Login Module
The Login Module is a React Native-based module that allows the user to login or signup within their app.


## Installation

#### Update api url

Update the file `<module_directory>/auth/api.js`, replacing the value of `baseURL` with your own app's backend url. For example, if your app is called `my-app` and has a url of `https://my-app.botics.co`, update from
`baseURL: "https://your-app-backend.botics.co"` to `baseURL: "https://my-app.botics.co"`

Note for developers: you can access the user token through the reducer state (i.e. `state.login.token` and user auth information like email at `state.login.user`)
