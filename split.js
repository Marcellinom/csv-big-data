import csvsplit from 'csv-split-stream'
import { createReadStream, createWriteStream } from 'fs'

csvsplit.split(
    createReadStream('./tokped+passhash.csv'),
    {
        lineLimit: 1000000
    },
    (index) => createWriteStream(`./datas/tokped-${index}.csv`)
)
.then(csvSplitResponse => {
    console.log('csvSplitStream succeeded.', csvSplitResponse);
  }).catch(csvSplitError => {
    console.log('csvSplitStream failed!', csvSplitError);
  });