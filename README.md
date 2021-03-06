# Server Side Calculator

A server-side calculator, with all calculator logic occuring **entirely** on the server.

## Description

### Base
- [X] Two input elements for the values
- [X] A submit button marked with `=`, which bundles the input into an object and sends it to the server via a POST
- [X] A 'C' clear button, which clears the user input fields
- [X] A number of calculations, all done on the server
- [X] A GET request to return the actual calculation
- [X] A record of all math operations and solutions on the server
- [X] Displays a list of all previous calculations on the page when it loads via a GET request
- [X] Update the list for new calculations
### Stretch
- [ ] Convert the interface
- [ ] Only allow the POST call to happen if all necessary input is ready
- [ ] A button that allows the user to clear the history using a DELETE request