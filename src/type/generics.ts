// interface Response {
//     // data: any;
//     // data: string | number | boolean | object | null;
//     status: number;
// }

interface Response<T> {
  data: T;
  status: number;
}

const transactionResponse: Response<string> = {
  data: "Transaction successful",
  status: 200,
};

const transactionStatus: Response<boolean> = {
  data: false,
  status: 200,
};

const transactionAmount: Response<number> = {
  data: 215,
  status: 401,
};

function getLength<item>(array: item[]): number {
  return array.length;
}

getLength<string>(["", "", "3"]);
getLength<number>([4, 6]);
