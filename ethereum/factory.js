import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xcAe8918531c0cC5196C67417E806c14c4894C897'
);


export default instance;