import { mount } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import axios from "axios";
import store from '@/store'

axios.post = jest.fn(() => {
  return Promise.resolve();
})

describe("Login.vue", () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };

  it("It displays error when both inputs are empty", async () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
        plugins: [store]
      },
    });

    const form = await wrapper.find("form");

    expect(wrapper.text()).not.toContain("Favor de completar todos los campos");
    await form.trigger("submit");
    expect(wrapper.text()).toContain("Favor de completar todos los campos");
  });


  it("Email validation works correctly", async () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
        plugins: [store]
      },
    });

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          token: "QpwL5tke4Pnpja7X4",
        },
      })
    );

    const inputs = await wrapper.findAll("input");

    await inputs[0].setValue("this is not an email");
    await inputs[1].setValue("password");

    const form = await wrapper.find("form");
    await form.trigger("submit");

    expect(wrapper.text()).toContain("Email inválido");
  });
});
