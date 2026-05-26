import Button from '../../common/Button/Button';

function OTPVerification() {

  return (
    <div>

      <h2
        className="
          text-4xl
          font-bold
          text-white
          mb-3
        "
      >
        Verify OTP
      </h2>

      <p className="text-gray-400 mb-8">
        Enter the OTP sent to your email.
      </p>

      <div className="flex gap-4 mb-8">

        <input className="w-14 h-14 rounded-xl bg-gray-800 text-white text-center" />
        <input className="w-14 h-14 rounded-xl bg-gray-800 text-white text-center" />
        <input className="w-14 h-14 rounded-xl bg-gray-800 text-white text-center" />
        <input className="w-14 h-14 rounded-xl bg-gray-800 text-white text-center" />

      </div>

      <Button className="w-full">
        Verify OTP
      </Button>

    </div>
  );
}

export default OTPVerification;