const Experience = () => {
  return (
    <section className="relative">
      <div className="absolute w-1 h-full bg-white left-1/2"></div>
      <div className="relative h-[400px] w-[400px] left-[20%]">
        <img
          className=" object-contain"
          src="https://res.cloudinary.com/ddkfpnw7u/image/upload/v1712850366/IORHCKVYIZ_page-0001_miqztd.jpg"
        />
      </div>
      <div className="relative">
        <div className="absolute h-[400px] w-[400px] right-[20%] ">
          <img
            className=" object-contain"
            src="https://res.cloudinary.com/ddkfpnw7u/image/upload/v1712850375/HNMNZIIACI_page-0001_njypma.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
