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

    static isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
            return false;

        for(let i = 1; i<chain.length; i++){
            const block = chain[i];
            const { timestamp, lastHash, hash, data} = block;
            const actualLastHash = chain[i - 1].hash;
            if(lastHash !== actualLastHash)
                return false;

            const validatedHash = cryptohash(timestamp, lastHash, data);    
            if(validatedHash !== hash)
            return false;
        }

       return true;  
    }

}

module.exports = Blockchain;