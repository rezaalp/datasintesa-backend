const data = require("./data");

let oke = [
  {
    groupby: {
      job: "frontend",
      goldarah: "O",
    },
    data: [
      {
        job: "frontend",
        name: "cecep budiman",
        tinggibadan: 173,
        goldarah: "O",
      },
      {
        job: "frontend",
        name: "wido",
        tinggibadan: 165,
        goldarah: "O",
      },
    ],
  },
  {
    groupby: {
      job: "frontend",
      goldarah: "A",
    },
    data: [
      {
        job: "frontend",
        name: "ismail",
        tinggibadan: 170,
        goldarah: "A",
      },
    ],
  },
  {
    groupby: {
      job: "backend",
      goldarah: "A",
    },
    data: [
      {
        job: "backend",
        name: "aldi",
        tinggibadan: 169,
        goldarah: "A",
      },
    ],
  },
  {
    groupby: {
      job: "frontend",
      goldarah: "B",
    },
    data: [
      {
        job: "frontend",
        name: "raditya",
        tinggibadan: 174,
        goldarah: "B",
      },
    ],
  },
  {
    groupby: {
      job: "backend",
      goldarah: "AB",
    },
    data: [
      {
        job: "backend",
        name: "hq",
        tinggibadan: 166,
        goldarah: "AB",
      },
    ],
  },
];

function grouping(data) {
  const jobGoldarah = data.map((el) => {
    let jobAndBlood = {
      groupby: {
        job: el.job,
        goldarah: el.goldarah,
      },
    };
    return jobAndBlood;
  });

  const filtered = jobGoldarah.filter((value, index, self) => {
    return (
      index ===
      self.findIndex((t) => {
        return (
          t.groupby.job === value.groupby.job &&
          t.groupby.goldarah === value.groupby.goldarah
        );
      })
    );
  });

  let temp = [];
  for (let i = 0; i < filtered.length; i++) {
    temp.push({
      groupby: {
        job: filtered[i].groupby.job,
        goldarah: filtered[i].groupby.goldarah,
      },
      data: [],
    });
    for (let j = 0; j < data.length; j++) {
      if (
        data[j].job === filtered[i].groupby.job &&
        data[j].goldarah === filtered[i].groupby.goldarah
      ) {
        temp[i].data.push(data[j]);
      }
    }
  }
  return temp;
}

console.log(grouping(data));
