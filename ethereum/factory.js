import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xC9AA533c54602eEfc162BF19990e82A93B345A74'
);

export default instance;