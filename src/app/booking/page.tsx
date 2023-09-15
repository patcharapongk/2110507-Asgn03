import Form from "./Form";

const Booking = () => {
  return (
    <div className="w-screen min-h-[90vh] flex flex-col justify-between items-center">
      <div>
        <h1 className="text-4xl text-black"> การจองวัคซีน </h1>
      </div>
      <Form />
      <div />
    </div>
  );
};

export default Booking;
