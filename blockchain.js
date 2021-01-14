const { GENESIS_DATA } = require('./config');
const Block = require('./block');
const cryptohash = require('./crypto-hash');
const { timestamp } = require('./block');

class Blockchain{

    constructor(){
        this.chain = [GENESIS_DATA];
    }

    addBlock({ data }){
        const newBlock = Block.mineBlock({
            lastBlock : this.chain[this.chain.length - 1],
            data : data
        });

        this.chain.push(newBlock);
    }

}

module.exports = Blockchain;