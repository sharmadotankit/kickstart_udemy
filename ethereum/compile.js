const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// Course approach 
// const output = solc.compile(source, 1).contracts;

// Stack overflow
let input = {
    language: "Solidity",
    sources: {
        [campaignPath]: {
            content: source,
        },
    },

    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
let values = Object.values(output.contracts)[0];

fs.ensureDirSync(buildPath);

for (let contract in values) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract + '.json'),
        values[contract]
    );
}





