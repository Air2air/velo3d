const timeDiffCalc = (d0, d1) =>{
    let diffInMilliSeconds = Math.abs(d1 - d0) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    const hrs = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hrs * 3600;

    const mins = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= mins * 60;

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hrs === 0 || hrs === 1) ? `${hrs} hr, ` : `${hrs} hrs, `;

    difference += (mins === 0 || hrs === 1) ? `${mins} mins` : `${mins} mins`; 

    return difference;
  }

  export default timeDiffCalc