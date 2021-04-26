// This script will find and delete all assets that are not
// referenced (in use) by other documents. Sometimes refered
// to as "orphaned" assets.
//
// Place this script somewhere and run it through
// `sanity exec <script-filename.js> --with-user-token`

/* eslint-disable no-console */
import client from "part:@sanity/base/client";
// const query = ` *[_id == '1a3a72b3-5c18-46fd-aa1a-129684fce04d']`;
const query = `
  *[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`

client
  //.delete({ query: '*[_id == "1a3a72b3-5c18-46fd-aa1a-129684fce04d"]' })
  .fetch(query)
  .then((ids) => {
    if (!ids.length) {
      console.log("No assets to delete");
      return true;
    }

    console.log(`Deleting ${ids.length} assets`);
    return ids

      .reduce((trx, id) => trx.delete(id), client.transaction())
      .commit()
      .then(() => console.log("Done!"));
  })
  .catch((err) => {
    if (err.message.includes("Insufficient permissions")) {
      console.error(err.message);
      console.error("Did you forget to pass `--with-user-token`?");
    } else {
      console.error(err.stack);
    }
  });
