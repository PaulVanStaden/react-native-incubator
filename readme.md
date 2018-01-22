# React Native - The cool parts

## Reactyness -> Alex
- Why and what is a virtual DOM? 
- How state is used to control when your components modify the Virtual DOM. 
- When state is updated it's not synchronous
Component Lifecycle - constructor, componentWillMount, componentDidMount, componentWillUpdate, componentDidUpdate
- When to make requests to your server.
- Where to update state.    
- Pitfalls
    - Dom Reference stuff like ScrollTo, Achor, jQuery stuff

### JSX -> Paul
- Why use JSX?
- What is a stateful component?
- What is a stateless component? 
- Why use stateless components?
- When does it rerender and not rerender?
    
### Redux -> Alex
- What is it?
- If React manages state already why would you want to use Redux?
    - Deeply Nested components
- What else does Redux do?
- Watch the Flux pattern talk again, consider showing it.
   * Crop this talk, https://facebook.github.io/flux/docs/in-depth-overview.html
- Ducks 
- Pitfalls
    - Folder structure
    - Navigation
- Folder structures
    - Functional vs Feature 
    
### Testing - Enzyme, Jest -> Paul
- What to test?- End to end testing is an alternative to testing with JSDOM
- Snapshots vs End-To-End

### Deploying, Devices, Maintenance and Upgrading -> Paul
- Deploying 
    - Building for production
    - building with CI - AppCentre
    - Building for IOS
    - Dependency management for Android and IOS
    - IOS deploy takes 2 weeks to get to store

- Devices
    - Support for Android pre 4.4
    - Test of Physical devices, emulators mess around with networking
    - Some devices' styling sucks, LG G4, Iphone 1 - X
    
- Maintenance
    - Rollout is hard because users have a physical phone that is not up to date with your deployments
    - Manage users' metrics inside the app (react-native-device-info)

- Upgrading
    - Keep node packages up to date every 2 weeks..
    - Keep dependencies static (^1.0.0 vs 1.0.0)
    - Rather try styling on your own than styling with packages (Compatibility)