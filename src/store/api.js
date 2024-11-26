import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2408-ftb-et-web-amE";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseURL: API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes:['Puppy'],
    endpoints: () => ({}),
});
export default api
