import * as AWS from 'aws-sdk';
import { promises as fs } from 'fs';
import Textract from 'aws-sdk';
// const Textract = new AWS.Textract();

const main = async () => {
  try {
    // read the image
    const buf = await fs.readFile('./image.png');
    console.log(buf)
    // // send to aws
    // const res = await Textract.detectDocumentText({ Document: { Bytes: buf } }).promise();
    // // parse the result
    // console.log(res)
    // console.log(res.Blocks.filter(i => i.BlockType === 'LINE').map(i => i.Text).join('\n'));
  } catch (err) {
    console.error(err);
  }
};

main();