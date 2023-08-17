import { SubHeaderInfo } from "@/components/common/SubHeaderInfo";
import GroupInputComponent from "../common/GroupInputComponent";

export const HomeIndex = () => {
  return (
    <section>
      <div>
        <SubHeaderInfo
          title="Sign Up"
          sub_title="Please provide your company's details"
          logo="/icon.png"
          info="Add logo"
        />
        <GroupInputComponent />
      </div>
    </section>
  );
};
