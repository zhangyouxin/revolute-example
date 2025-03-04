type PaginationProps = {
  page: number;
  totalPages: number;
};

export const Pagination = (props: PaginationProps) => {
  const { page, totalPages } = props;

  return (
    <div className="flex justify-center items-center space-x-2">
      {new Array(totalPages).fill(null).map((_, index) => (
        <div
          key={index}
          className={`bg-[#aaa] rounded-full ${
            index === page ? "w-3 h-3" : "w-2 h-2"
          }`}
          style={{ transition: "all 0.3s" }}
        />
      ))}
    </div>
  );
};
