# Desktop Cat Facts 
We are prototyping a desktop application that notifies the user on the latest cat facts. 

# Tech Stack

This is an electron js app with typescript, webpack, react, and mui material under the hood. 

# Todo

1. Test manually in Windows (on macOs it works)
2. Write unit tests
3. Security: check that the persistance file ('userdata.txt') with user app data is not corrupted (e.g. add hash checksum)
4. Api: add better TS types provisioning for fs-api and web api in window.fs and window.api
5. Bug: fast clicks on Favourites icon lead to getting a fact to the list multiple times
6. Fs-api: make read-write app user data object more transparent 
