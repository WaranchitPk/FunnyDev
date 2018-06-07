export const chiangmaiData_Top10 = () => {
  let c = [];
  for (let i = 1; i <= 10; i++) {
    const data = {
      id: i,
      no: i,
      name: `TC${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};
export const chiangmaiData_Top50 = () => {
  let c = [];
  for (let i = 1; i <= 50; i++) {
    const data = {
      id: i,
      no: i,
      name: `T${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};
export const chiangmaiData_Top100 = () => {
  let c = [];
  for (let i = 1; i <= 100; i++) {
    const data = {
      id: i,
      no: i,
      name: `T${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};


export const pitsanulok_Top10 = () => {
  let c = [];
  for (let i = 1; i <= 10; i++) {
    const data = {
      id: i,
      name: `TP${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};
export const pitsanulok_Top50 = () => {
  let c = [];
  for (let i = 1; i <= 50; i++) {
    const data = {
      id: i,
      name: `TP${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};
export const pitsanulok_Top100 = () => {
  let c = [];
  for (let i = 1; i <= 100; i++) {
    const data = {
      id: i,
      no: i,
      name: `TP${i}`,
      course: `C${i}`,
      volume: `V${i}`
    };
    c.push(data);
  }
  const dataS = {
    dataCourse: c
  };
  return dataS;
};