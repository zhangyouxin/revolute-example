export type CardProps = {
  isActive?: boolean;
  title: string;
  body: string;
  bgIcon: string;
  bodyIcon?: string;
  footer: React.ReactNode;
};

export const Card = (props: CardProps) => {
  const { title, body, bodyIcon, footer, bgIcon } = props;

  return (
    <div
      className={`
        flex flex-col items-center justify-between 
        p-4 rounded-lg shadow-lg 
        w-[13rem] h-[16rem]
        md:w-[16rem] md:h-[20rem]
        lg:w-[18rem] lg:h-[22rem]
        text-white
        bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${bgIcon})` }}
    >
      <div className="flex flex-col items-center justify-center mt-[40%] gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center justify-center w-full h-full bg-white text-black rounded-full px-4 py-1">
          {bodyIcon && (
            <img src={bodyIcon} alt="icon" className="w-8 h-8 mr-2" />
          )}
          <p>{body}</p>
        </div>
      </div>
      <div>{footer}</div>
    </div>
  );
};
