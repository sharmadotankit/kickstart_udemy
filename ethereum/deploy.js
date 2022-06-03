const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'loyal dust hole mention width icon grit wrestle grid board copper term',
    'https://rinkeby.infura.io/v3/ae6e78a9748b401d967556d1f516c3d9'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ gas: '5000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();

// Contract deployed to  0xcAe8918531c0cC5196C67417E806c14c4894C897