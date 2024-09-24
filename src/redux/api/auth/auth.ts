import { baseApi } from "../api";

export const authApi = baseApi.enhanceEndpoints({ addTagTypes: ["user"] }).injectEndpoints({
    endpoints: (build) => ({
      signUp: build.mutation({
        query: (userInfo) => {

            return{
                url:"",
                method:"POST",
                body:userInfo
            }
        },
        // providesTags:["user"]
      }),
    }),
    
    overrideExisting: false,
  })
  
  export const {useSignUpMutation  } = authApi