import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

function ForgotPassword() {

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
        Forgot Password
      </h2>

      <p className="text-gray-400 mb-8">
        We’ll send a reset link to your email.
      </p>

      <div className="space-y-5">

        <Input
          type="email"
          placeholder="Enter your email"
        />

        <Button className="w-full">
          Send Reset Link
        </Button>

      </div>

    </div>
  );
}

export default ForgotPassword;