import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Learning } from "@/types/learning/learning";

interface GetUserLearningPathResponse {
  data: Learning[];
}

export const getUserLearningPathHandler = async (
  token: string
): Promise<GetUserLearningPathResponse> => {
  const { data } = await api.get<GetUserLearningPathResponse>(
    "/user-learning-path",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetUserLearningPath = (
  token: string,
  options?: Partial<UseQueryOptions<GetUserLearningPathResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["user-learning-path"],
    queryFn: () => getUserLearningPathHandler(token),
    ...options,
  });
};
