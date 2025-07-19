// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const leadsApi = createApi({
  reducerPath: "leadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api/leads" }),
  endpoints: (builder) => ({
    getAllLeads: builder.query({
      query: () => `/`,
    }),
    getLeadById: builder.query({
      query: (id) => `/${id}`
    }),
    addLead: builder.mutation({
      query: (leadData) => ({
        url: '/',
        method: 'POST',
        body: leadData,
      }),
    }),
    editLead: builder.mutation({
      query: (lead) => ({
        url: `/${lead['_id']}`,
        method: 'PUT',
        body: lead
      })
    }),
    deleteLead: builder.mutation({
      query: (id) => ({
        url:`/${id}`,
        method:'DELETE'
      })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllLeadsQuery, useLazyGetAllLeadsQuery, useAddLeadMutation, useGetLeadByIdQuery, useLazyGetLeadByIdQuery, useEditLeadMutation, useDeleteLeadMutation } = leadsApi;
