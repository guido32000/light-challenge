import { get } from "../helper/api";
import { useQuery } from "@tanstack/react-query";

const usePatientList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["patient-list"],
    queryFn: async () => get(`/users`).then((response) => response.data),
  });

  return {
    patientList: data,
    isLoading,
  };
};

export default usePatientList;
