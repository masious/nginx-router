var exec = require('child_process').exec;
const platform = require('connect-platform');


platform.core.node({
  path: '/new',
  public: false,
  method: 'GET',
  inputs: ['name', 'port'],
  outputs: [],
  controlOutputs: [],
  hints: {
    node: 'says hellow to <span class="hl-blue">name</span>.',
    inputs: {
      name: 'Name of the service on docker',
      port: 'Port'
    },
    outputs: {
      message: 'the hellow message to the given <span class="hl-blue">name</span>.'
    },
    controlOutputs: {}
  }
},
  (inputs, output, control) => {
    exec(`./new-router ${inputs.name} ${inputs.port}`);
  }
);
