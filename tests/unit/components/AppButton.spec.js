import { mount } from "@vue/test-utils";
import AppButton from "@/components/AppButton.vue";

describe("AppButton.vue", () => {
  it("action fn works is called correctly", async () => {
    const action = jest.fn();
    const wrapper = mount(AppButton, {
      props: {
        action,
      },
      slots: {
        default: "ButtonText",
        icon: "Icon",
      },
    });

    expect(wrapper.text()).toMatch("IconButtonText");

    await wrapper.find("button").trigger("click");
    expect(action).toHaveBeenCalled();
  });
});
