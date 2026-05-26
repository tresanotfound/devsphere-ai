import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import SocialLogin from '../SocialLogin/SocialLogin';

function SignupForm() {

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
        Create Account
      </h2>

      <p className="text-gray-400 mb-8">
        Start your DevSphere journey
      </p>

      <div className="space-y-5">

        <Input
          placeholder="Full Name"
        />

        <Input
          type="email"
          placeholder="Email Address"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button className="w-full">
          Sign Up
        </Button>

      </div>

      <SocialLogin />

    </div>
  );
}

export default SignupForm;