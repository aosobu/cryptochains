const Block = require('./block');
const { GENESIS_DATA } = require('./config');

describe('Block', ()=>{

    const timestamp = new Date();
    const lastHash = 'foo-lastHash';
    const hash = 'hash';
    const data = ['blockchain', 'data'];
    const block = new Block({timestamp, lastHash, hash, data});

    it('has a timestamp, lastHash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()' , () => {
        const genesisBlock = Block.genesis();

        it('returns a block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        })

        it('returns the gensis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    })

}); 