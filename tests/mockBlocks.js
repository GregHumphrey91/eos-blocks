const uuid = require("uuid");
// Mock Data

const blocks = [
  {
    timestamp: Date.now(),
    producer: "GregGains",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 12345,
    id: "100"
  },
  {
    timestamp: Date.now(),
    producer: "GregGains",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 67891,
    id: "200"
  },
  {
    timestamp: Date.now(),
    producer: "GregGains",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 55124,
    id: "300"
  },
  {
    timestamp: Date.now(),
    producer: "GregGains",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 11914,
    id: "400"
  },
  {
    timestamp: Date.now(),
    producer: "GregGains",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 55555,
    id: "500"
  },
  {
    timestamp: Date.now(),
    producer: "JamesBurbage",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      },
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 89178,
    id: "600"
  },
  {
    timestamp: Date.now(),
    producer: "JohnDoe",
    confirmed: 0,
    previous: "test data",
    transaction_mroot: "test data",
    action_mroot: "test data",
    schedule_version: 101,
    new_producers: "",
    header_extensions: [],
    producer_signature: "test data",
    transactions: [
      {
        status: "finished",
        cpu_usage_us: uuid.v4(),
        net_usage_words: "1000wpm"
      }
    ],
    block_num: 12999,
    id: "700"
  }
];

module.exports = blocks;
