# Start the Application.

- Project done using Node v14.18.2 and Yarn v1.22.17
- Using GIT to clone this repository, then you can run "yarn install" to install all the dependencies
- Run "yarn start", the project will open on "localhost:3000" if you haven't defined a PORT or any other application is already using that port.

# Questions

1. Possible performance optimizations

- Add a debounce function to useInfiniteScroll Hook, so it doesn't get trigger so often when the user hits the end of the page.
- Use caching so it doesn't need to hit the API so often.

2. What could you have improved?

- I could add state management to the application, either using Context or Redux, so it wouldn't need to hit the api when going to PostPage.
- Created a SearchBar so you could search by post title.
