
//the genesis data contains the default data for the genesis block
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: new Date(),
    lastHash: '-----',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

module.exports = { GENESIS_DATA }