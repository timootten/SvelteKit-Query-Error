import { query } from "$app/server";
import { error } from "@sveltejs/kit";

export const getTestQuery = query(async () => {
  if (Math.random() > 0.5) {
    error(500, "Random error occurred");
  } else {
    return "This is the data";
  }

});