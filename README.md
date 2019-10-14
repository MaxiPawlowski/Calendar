# Calendar

## Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Run the application](#run-the-application)
- [Testing](#testing)

## Project Overview

The project is based on CRA, using React and Redux for state management.

## Project Structure

All application source code, is located inside the `src` folder.

**components:** Components that handle specific portions of UI (components can contain sub-components).

**screens:** Refer to components that:

- Act as layout for other componetes.
- Are directly connected to redux.
- Are used to render routes.
- Mix of above cases.

**sagas/actions/reducers/store:** Handles Redux configuration.

**utils:** Utils to be shared across the code base.

## Run the application

Run the following command:

`yarn start`

## Testing

For testing, `yarn run test` will run the unit tests watching for changes.

For linting, `yarn run lint` will do the job.
