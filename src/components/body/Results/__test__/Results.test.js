import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Results from "../Results";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { mockedResults } from "../mock/mockedResults";
Enzyme.configure({ adapter: new Adapter() });

//mockedProps
const mockedProps = {
  entries: mockedResults
}

describe("<Results />", () => {
  it("Renders result container", () => {
    const wrapper = shallow(<Results {...mockedProps} />)
    expect(wrapper.find(".container").length).toEqual(1)
  })
})