import { query } from "$app/server";


type Response<T> = {
  success: true;
  message?: string;
  data: T;
} | {
  success: false;
  message: string;
}

export const getTestQuery = query(async () => {
  if (Math.random() > 0.5) {
    return {
      success: true,
      data: "This is some test data"
    } as Response<string>;
  } else {
    return {
      success: false,
      message: "An error occurred while fetching the data"
    } as Response<string>;
  }

});