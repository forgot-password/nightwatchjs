
# Setting up the debugger

VSCode uses a debug configuration file that is loaded when starting the debugging session. It will be located inside `"${workspaceRoot}/.vscode/launch.json”`.

Creating the debug configuration file
To create `launch.json` file:
* Click on the Debug icon in the left menu, or type CTRL+Shift+D.
* Click the settings icon in the top left side of the IDE window, next tot the run debug button. This will generate a launch.json file
* Add the below nightwatchjs related configuration by overwriting the existing “configurations” object. Observe the absolute path to the nightwatch runner, and the optional arguments needed to run a specific test. “args” can be modified to use any nightwatch command line parameter. e.g. run only a specific test, browser, group etc. (http://nightwatchjs.org/guide/#command-line-options)
```
   "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Nightwatch",
            "program": "${workspaceFolder}/node_modules/.bin/nightwatch",
            "stopOnEntry": false,
            "args": [                        
                        "--config",
                        "${workspaceFolder}/test/nightwatch.js",                
                        "pat/to/test/test.js",
                        "--testcase 'Test case name'"
                    ],
            "skipFiles": [
                "${workspaceFolder}/node_modules/nightwatch/**/*.js",
    "${workspaceFolder}/node_modules/assertion-error/**/*.js",
                "${workspaceFolder}/node_modules/chai-nightwatch/**/*.js",
                "<node_internals>/**/*.js"
              ],
            "runtimeExecutable": null,
            "smartStep": true,
            "sourceMaps": false
            
        }
    ]
```
**program** - the nodejs program to debug

**args** - command line arguments for the running nodejs program

**env** - environment variables

**skipFiles** - files to be skipped during debugging, like node internals, or libraries that you don't want to step into. This config steps only into /tests files

More information on VSCode debugging: https://code.visualstudio.com/docs/editor/debugging
