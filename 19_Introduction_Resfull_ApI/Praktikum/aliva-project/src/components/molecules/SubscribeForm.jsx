import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const SubscribeForm = () => (
  <form className="max-w-xl mx-auto">
    <div className="flex flex-col sm:flex-row">
      <Input
        type="email"
        required
        className="flex-grow mb-4 sm:mb-0 sm:mr-4 py-2 px-4"
        placeholder="Enter your email"
      />
      <Button className="bg-secondary hover:bg-blue-600 text-white">
        Subscribe
      </Button>
    </div>
  </form>
);
