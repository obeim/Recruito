import Button from "../components/Button";

const StartSection = () => {
  return (
    <div className="h-[80vh] relative">
      <img
        src="start_section/ready_bg.png"
        className="absolute right-0 top-[20vh]"
      />
      <img
        src="start_section/ready_bg2.png"
        className="absolute left-0 top-[20vh]"
      />
      <div className="flex flex-col w-full h-full items-center justify-center relative z-10">
        <img
          src="start_section/ready_search_people.svg"
          className="w-[114px] h-[114px]"
        />
        <p className="text-darkBlueGray text-5xl font-semibold text-center max-w-[530px] mb-10 mt-3">
          Ready to enhance your hiring process ?
        </p>
        <Button text="Request a Demo" />
      </div>
    </div>
  );
};

export default StartSection;
