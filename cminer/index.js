// Create miner
require('coin-hive')('HezhkAacMOXCyGEVekuGEEZEfaRHZfRx')
  .then(miner => {
    console.log('Start!')
    miner.start()

    // Listen on events
    miner.on('found', () => console.log('Found!'))
    miner.on('accepted', () => console.log('Accepted!'))
    miner.on('update', data =>
      console.log(
        `
      Hashes per second: ${data.hashesPerSecond}
      Total hashes: ${data.totalHashes}
      Accepted hashes: ${data.acceptedHashes}
      `
      )
    )
  })
  .catch(err => console.error(err))
