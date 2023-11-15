import { delay } from "$std/async/delay.ts";

const {
  resolve,
} = import.meta;

let already_loaded = false;
const data_consumers = [] as 1[];

async function load_data() {
  console.log("load_data()...");
  await delay(100);

  setTimeout(() => {
    if (data_consumers.length) return;

    already_loaded = false;

    tiny_db.data_index.clear();
    tiny_db.index_data.clear();
  }, 5_000);

  const data = await Deno
    .readTextFile(new URL(resolve("./data.txt")))
    .then((d) => d.split("\n"));

  for (let i = 0, len = data.length; i < len; ++i) {
    tiny_db.data_index.set(data[i], i);
    tiny_db.index_data.set(i, data[i]);
  }

  already_loaded = true;
}

const tiny_db = {
  data_index: new Map<string, number>(),
  index_data: new Map<number, string>(),
};

export async function get_data() {
  console.log("get_data()...");
  if (!already_loaded && !data_consumers.length) await load_data();

  data_consumers.push(1);

  let already_done = false;

  return {
    tiny_db,
    done: () => {
      if (already_done) return;

      already_done = true;
      data_consumers.pop();

      if (!already_loaded && !data_consumers.length) {
        tiny_db.data_index.clear();
        tiny_db.index_data.clear();
      }
    },
  };
}
