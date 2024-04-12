import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: apiDeleteBooking,
    onSuccess: () => {
      toast.success("booking successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isDeleting, deleteBooking };
}
